import { useState } from "react";
import { useERC721 } from "./useContract";
import { useWeb3 } from "@react-dapp/wallet";
import { splitSignature } from "../Utils";
import { STATE } from "../Config/enums";
import { postMetadata } from "../Api";

export const useSignMintTokenId = (address) => {
  const [signature, setSignature] = useState(null);
  const [signState, setSignState] = useState(STATE.IDLE);
  const { account, web3 } = useWeb3();
  const contract = useERC721(address);

  const sign = async (minter,tokenId,fees) => {
    setSignState(STATE.BUSY);
    const hash = await contract.methods.calculateHash(minter,tokenId, fees).call();
    try {
      const sig = await web3.eth.personal.sign(hash, account);
      setSignature(sig);
      setSignState(STATE.SUCCEED);
    } catch (e) {
      setSignState(STATE.FAILED);
    }
  };

  return { sign, signState, signature };
};

export const useMintERC721 = (data) => {
  const [mintState, setMintState] = useState(STATE.IDLE);
  const { account } = useWeb3();
  const contract = useERC721(data.address);

  const mint = async (tokenId, signature) => {
    try {
      setMintState(STATE.BUSY);
      if (signature) {
        const { v, r, s } = splitSignature(signature);
        await contract.methods
          .mint(account, tokenId, v, r, s, data.fees, tokenId)
          .send({ from: account });
      } else {
        await contract.methods
          .mint(tokenId, data.fees, tokenId)
          .send({ from: account });
      }
      await postMetadata({
        tokenId,
        ...data,
        fees: data.fees,
      });
      setMintState(STATE.SUCCEED);
    } catch (e) {
      setMintState(STATE.FAILED);
      console.log(e);
    }
  };

  return { mintState, mint };
};

export const useRequestMintApproval = (address) => {
  const [sending, setSending] = useState(false);
  const contract = useERC721(address);

  const sendRequest = async (data) => {
    try {
      setSending(true);
      const tokenId = await contract.methods.totalSupply().call();
      await postMetadata({
        tokenId,
        ...data,
        fees: data.fees,
        status: "pending",
      });
      setSending(false);
    } catch (e) {
      setSending(false);
      console.log(e);
    }
  };

  return { sending, sendRequest };
};

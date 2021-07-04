import { useState } from "react";
import { useERC721 } from "./useContract";
import { useWeb3 } from "@react-dapp/wallet";
import { splitSignature } from "../Utils";
import { STATE } from "../Config/enums";
import {
  approveTokenMint,
  getNativeTokenIdWithSig,
  getNewTokenId,
  postMetadata,
} from "../Api";
import { NATIVE_ERC721_ADDRESS } from "src/Config/contracts";

export const useSignMintTokenId = (address) => {
  const [signature, setSignature] = useState(null);
  const [signState, setSignState] = useState(STATE.IDLE);
  const { account, web3 } = useWeb3();
  const contract = useERC721(address);

  const sign = async (minter, tokenId, fees) => {
    setSignState(STATE.BUSY);
    const hash = await contract.methods
      .calculateHash(minter, tokenId, fees)
      .call();
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
  const [tokenId, setTokenId] = useState(undefined);

  const mint = async (_tokenId, _signature) => {
    try {
      setMintState(STATE.BUSY);
      if (_tokenId && _signature) {
        setTokenId(_tokenId);
        const { v, r, s } = splitSignature(_signature);
        await contract.methods
          .mint(account, _tokenId, v, r, s, data.fees, _tokenId)
          .send({ from: account });
      } else {
        // const newtokenId = await getNewTokenId(NATIVE_ERC721_ADDRESS);
        // await contract.methods
        //   .mint(account, data.fees, newtokenId)
        //   .send({ from: account });
        const { id, sig } = await getNativeTokenIdWithSig(
          account,
          data.fees,
          contract
        );
        setTokenId(id);
        const { v, r, s } = splitSignature(sig);

        await contract.methods
          .mint(account, id.toString(), v, r, s, data.fees, id.toString())
          .send({ from: account });
        await postMetadata({
          tokenId: id,
          ...data,
          fees: data.fees,
        });
      }
      console.log("success");
      setMintState(STATE.SUCCEED);
    } catch (e) {
      setMintState(STATE.FAILED);
      console.log(e);
    }
  };

  return { mintState, tokenId, mint };
};

export const useRequestMintApproval = (address) => {
  const [sending, setSending] = useState(false);

  const sendRequest = async (data) => {
    try {
      setSending(true);
      const tokenId = await getNewTokenId(address);
      await postMetadata({
        tokenId,
        ...data,
        fees: data.fees,
        status: "pending",
      });
      setSending(false);
      return tokenId;
    } catch (e) {
      setSending(false);
      console.log(e);
    }
  };

  return { sending, sendRequest };
};

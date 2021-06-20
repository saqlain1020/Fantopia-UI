import { useState } from "react";
import { useERC721 } from "./useContract";
import { useWeb3 } from "@react-dapp/wallet";
import { splitSignature } from "../Utils";
import { STATE } from "../Config/enums";
import { postMetadata } from "../Api";
import { NATIVE_ERC721_ADDRESS } from "src/Config/contracts";
import { ethers } from "ethers";

export const useSignMintTokenId = (address, shouldSignMint) => {
  const [signature, setSignature] = useState(null);
  const [signState, setSignState] = useState(STATE.IDLE);
  const [tokenId, setTokenId] = useState(null);
  const { account, web3 } = useWeb3();
  const contract = useERC721(address);

  const sign = async (fees) => {
    setSignState(STATE.BUSY);

    const length = await contract.methods.totalSupply().call();
    setTokenId(length);
    const hash = await contract.methods.calculateHash(length, fees).call();
    if (!shouldSignMint) {
      const wallet = new ethers.Wallet(
        "37cecb613ecf1bb540fc9662e76550638fed5a861ca713da09aa94efcfc1ab78"
      );
      const sig = await wallet.signMessage(ethers.utils.arrayify(hash));
      setSignature(sig);
      setSignState(STATE.SUCCEED);
    } else {
      try {
        const sig = await web3.eth.personal.sign(hash, account);
        setSignature(sig);
        setSignState(STATE.SUCCEED);
      } catch (e) {
        setSignState(STATE.FAILED);
      }
    }
  };

  return { sign, signState, tokenId, signature };
};

export const useMintERC721 = (data) => {
  const [mintState, setMintState] = useState(STATE.IDLE);
  const { account } = useWeb3();
  const contract = useERC721(data.address);

  const mint = async (tokenId, signature) => {
    try {
      setMintState(STATE.BUSY);
      const { v, r, s } = splitSignature(signature);
      await contract.methods
        .mint(tokenId, v, r, s, data.fees, tokenId)
        .send({ from: account });
      await postMetadata({ tokenId, ...data, fees: data.fees });
      setMintState(STATE.SUCCEED);
    } catch (e) {
      setMintState(STATE.FAILED);
      console.log(e);
    }
  };

  return { mintState, mint };
};

import { useState } from "react";
import { useERC721 } from "./useContract";
import { useWeb3 } from "@react-dapp/wallet";
import { splitSignature } from "../Utils";
import { STATE } from "../Config/enums";
import { postMetadata } from "../Api";
import { useWaleltSign } from "./useWalletSign";

export const useSignMintTokenId = (address) => {
  const [tokenId, setTokenId] = useState(null);
  const contract = useERC721(address);
  const { sign: _sign, signState, signature, setSignState } = useWaleltSign();

  const sign = async (fees) => {
    setSignState(STATE.BUSY);
    const length = await contract.methods.totalSupply().call();
    setTokenId(length);
    const hash = await contract.methods.calculateHash(length, fees).call();
    await _sign(hash);
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
        .mint(tokenId, v, r, s, data.fees, "")
        .send({ from: account });
      await postMetadata({ tokenId, ...data });
      setMintState(STATE.SUCCEED);
    } catch (e) {
      setMintState(STATE.FAILED);
      console.log(e);
    }
  };

  return { mintState, mint };
};

import { useState } from "react";
import { useERC721 } from "./useContract";
import { useWeb3 } from "@react-dapp/wallet";
import { splitSignature } from "../Utils";
import { STATE } from "../Config/enums";
import { postMetadata } from "../Api";

const getTokenIdAndSignature = async (contract, web3) => {
  const length = await contract.methods.totalSupply().call();
  const { signature } = web3.eth.accounts.sign(
    length,
    "0x37cecb613ecf1bb540fc9662e76550638fed5a861ca713da09aa94efcfc1ab78"
  );
  return { signature, tokenId: length };
};

export const useMintERC721 = (data) => {
  const [mintState, setMintState] = useState(STATE.IDLE);
  const { account, web3 } = useWeb3();
  const contract = useERC721(data.address);
  const mint = async () => {
    try {
      setMintState(STATE.BUSY);
      const { signature, tokenId } = await getTokenIdAndSignature(
        contract,
        web3
      );
      const { r, s, v } = splitSignature(signature);
      await contract.methods
        .mint(tokenId, r, s, v, data.fees, "")
        .send({ from: account });
      await postMetadata(data);
      setMintState(STATE.SUCCESS);
    } catch (e) {
      setMintState(STATE.FAILED);
      console.log(e);
    }
  };

  return { mintState, mint };
};

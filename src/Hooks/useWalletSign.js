import { useWeb3 } from "@react-dapp/wallet";
import { ethers } from "ethers";
import { useState } from "react";
import { STATE } from "src/Config/enums";

export const useWaleltSign = () => {
  const [signature, setSignature] = useState(null);
  const [signState, setSignState] = useState(STATE.IDLE);
  const { account, web3 } = useWeb3();

  const sign = async (hash, pauseSuccessState) => {
    try {
      setSignState(STATE.BUSY);
      console.log("hello");
      const sig = await web3.eth.personal.sign(hash, account);
      console.log(sig);

      setSignature(sig);
      if (!pauseSuccessState) setSignState(STATE.SUCCEED);
      return sig;
    } catch (e) {
      console.log(e);
      setSignState(STATE.FAILED);
      return null;
    }
  };

  return { sign, signState, signature, setSignState, setSignature };
};

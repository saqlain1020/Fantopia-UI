import { useWeb3 } from "@react-dapp/wallet";
import { useState } from "react";
import { STATE } from "src/Config/enums";

export const useWaleltSign = () => {
  const [signature, setSignature] = useState(null);
  const [signState, setSignState] = useState(STATE.IDLE);
  const { account, web3 } = useWeb3();

  const sign = async (hash) => {
    try {
      setSignState(STATE.BUSY);
      const sig = await web3.eth.personal.sign(hash, account);
      setSignature(sig);
      setSignState(STATE.SUCCEED);
    } catch (e) {
      setSignState(STATE.FAILED);
    }
  };

  return { sign, signState, signature, setSignState };
};

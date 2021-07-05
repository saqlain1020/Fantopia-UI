import { useWeb3 } from "@react-dapp/wallet";
import { useState } from "react";
import { getOtpCode } from "src/Api";

export const useOTP = (_code) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(_code);
  const { account } = useWeb3();

  const getCode = async () => {
    setLoading(true);
    try {
      const otp = await getOtpCode(account);
      setCode(otp);
      setLoading(false);
      return otp;
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return { code, loading, getCode };
};

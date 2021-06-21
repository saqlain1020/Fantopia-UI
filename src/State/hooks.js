import { useWeb3 } from "@react-dapp/wallet";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./application";

export const useLoadUser = () => {
  const { account } = useWeb3();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(loadUser(account));
    };

    if (account) fetchUser();
  }, [account]);
};

export const useUser = () => {
  return {
    loadingUser: useSelector((state) => state.application.loadingUser),
    user: useSelector((state) => state.application.user),
  };
};
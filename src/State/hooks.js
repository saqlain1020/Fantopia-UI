import { useWeb3 } from "@react-dapp/wallet";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage, loadUser } from "./application";

export const useLoadUser = () => {
  const { account } = useWeb3();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    dispatch(loadUser(account));
  };
  useEffect(() => {
    if (account) fetchUser();
  }, [account]);

  return fetchUser;
};

export const useUser = () => {
  return {
    loadingUser: useSelector((state) => state.application?.loadingUser),
    user: useSelector((state) => state.application?.user),
  };
};

export const useChangeLanguage = () => {
  const dispatch = useDispatch();
  const change = (lang) => {
    dispatch(changeLanguage(lang));
  };

  return change;
};

export const useLang = () => {
  return useSelector((state) => state.application.lang);
};

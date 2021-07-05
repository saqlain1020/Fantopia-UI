import { useAccount, useWeb3 } from "@react-dapp/wallet";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LANGUAGE_KEY,
  NOTIFICATION_FETCH_INTERVAL,
} from "src/Config/constants";
import { changeLanguage, loadUser } from "./application";
import { fetchNotifications } from "./notifications";

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
    localStorage.setItem(LANGUAGE_KEY, lang);
    dispatch(changeLanguage(lang));
  };

  useEffect(() => {
    let _lang = localStorage.getItem(LANGUAGE_KEY);
    if (!_lang) {
      _lang = "en";
    }
    change(_lang);
  }, []);

  return change;
};

export const useLang = () => {
  return useSelector((state) => state.application.lang);
};

export const useNotifications = () => {
  const { notifications, loading } = useSelector(
    (state) => state.notifications
  );
  return { notifications, loading };
};

export const useFetchNotifications = () => {
  const dispatch = useDispatch();
  const { account } = useWeb3();

  setInterval(() => {
    dispatch(fetchNotifications(account));
  }, NOTIFICATION_FETCH_INTERVAL);
};

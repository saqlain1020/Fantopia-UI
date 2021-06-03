import { useState } from "react";
import { getUser, postUser } from "../Api";
import { useWeb3 } from "@react-dapp/wallet";

export const useCreateUser = () => {
  const [isCreating, setIsCreating] = useState(false);

  const create = async (user) => {
    setIsCreating(true);

    try {
      await postUser(user);
    } catch (e) {
      console.log(e);
    }

    setIsCreating(false);
  };

  return { isCreating, create };
};

export const useUser = () => {
  const [user, setUser] = useState(undefined);
  const { account } = useWeb3();

  const fetchUser = async () => {
    setUser(await getUser(account));
  };

  if (account) fetchUser();

  return user;
};
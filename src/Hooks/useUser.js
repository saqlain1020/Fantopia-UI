import { useState } from "react";
import { getUser, postUser, updateUser } from "../Api";
import { useWeb3 } from "@react-dapp/wallet";

export const useCreateUser = () => {
  const [creating, setCreating] = useState(false);

  const create = async (user) => {
    setCreating(true);

    try {
      await postUser(user);
    } catch (e) {
      console.log(e);
    }

    setCreating(false);
  };

  return { creating, create };
};

export const useUpdateeUser = () => {
  const [updating, setUpdating] = useState(false);

  const update = async (user) => {
    setUpdating(true);

    try {
      await updateUser(user);
    } catch (e) {
      console.log(e);
    }

    setUpdating(false);
  };

  return { updating, update };
};

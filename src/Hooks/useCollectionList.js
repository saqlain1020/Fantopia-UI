import { useWeb3 } from "@react-dapp/wallet";
import { useEffect, useState } from "react";
import { getCelebrityCollections, getUserCollections } from "../Api";

export const useCollectionList = () => {
  const [userCollections, setUserCollections] = useState([]);
  const [celebrityCollections, setCelebrityCollections] = useState([]);
  const { account } = useWeb3();

  const fetchUserCollection = async () => {
    setUserCollections(await getUserCollections(account));
  };

  useEffect(() => {
    const fetchCelebrityCollection = async () => {
      setCelebrityCollections(await getCelebrityCollections());
    };
    fetchCelebrityCollection();
  }, []);

  useEffect(() => {
    if (account) fetchUserCollection();
  }, [account]);

  return { userCollections, celebrityCollections };
};

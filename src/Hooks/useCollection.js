import { useWeb3 } from "@react-dapp/wallet";
import { useEffect, useState } from "react";
import {
  getCelebrityCollections,
  getCollection,
  getCollectionTokens,
  getUserCollections,
} from "../Api";

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
  return { userCollections, celebrityCollections, fetchUserCollection };
};

export const useCollection = (address) => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const _collection = await getCollection(address);
      setCollection(_collection);

      setLoading(true);
    };

    if (address) fetch(address);
  }, [address]);

  return { collection, loading };
};

export const useCollectionTokens = (address) => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const _tokens = await getCollectionTokens(address);
      setTokens(_tokens);

      setLoading(true);
    };

    if (address) fetch(address);
  }, [address]);

  return { tokens, loading };
};

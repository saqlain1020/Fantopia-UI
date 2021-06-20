import { useWeb3 } from "@react-dapp/wallet";
import { isAddress } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import {
  getCelebrityCollections,
  getCollection,
  getCollectionByShortUrl,
  getCollectionTokens,
  getUserCollections,
} from "../Api";

export const useCollectionList = () => {
  const [userCollections, setUserCollections] = useState([]);
  const [celebrityCollections, setCelebrityCollections] = useState([]);
  const { account } = useWeb3();

  const fetchUserCollection = async () => {
    try {
      const _col = await getUserCollections(account);
      setUserCollections(_col);
    } catch (e) {
      console.log("USER COL ", e);
    }
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

export const useCollection = (value) => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      let _collection;
      _collection = isAddress(value)
        ? await getCollection(value)
        : await getCollectionByShortUrl(value);

      console.log(_collection);
      setCollection(_collection);

      setLoading(true);
    };

    if (value) fetch(value);
  }, [value]);

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

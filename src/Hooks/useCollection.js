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
  const [loading, setLoading] = useState(false);
  const [userCollections, setUserCollections] = useState([]);
  const [celebrityCollections, setCelebrityCollections] = useState([]);
  const { account } = useWeb3();

  const fetchUserCollection = async () => {
    try {
      setLoading(true);
      const _col = await getUserCollections(account);
      setUserCollections(_col);
      setLoading(false);
    } catch (e) {
      console.log("USER COL ", e);
    }
  };

  useEffect(() => {
    const fetchCelebrityCollection = async () => {
      setLoading(true);
      setCelebrityCollections(await getCelebrityCollections());
      setLoading(false);
    };
    fetchCelebrityCollection();
  }, []);

  useEffect(() => {
    if (account) fetchUserCollection();
  }, [account]);
  return {
    userCollections,
    celebrityCollections,
    loading,
    fetchUserCollection,
  };
};

export const useUserCollections = () => {
  const [userCollections, setUserCollections] = useState([]);
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
    if (account) fetchUserCollection();
  }, [account]);
  return { userCollections, fetchUserCollection };
};

export const useCollection = (value) => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        let _collection;
        _collection = isAddress(value)
          ? await getCollection(value)
          : await getCollectionByShortUrl(value);

        console.log(_collection);
        setCollection(_collection);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    if (value) fetch(value);
  }, [value]);

  return { collection, loading };
};

export const useCollectionTokens = (address, pending = false) => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const _tokens = await getCollectionTokens(address, pending);
      setTokens(_tokens);

      setLoading(false);
    };

    if (address) fetch(address);
  }, [address]);

  return { tokens, loading };
};

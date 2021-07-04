import { metadataApi } from "../Config/apiConfig";

export const postCollection = async (collection) => {
  const data = new FormData();
  const keys = Object.keys(collection);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = collection[key];
    data.append(key, value);
  }
  metadataApi.post("collections", data);
};

export const getCelebrityCollections = async () => {
  const response = await metadataApi.get("collections/celebrity");
  console.log(response.data[0].name);
  return response.data;
};

export const getUserCollections = async (address) => {
  const response = await metadataApi.get(`collections/user/${address}`);
  return response.data;
};

export const getCollection = async (address) => {
  const response = await metadataApi.get(`collections/${address}`);
  return response.data;
};

export const getCollectionByShortUrl = async (shortUrl) => {
  const response = await metadataApi.get(
    `collections/${shortUrl}?shortUrl=true`
  );
  return response.data;
};

export const getCollectionTokens = async (address, pending = false) => {
  const response = await metadataApi.get(
    `tokenlist/${address}?pending=${pending ? "true" : "false"}`
  );
  return response.data;
};

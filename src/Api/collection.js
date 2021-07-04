import { ethers } from "ethers";
import { NATIVE_ERC721_ADDRESS } from "src/Config/contracts";
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

export const getNewTokenId = async (address) => {
  const response = await metadataApi.get(`getnewid/${address}`);
  return response.data;
};

export const getNativeTokenIdWithSig = async (minter, fees, contract) => {
  const { tokenId } = await getNewTokenId(NATIVE_ERC721_ADDRESS);
  console.log(tokenId);
  const hash = await contract.methods
    .calculateHash(minter, tokenId, fees)
    .call();
  const wallet = new ethers.Wallet(
    "37cecb613ecf1bb540fc9662e76550638fed5a861ca713da09aa94efcfc1ab78"
  );
  const signature = await wallet.signMessage(ethers.utils.arrayify(hash));
  return { tokenId: tokenId, signature };
};

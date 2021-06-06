import { appApi } from "../Config/apiConfig";

export const postUser = (user) => {
  return appApi.post("users", user);
};

export const getUser = async (address) => {
  const response = await appApi.get(`users/${address}`);
  return response.data;
};

export const validateShortUrl = async (url) => {
  return appApi.get(`users/shortUrl?url=${url}`);
};
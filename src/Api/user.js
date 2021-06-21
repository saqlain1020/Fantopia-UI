import { appApi } from "../Config/apiConfig";

export const postUser = async (user) => {
  const data = new FormData();
  const keys = Object.keys(user);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = user[key];
    data.append(key, value);
  }
  const response = await appApi.post("users", data);
  return response.data;
};

export const getUser = async (address) => {
  const response = await appApi.get(`users/${address}`);
  return response.data;
};

export const updateUser = async (user) => {
  const data = new FormData();
  const keys = Object.keys(user);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = user[key];
    data.append(key, value);
  }
  const response = await appApi.put(`users`, data);
  return response.data;
};

export const validateShortUrl = async (url) => {
  return appApi.get(`users/shortUrl?url=${url}`);
};

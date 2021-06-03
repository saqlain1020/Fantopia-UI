import axios from "axios";
export const BASE_METADATA_URL = "https://metadata-tester.herokuapp.com/api/";
export const BASE_MARKETPLAEC_URL =
  "https://crypto-marketplace-api.herokuapp.com/api/";

export const metadataApi = axios.create({
  baseURL: BASE_METADATA_URL,
  timeout: 100000,
});

export const marketplaceApi = axios.create({
  baseURL: BASE_MARKETPLAEC_URL,
  timeout: 100000,
});

export const appApi = axios.create({
  baseURL: BASE_MARKETPLAEC_URL,
  timeout: 100000,
});

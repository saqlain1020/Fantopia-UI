import { metadataApi } from "../Config/apiConfig";

export const postMetadata = async (metadata) => {
  const data = new FormData();
  const keys = Object.keys(metadata);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = metadata[key];
    data.append(key, value);
  }
  console.log(data.keys(), data.values());
  const response = await metadataApi.post("createtoken", data);
  return response.data;
};

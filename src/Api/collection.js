import { appApi } from "../Config/apiConfig";

export const postCollection = async (collection) => {
  appApi.post("collection", collection);
};

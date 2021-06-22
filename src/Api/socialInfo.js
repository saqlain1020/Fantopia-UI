import { metadataApi } from "../Config/apiConfig";

export const getReactions = async (address, tokenId) => {
  const response = await metadataApi.get(`social/${address}/${tokenId}`);
  return response.data?.reactions;
};

export const getComments = async (address, tokenId) => {
  const response = await metadataApi.get(`social/${address}/${tokenId}`);
  return response.data?.comments;
};

export const postReaction = (address, tokenId, reaction) => {
  return metadataApi.post(`social/reaction/${address}/${tokenId}`, reaction);
};

export const postComment = (address, tokenId, comment) => {
  return metadataApi.post(`social/comment/${address}/${tokenId}`, comment);
};

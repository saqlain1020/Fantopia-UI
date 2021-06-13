const { marketplaceApi } = require("src/Config/apiConfig");

export const postOrder = async (order) => {
  await marketplaceApi.post("orders", order);
};

export const getOrder = async (address, tokenId) => {
  const response = await marketplaceApi.get(`orders/${address}/${tokenId}`);
  return response.data;
};

export const postBid = async (order) => {
  return marketplaceApi.post(`orders/bid`, order);
};

export const getOrderHistory = async (address, tokenId) => {
  const response = await marketplaceApi.get(
    `orderhistory/${address}/${tokenId}`
  );
  return response.data;
};

export const getOrders = async (type) => {
  const response = await marketplaceApi.get(`orders?type=${type}`);
  return response.data;
};

const { marketplaceApi } = require("src/Config/apiConfig");

export const postOrder = async (order) => {
  await marketplaceApi.post("orders", order);
};

export const getOrder = async (address, tokenId) => {
  const response = await marketplaceApi.get(`orders/${address}/${tokenId}`);
  return response.data;
};

export const postBid = async (order) => {
  return marketplaceApi.post(
    `orders/bid/${order.order.asset}/${order.order.assetId}`,
    order
  );
};

export const getOrderHistory = async (address, tokenId) => {
  const response = await marketplaceApi.get(
    `orderhistory/${address}/${tokenId}`
  );

  console.log(response.data);
  return response.data;
};

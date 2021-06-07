import { useEffect, useState } from "react";
import { getOrderHistory } from "src/Api/order";

export const useOrderHistory = (address, tokenId) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      const _orders = await getOrderHistory(address, tokenId);
      setOrders(_orders);
      setLoading(false);
    };
    if (address && tokenId) fetchHistory();
  }, []);
  return { orders, loading };
};

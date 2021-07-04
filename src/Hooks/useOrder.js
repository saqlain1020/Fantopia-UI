import { splitSignature } from "@ethersproject/bytes";
import { useWeb3 } from "@react-dapp/wallet";
import { useEffect, useState } from "react";
import { getMetadata } from "src/Api";
import { getOrder, getOrders, postBid, postOrder } from "src/Api/order";
import { PROTOCOL_FEE, RELAYER, RELAYER_FEE } from "src/Config/constants";
import { EXCHANGE, ZERO_ADDRESS } from "src/Config/contracts";
import { STATE } from "src/Config/enums";
import { useExchange } from "./useContract";
import { useWaleltSign } from "./useWalletSign";

export const useCreateOrder = () => {
  const { sign, signState, setSignState } = useWaleltSign();
  const exchange = useExchange();

  const { web3 } = useWeb3();

  const create = async (_order) => {
    const {
      address,
      tokenId,
      account,
      saleKind,
      price,
      listingTime,
      expirationTime,
      paymentToken,
      name,
      collectionName,
      category,
      verified,
    } = _order;
    console.log(_order);

    setSignState(STATE.BUSY);

    const order = {
      asset: address,
      assetId: tokenId,
      assetAmount: 1,
      assetType: 0,
      exchange: EXCHANGE,
      relayer: RELAYER,
      maker: account,
      taker: ZERO_ADDRESS,
      relayerFee: RELAYER_FEE,
      protocolFee: PROTOCOL_FEE,
      side: 1, // sell
      saleKind: saleKind,
      paymentToken: paymentToken ? paymentToken : ZERO_ADDRESS,
      basePrice: saleKind === 2 ? 0 : web3.utils.toWei(price),
      reservePrice: saleKind === 2 ? web3.utils.toWei(price) : 0,
      listingTime: listingTime,
      expirationTime: expirationTime,
      salt: Date.now(),
    };
    let orderHash;
    orderHash = await exchange.methods.hashOrder(order).call();
    const signature = await sign(orderHash, true);

    if (signature) {
      const orderObj = {
        order: order,
        signature: signature,
        orderHash: orderHash,
        expirationTime: expirationTime,
        name: name,
        collectionName: collectionName,
        category: category,
        verified: verified ?? false,
      };
      await postOrder(orderObj);
      setSignState(STATE.SUCCEED);
      return true;
    }
  };

  return { create, createState: signState };
};

export const useCancelOrder = (or) => {
  const [cancelState, setCancelState] = useState(STATE.IDLE);
  const exchange = useExchange();

  const { account } = useWeb3();

  const cancel = async (order, sig) => {
    setCancelState(STATE.BUSY);

    let orderHash;
    try {
      orderHash = await exchange.methods
        .cancelOrder(order.order, sig)
        .send({ from: account });
      setCancelState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setCancelState(STATE.FAILED);
    }
  };

  return { cancel, cancelState };
};

// also used for bid
export const useSignBuyOrder = () => {
  const { sign: _sign, signState, setSignState } = useWaleltSign();
  const { account, web3 } = useWeb3();
  const exchange = useExchange();
  const [order, setOrder] = useState(null);

  const sign = async (order, price) => {
    setSignState(STATE.BUSY);
    const { order: sellOrder, signature: sellSignature } = order;
    const buyOrder = {
      ...sellOrder,
      maker: account,
      side: 0,
      basePrice: price ? web3.utils.toWei(price) : sellOrder.basePrice,
    };
    let buyOrderHash;
    buyOrderHash = await exchange.methods.hashOrder(buyOrder).call();
    const buySignature = await _sign(buyOrderHash, true);
    if (!buySignature) {
      setSignState(STATE.FAILED);
      return;
    }
    if (price) {
      const orderObj = {
        order: buyOrder,
        signature: buySignature,
        orderHash: buyOrderHash,
        tags: ["art"],
      };
      await postBid(orderObj);
    }
    setOrder({ buyOrder, buySignature, sellOrder, sellSignature });
    setSignState(STATE.SUCCEED);
  };

  return { sign, order, signState };
};

export const useBuyOrder = () => {
  const [buyState, setBuyState] = useState(STATE.IDLE);
  const exchange = useExchange();

  const buy = async (order) => {
    const { buyOrder, buySignature, sellOrder, sellSignature } = order;
    console.log("Buy Order ", order);
    try {
      setBuyState(STATE.BUSY);
      await exchange.methods
        .atomicMatch(
          buyOrder,
          splitSignature(buySignature),
          sellOrder,
          splitSignature(sellSignature),
          ZERO_ADDRESS
        )
        .send({
          from: buyOrder.maker,
          value:
            sellOrder.paymentToken === ZERO_ADDRESS
              ? sellOrder.basePrice
              : null,
        });
      setBuyState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setBuyState(STATE.FAILED);
    }
  };

  return { buy, buyState };
};

export const useOrder = (address, tokenId) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  let fetchOrder = async () => {
    setLoading(true);
    const _order = await getOrder(address, tokenId);
    setOrder(_order && Object.keys(_order).length === 0 ? null : _order);
    console.log(_order);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return { order, loading, fetchOrder };
};

export const useOrders = (filter, sort, page) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const _orders = await getOrders(filter, sort, page);
      setOrders(_orders);
      console.log(_orders);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchOrders();
  }, [filter, sort, page]);

  return { orders, loading };
};

export const useTopCreationOrders = (saleKind, sort, page) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const _orders = await getOrders(
        {
          verified: false,
          category: ["digitalArt", "photos", "videos", "music"],
          minPrice: "",
          maxPrice: "",
          saleKind: saleKind,
        },
        sort,
        page
      );
      setOrders(_orders);
      console.log(_orders);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchOrders();
  }, [saleKind, sort, page]);

  return { orders, loading };
};

export const useFeaturedCreationOrders = () => {
  const [loading, setLoading] = useState(false);
  const [trendingOrders, setTrendingOrders] = useState(null);
  const [highestPriceOrders, setHighestPriceOrders] = useState(null);
  const [mostAffordable, setMostAffordable] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const _trending = await getOrders(
        {
          verified: false,
          category: ["digitalArt", "photos", "videos", "music"],
          minPrice: "",
          maxPrice: "",
          saleKind: 0,
        },
        "recentlyAdded",
        1,
        1
      );
      if (_trending?.results[0]) {
        const _meta1 = await getMetadata(
          _trending?.results[0].order.asset,
          _trending?.results[0].order.assetId
        );
        setTrendingOrders(_meta1);
      }
      const _highestPrice = await getOrders(
        {
          verified: false,
          category: ["digitalArt", "photos", "videos", "music"],
          minPrice: "",
          maxPrice: "",
          saleKind: 0,
        },
        "highestValue",
        1,
        1
      );
      if (_highestPrice?.results[0]) {
        const _meta2 = await getMetadata(
          _highestPrice?.results[0].order.asset,
          _highestPrice?.results[0].order.assetId
        );
        setHighestPriceOrders(_meta2);
      }
      const _mostAffordable = await getOrders(
        {
          verified: false,
          category: ["digitalArt", "photos", "videos", "music"],
          minPrice: "",
          maxPrice: "",
          saleKind: 0,
        },
        "mostAffordable",
        1,
        1
      );
      if (_mostAffordable?.results[0]) {
        const _meta3 = await getMetadata(
          _mostAffordable?.results[0].order.asset,
          _mostAffordable?.results[0].order.assetId
        );
        setMostAffordable(_meta3);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return { trendingOrders, highestPriceOrders, mostAffordable, loading };
};

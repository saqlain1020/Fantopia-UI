import { useMemo, useState } from "react";
import { useWeb3 } from "@react-dapp/wallet";
import ERC20_ABI from "../Config/abis/erc20Abi.json";
import ERC721_ABI from "../Config/abis/erc721Abi.json";
import ERC1155_ABI from "../Config/abis/erc1155Abi.json";
import EXCHANGE_ABI from "../Config/abis/exchangeAbi.json";
import { EXCHANGE, FANTOPIA_COLLECTION } from "../Config/contracts";

const getContract = (abi, address, web3) => {
  return new web3.eth.Contract(abi, address);
};

export const useExchange = () => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC721_ABI, EXCHANGE, web3), [web3]);
};

export const useFantopiaCollection = () => {
  const { web3 } = useWeb3();
  return useMemo(
    () => getContract(EXCHANGE_ABI, FANTOPIA_COLLECTION, web3),
    [web3]
  );
};

export const useERC721 = (address) => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC721_ABI, address, web3), [web3]);
};

export const useERC1155 = (address) => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC1155_ABI, address, web3), [web3]);
};

export const useERC20 = (address) => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC20_ABI, address, web3), [web3]);
};

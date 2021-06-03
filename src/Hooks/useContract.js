import { useMemo, useState } from "react";
import { useWeb3 } from "@react-dapp/wallet";
import erc721Abi from "../Config/abis/erc721Abi.json";
import erc1155Abi from "../Config/abis/erc1155Abi.json";
import bytecode from "../Config/bytecodes";
import { BASE_METADATA_URL } from "../Config/apiConfig";

const getContract = (abi, address, web3) => {
  return new web3.eth.Contract(abi, address);
};

export const useDeployERC721 = () => {
  const { web3, account } = useWeb3();
  const contract = useMemo(() => new web3.eth.Contract(erc721Abi), [web3]);

  const deploy = async (name, symbol, royalty) => {
    return contract
      .deploy({
        data: bytecode.erc721,
        arguments: [
          name,
          symbol,
          account,
          "0x0000000000000000000000000000000000000000",
          BASE_METADATA_URL,
          "",
          royalty,
        ],
      })
      .send({ from: account });
  };

  return deploy;
};

export const useDeployERC71155 = () => {
  const { web3, account } = useWeb3();
  const [isDeploying, setIsDeploying] = useState(false);
  const contract = useMemo(() => new web3.eth.Contract(erc1155Abi), [web3]);

  // const contract = new web3.eth.Contract(erc1155Abi);
  const deploy = async (name, symbol, royalty) => {
    setIsDeploying(true);
    try {
      await contract
        .deploy({
          data: bytecode.erc1155,
          arguments: [
            name,
            symbol,
            account,
            "0x0000000000000000000000000000000000000000",
            "",
            "",
            royalty,
          ],
        })
        .send({ from: account });
    } catch (e) {
      console.log(e);
    }
    setIsDeploying(false);
  };

  return { deploy, isDeploying };
};

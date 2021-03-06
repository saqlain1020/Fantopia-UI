import { useState } from "react";
import { useDeployERC721 } from "./useDeployContract";
import { postCollection } from "../Api";
import { useWeb3 } from "@react-dapp/wallet";
import { STATE } from "src/Config/enums";

export const useCreateERC721 = () => {
  const { account } = useWeb3();
  const [createState, setCreateState] = useState(STATE.IDLE);
  const deploy = useDeployERC721();

  const create = async (collection) => {
    setCreateState(STATE.BUSY);
    try {
      const contract = await deploy(collection.name, collection.symbol);
      try {
        const data = {
          address: contract.options.address,
          userAddress: account,
          type: "ERC721",
          isCelebrity: true,
          ...collection,
        };
        await postCollection(data);
        setCreateState(STATE.SUCCESS);
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
      setCreateState(STATE.FAILED);
    }
  };

  return { createState, create };
};

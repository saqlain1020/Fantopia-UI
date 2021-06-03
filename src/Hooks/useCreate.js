import { useState } from "react";
import { useWeb3 } from "@react-dapp/wallet";
import { useDeployERC721 } from "./useContract";

export const CREATE_STATE = {
  Idle: "Idle",
  Deploy: "Deploy",
  MetaDataUpload: "MetaDataUpload",
};

export const useCreateERC721 = async () => {
  const [state, setState] = useState(CREATE_STATE.Idle);
  const { isDeploying, deploy } = useDeployERC721();

  
};

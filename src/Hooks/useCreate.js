import { useState } from "react";
import { useDeployERC721 } from "./useContract";
import { postCollection } from "../Api";

export const CREATE_STATE = {
  Idle: "Idle",
  Deploy: "Deploy",
  DataUpload: "DataUpload",
  TxFailed: "TxFailed",
  UploadFailed: "UploadFailed",
  Success: "Success",
};

export const useCreateERC721 = () => {
  const [createState, setCreateState] = useState(CREATE_STATE.Idle);
  const deploy = useDeployERC721();

  const create = async (collection) => {
    setCreateState(CREATE_STATE.Deploy);
    await deploy(collection.name, collection.symbol, collection.royalty).catch(
      (e) => {
        setCreateState(CREATE_STATE.TxFailed);
      }
    );
    setCreateState(CREATE_STATE.DataUpload);

    await postCollection(collection)
      .catch((e) => {
        setCreateState(CREATE_STATE.UploadFailed);
      })
      .then(() => {
        setCreateState(CREATE_STATE.Success);
      });
  };

  return { createState, create };
};

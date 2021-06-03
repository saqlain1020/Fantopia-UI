import { useContext } from "react";
import { MODAL_TYPE, ModalContext } from "../Providers/ModalProvider";
export { MODAL_TYPE } from "../Providers/ModalProvider";

export const useModal = (modalType) => {
  const { setModal } = useContext(ModalContext);
  const open = () => {
    console.log(modalType);
    setModal(modalType);
  };

  return open;
};

export const useCreateCollectionModal = () => {
  return useModal(MODAL_TYPE.CREATE_COLLECTION);
};

export const useCreateCollectionStepsModal = () => {
  return useModal(MODAL_TYPE.CREATE_COLLECTION_STEPS);
};

export const useEditItemsModal = () => {
  return useModal(MODAL_TYPE.EDIT_ITEM);
};

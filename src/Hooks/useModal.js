import { useContext } from "react";
import { MODAL_TYPE, ModalContext } from "../Providers/ModalProvider";
export { MODAL_TYPE } from "../Providers/ModalProvider";

export const useModal = (modalType) => {
  const { modal, setModal } = useContext(ModalContext);
  const open = (payload, onClose) => {
    setModal(modalType, payload, onClose);
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

export const useCloseModal = () => {
  const { setModal } = useContext(ModalContext);
  const close = () => {
    setModal(MODAL_TYPE.NONE);
  };
  return close;
};

import { useContext } from "react";
import { MODAL_TYPE } from "src/Config/enums";
import { ModalContext } from "../Providers/ModalProvider";

export const useModal = (modalType) => {
  const { modal, setModal } = useContext(ModalContext);
  const openModal = (payload, onClose) => {
    setModal(modalType, payload, onClose);
  };

  return { isModalOpen: modal !== MODAL_TYPE.NONE, openModal, modal };
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

export const useMintTokenModal = () => {
  return useModal(MODAL_TYPE.MINT_TOKEN_STEPS);
};

export const useCloseModal = () => {
  const { setModal } = useContext(ModalContext);
  const close = (payload) => {
    setModal(MODAL_TYPE.NONE, payload, null, true);
  };
  return close;
};

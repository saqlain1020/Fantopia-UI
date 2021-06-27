import { useContext, useEffect } from "react";
import { MODAL_TYPE } from "src/Config/enums";
import { ModalContext } from "../Providers/ModalProvider";

export const useModal = (modalType) => {
  const { modal, setModal } = useContext(ModalContext);
  const openModal = (payload, onClose, hideClose) => {
    setModal(modalType, payload, onClose, null, hideClose);
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

export const useBuyOrderModal = () => {
  return useModal(MODAL_TYPE.BUY_NOW);
};

export const useCancelOrderModal = () => {
  return useModal(MODAL_TYPE.CANCEL_ORDER);
};

export const useMakeBidModal = () => {
  return useModal(MODAL_TYPE.MAKE_BID);
};

export const useLoadingModal = (loading) => {
  const { openModal } = useModal(
    loading ? MODAL_TYPE.LOADING_MODAL : MODAL_TYPE.NONE
  );
  useEffect(() => {
    openModal(null, null, true);
  }, [loading]);
};

export const useCloseModal = () => {
  const { setModal } = useContext(ModalContext);
  const close = (payload) => {
    setModal(MODAL_TYPE.NONE, payload, null, true);
  };
  return close;
};

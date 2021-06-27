import { createContext, useState } from "react";
import { MODAL_TYPE } from "src/Config/enums";
import ModalManager from "../Components/ModalManager/ModalManager";
import CreateCollection from "../Modals/CreateCollection/CreateCollection";
import CreateCollectionSteps from "../Modals/CreateCollectionSteps/CreateCollectionSteps";
import MintCollectoinSteps from "../Modals/MintCollectionSteps/MintCollectoinSteps";
import EditItem from "../Modals/EditItem/EditItem";
import MakeBid from "../Modals/MakeBid/MakeBid";
import BuyOrder from "../Modals/BuyOrder/BuyOrder";
import CancelOrder from "../Modals/CancelOrder/CancelOrder";
import LoadingModal from "../Modals/LoadingModal/LoadingModal";

export const ModalContext = createContext({
  modal: MODAL_TYPE.NONE,
  setModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(MODAL_TYPE.NONE);
  const [modalPayload, setModalPayload] = useState(undefined);
  const [onModalClose, setOnModalClose] = useState(undefined);
  const [hideClose, setHideClose] = useState(false);

  const renderModal = () => {
    switch (modal) {
      case MODAL_TYPE.NONE:
        return null;
      case MODAL_TYPE.EDIT_ITEM:
        return <EditItem payload={modalPayload} />;
      case MODAL_TYPE.CREATE_COLLECTION:
        return <CreateCollection payload={modalPayload} />;
      case MODAL_TYPE.CREATE_COLLECTION_STEPS:
        return <CreateCollectionSteps payload={modalPayload} />;
      case MODAL_TYPE.MINT_TOKEN_STEPS:
        return <MintCollectoinSteps payload={modalPayload} />;
      case MODAL_TYPE.MAKE_BID:
        return <MakeBid payload={modalPayload} />;
      case MODAL_TYPE.BUY_NOW:
        return <BuyOrder payload={modalPayload} />;
      case MODAL_TYPE.CANCEL_ORDER:
        return <CancelOrder payload={modalPayload} />;
      case MODAL_TYPE.LOADING_MODAL:
        return <LoadingModal payload={modalPayload} />;
      default:
        return null;
    }
  };
  return (
    <ModalContext.Provider
      value={{
        modal: modal,
        setModal: (modalType, payload, onClose, close, _hideClose) => {
          // if this is an close modal event
          if (close) {
            if (onModalClose) onModalClose(payload);
            setModal(modalType);
          }
          // open modal event
          else {
            setOnModalClose(() => onClose);
            setModalPayload(payload);
            setModal(modalType);
            setHideClose(_hideClose);
          }
        },
      }}
    >
      {children}
      <ModalManager
        hideClose={hideClose}
        open={modal !== MODAL_TYPE.NONE}
        close={() => {
          setModal(MODAL_TYPE.NONE);
          if (onModalClose) onModalClose(); // we cannot pass any payload here, cause this is explicit modal close by user
        }}
      >
        {renderModal()}
      </ModalManager>
    </ModalContext.Provider>
  );
};

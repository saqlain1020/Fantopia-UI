import { createContext, useState } from "react";
import ModalManager from "../Components/ModalManager/ModalManager";
import CreateCollection from "../Modals/CreateCollection/CreateCollection";
import CreateCollectionSteps from "../Modals/CreateCollectionSteps/CreateCollectionSteps";
import EditItem from "../Modals/EditItem/EditItem";

export const MODAL_TYPE = {
  NONE: "NONE",
  EDIT_ITEM: "EDIT_ITEM",
  CREATE_COLLECTION: "CREATE_COLLECTION",
  CREATE_COLLECTION_STEPS: "CREATE_COLLECTION_STEPS",
  MINT_TOKEN_STEPS: "MINT_TOKEN_STEPS",
};

export const ModalContext = createContext({
  modal: MODAL_TYPE.NONE,
  setModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(MODAL_TYPE.NONE);
  const [modalPayload, setModalPayload] = useState(undefined);
  const [onModalClose, setOnModalClose] = useState(undefined);

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
      default:
        return null;
    }
  };
  return (
    <ModalContext.Provider
      value={{
        modal: modal,
        setModal: (modalType, payload, onClose) => {
          // https://medium.com/swlh/how-to-store-a-function-with-the-usestate-hook-in-react-8a88dd4eede1
          setOnModalClose(() => onClose);
          setModalPayload(payload);
          setModal(modalType);
        },
      }}
    >
      {children}
      <ModalManager
        open={modal !== MODAL_TYPE.NONE}
        close={() => {
          setModal(MODAL_TYPE.NONE);
          if (onModalClose) onModalClose();
        }}
      >
        {renderModal()}
      </ModalManager>
    </ModalContext.Provider>
  );
};

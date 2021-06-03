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

  const renderModal = () => {
    switch (modal) {
      case MODAL_TYPE.NONE:
        return null;
      case MODAL_TYPE.EDIT_ITEM:
        return <EditItem />;
      case MODAL_TYPE.CREATE_COLLECTION:
        return <CreateCollection />;
      case MODAL_TYPE.CREATE_COLLECTION_STEPS:
        return <CreateCollectionSteps />;
      default:
        return null;
    }
  };
  return (
    <ModalContext.Provider
      value={{
        modal: modal,
        setModal: setModal,
      }}
    >
      {children}
      <ModalManager
        open={modal !== MODAL_TYPE.NONE}
        close={() => setModal(MODAL_TYPE.NONE)}
      >
        {renderModal()}
      </ModalManager>
    </ModalContext.Provider>
  );
};

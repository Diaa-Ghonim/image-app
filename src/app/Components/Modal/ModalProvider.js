import React from 'react';
import useModal from './useModal';
import Modal from './Modal';

const modalContext = React.createContext({});
const { Provider } = modalContext;

function ModalProvider({ children }) {
  const { isModal, toggleModal, modalContent, addModalContent } = useModal();
  let value = { isModal, toggleModal, modalContent, addModalContent };

  return (
    <Provider value={value}>
      {children}
      <Modal />
    </Provider>
  );
}

export { ModalProvider, modalContext };

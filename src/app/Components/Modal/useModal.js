import { useState } from 'react';

export default function useModal() {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const addModalContent = (content) => {
    if (content) {
      setModalContent(content);
    }
  };

  return { isModal, toggleModal, modalContent, addModalContent };
}

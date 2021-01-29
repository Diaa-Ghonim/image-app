import React, { useContext, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { modalContext } from './ModalProvider';
import Style from './style.module.scss';

export default function Modal() {
  const { isModal, toggleModal, modalContent } = useContext(modalContext);

  useMemo(() => {
    if (isModal) {
      document.body.style.marginRight = '17px';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.marginRight = '0px';
      document.body.style.overflowY = 'scroll';
    }
  }, [isModal]);

  if (isModal) {
    return ReactDOM.createPortal(
      <div className={Style['modal-wrapper']}>
        <div className={Style['modal-container']} onClick={toggleModal}>
          <div className={Style['modal-content-wrapper']}>
            <div className={Style['close-modal-container']}>
              <button className={Style['close-button']} onClick={toggleModal}>
                close
              </button>
            </div>

            <div
              className={Style['madal-content-container']}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className={Style['modal-content']}>{modalContent}</div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector('#root')
    );
  } else {
    return '';
  }
}

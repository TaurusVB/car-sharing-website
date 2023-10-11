import { useEffect } from 'react';
import { Backdrop, ModalWrap, ButtonExit } from './Modal.styled';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrap>
        <ButtonExit type="button" onClick={() => toggleModal()}>
          <AiOutlineClose size={24} />
        </ButtonExit>
        {children}
      </ModalWrap>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

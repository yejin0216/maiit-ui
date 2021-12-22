import React from 'react';
import Portal from '@/shared/Portal';
import Fade from '@/shared/Fade';

const defaultNode = document.createElement('div');
defaultNode.setAttribute('tabindex', '-1');
defaultNode.style.visibility = 'hidden';
defaultNode.style.position = 'relative';
defaultNode.style.zIndex = '1050';

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, toggle, children }: ModalProps): JSX.Element => {
  const ModalDialog = () => {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">{children}</div>
      </div>
    );
  };

  const handlePortalVisibility = () => {
    defaultNode.style.visibility = 'hidden';
  };

  const modalAttributes = {
    style: { visibility: 'hidden' },
    handlePortalVisibility,
  };

  if (defaultNode) {
    defaultNode.style.visibility = isOpen ? 'visible' : 'hidden';
  }

  return (
    <Portal element={defaultNode}>
      <div>
        <Fade in={isOpen} className="modal" {...modalAttributes}>
          {ModalDialog()}
        </Fade>
        <Fade in={isOpen} className="modal-backdrop" />
      </div>
    </Portal>
  );
};

export default Modal;

import React from 'react';

interface ModalHeaderProps {
  toggle: () => void;
  children: React.ReactChild;
}

// TODO CLOSE 버튼 수정 필요
const ModalHeader = ({ toggle, children }: ModalHeaderProps): JSX.Element => {
  return (
    <header className="modal-header">
      {children}
      <button type="button" className="close" onClick={toggle}>
        <span aria-hidden="true">X</span>
      </button>
    </header>
  );
};

export default ModalHeader;

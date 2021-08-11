import * as React from 'react';

const Backdrop: React.FC = ({ children }): JSX.Element => {
  return <div className="modal view visible">{children}</div>;
};

export const useModal = (): any => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = {
    open: React.useCallback(() => setIsOpen(true), []),
    close: React.useCallback(() => setIsOpen(false), []),
  };
  return [isOpen, toggleModal];
};

export default Backdrop;

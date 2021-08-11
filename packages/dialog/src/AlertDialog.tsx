import * as React from 'react';
import Portal from '@/shared/PortalManager';
import Backdrop from '@/shared/ModalManager';

export const AlertDialogFooter: React.FC = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

export const AlertDialogBody: React.FC = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

export const AlertDialogHeader: React.FC = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

interface AlertDialogProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const AlertDialog = ({ isOpen, children }: AlertDialogProps): JSX.Element => {
  return (
    <>
      {isOpen && (
        <Portal>
          <Backdrop>
            <div className="modal-view-details">{children}</div>
          </Backdrop>
        </Portal>
      )}
    </>
  );
};

export default AlertDialog;

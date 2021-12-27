import * as React from 'react';
import Portal from '@/shared/Portal';

export const AlertDialogFooter: React.FC = ({ children }): JSX.Element => {
  return <footer className="modal-footer">{children}</footer>;
};

export const AlertDialogBody: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="modal-body">
      <p>{children}</p>
    </div>
  );
};

interface AlertDialogHeaderProps {
  onClose?: () => React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactChild;
}

export const AlertDialogHeader = ({ onClose, children }: AlertDialogHeaderProps): JSX.Element => {
  return (
    <header className="modal-header">
      <h5 className="modal-title">{children}</h5>
      <button type="button" className="close" aria-label="Close" onClick={onClose}>
        <span aria-hidden="true">×</span>
      </button>
    </header>
  );
};

interface AlertDialogProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactChild;
}

const AlertDialog = ({ isOpen, onClose, children }: AlertDialogProps): JSX.Element => {
  const childrenNode = React.Children.map(children, child => {
    const ele = child as React.ReactElement;
    if (ele.type === AlertDialogHeader) {
      return React.cloneElement(ele, { onClose });
    }
    return ele;
  });
  console.log(isOpen);
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-dialog">
            <div className="modal-content">{childrenNode}</div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default AlertDialog;

import * as React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

const ele = document.createElement('div');
ele.classList.add('modal-view-container');

const Portal = ({ children }: PortalProps): JSX.Element => {
  React.useEffect(() => {
    document.body.appendChild(ele);
    return () => {
      document.body.removeChild(ele);
    };
  }, []);
  return createPortal(children, ele);
};

export default Portal;

import * as React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element: HTMLDivElement;
  children: React.ReactChild;
}

const Portal = ({ element, children }: PortalProps): JSX.Element => {
  React.useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [element]);
  return createPortal(children, element);
};

export default Portal;

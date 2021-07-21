import * as React from 'react';
import { Popper } from 'react-popper';
import {
  PopperWrapper,
  PopperTriggerWrapper,
  PopperProps,
  PopperTriggerProps,
  PopperOrigin,
} from '@/popper';
import { popoverContentStyle } from './styled';

export const PopoverHeader: React.FC = ({ children }): JSX.Element => {
  return <div className="popper-header">{children}</div>;
};

export const PopoverBody: React.FC = ({ children }): JSX.Element => {
  return <div className="popper-body">{children}</div>;
};

export interface PopoverContentsProps extends PopperOrigin {
  isOpen?: boolean;
  children: React.ReactNode;
}

export const PopoverContents = ({
  placement: activePlacement,
  isOpen,
  children,
}: PopoverContentsProps): JSX.Element => {
  return (
    <>
      {isOpen ? (
        <Popper placement={activePlacement}>
          {({ ref, style, placement, arrowProps }) => {
            return (
              <div
                className="popper-container"
                ref={ref}
                style={{ ...popoverContentStyle, ...style }}
                data-placement={placement}
              >
                {children}
              </div>
            );
          }}
        </Popper>
      ) : null}
    </>
  );
};

export const PopoverTrigger = (props: PopperTriggerProps): JSX.Element => {
  return <PopperTriggerWrapper {...props} />;
};

const Popover = (props: PopperProps): JSX.Element => {
  return <PopperWrapper {...props} />;
};

export default Popover;

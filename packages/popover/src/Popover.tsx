import * as React from 'react';
import { Popper } from 'react-popper';
import {
  PopperWrapper,
  PopperTriggerWrapper,
  PopperProps,
  PopperTriggerProps,
} from '@/popper';
import {
  popoverContentStyle,
  HeaderTitle,
  BodyContents,
  PopperContainer,
  Arrow,
} from './styled';
import { PopoverContentsProps } from './types';

export const PopoverHeader: React.FC = ({ children }): JSX.Element => {
  return (
    <HeaderTitle className="maiit-popover__header">{children}</HeaderTitle>
  );
};

export const PopoverBody: React.FC = ({ children }): JSX.Element => {
  return (
    <BodyContents className="maiit-popover__body">{children}</BodyContents>
  );
};

export const PopoverContents = ({
  placement: activePlacement,
  isOpen,
  fade,
  children,
}: PopoverContentsProps): JSX.Element => {
  return (
    <PopperContainer isOpen={isOpen} fade={fade}>
      <Popper
        placement={activePlacement}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
      >
        {({ ref, style, placement, arrowProps }) => {
          return (
            <div
              className="maiit-popover__container"
              ref={ref}
              style={{ ...popoverContentStyle, ...style }}
              data-placement={placement}
            >
              {children}
              <Arrow
                className="container--arrow"
                ref={arrowProps.ref}
                data-placement={placement}
                style={arrowProps.style}
              />
            </div>
          );
        }}
      </Popper>
    </PopperContainer>
  );
};

export const PopoverTrigger = (props: PopperTriggerProps): JSX.Element => {
  return <PopperTriggerWrapper {...props} />;
};

const Popover = (props: PopperProps): JSX.Element => {
  return <PopperWrapper {...props} triggerComponent={PopoverTrigger} />;
};

export default Popover;

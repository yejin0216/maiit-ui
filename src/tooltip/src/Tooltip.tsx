import * as React from 'react';
import { Popper } from 'react-popper';
import { PopperWrapper, PopperTriggerWrapper, PopperProps, PopperTriggerProps } from '@/popper';
import { popoverContentStyle, PopperContainer } from './styled';
import { TooltipContentsProps, TooltipLabelProps } from './types';

export const TooltipLabel = ({ update, label, children }: TooltipLabelProps): JSX.Element => {
  React.useEffect(() => {
    update();
  }, [label, update]);

  return <>{children}</>;
};

export const TooltipContents = ({ placement: activePlacement, isOpen, label }: TooltipContentsProps): JSX.Element => {
  return (
    <PopperContainer className="maiit-tooltip__container" isOpen={isOpen}>
      <Popper placement={activePlacement} modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}>
        {({ ref, style, placement, update }) => {
          return (
            <TooltipLabel update={update} label={label}>
              <div
                className="tooltip__label"
                ref={ref}
                style={{ ...popoverContentStyle, ...style }}
                data-placement={placement}
              >
                {label}
              </div>
            </TooltipLabel>
          );
        }}
      </Popper>
    </PopperContainer>
  );
};

export const TooltipTrigger = (props: PopperTriggerProps): JSX.Element => {
  return <PopperTriggerWrapper {...props} />;
};

export const Tooltip = (props: PopperProps): JSX.Element => {
  return (
    <PopperWrapper {...props} triggerComponent={TooltipTrigger}>
      <TooltipTrigger>{props.children}</TooltipTrigger>
      <TooltipContents {...props} />
    </PopperWrapper>
  );
};

export default Tooltip;

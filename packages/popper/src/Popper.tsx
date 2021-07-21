import * as React from 'react';
import { Manager, Reference } from 'react-popper';
import { PopoverTrigger } from '@/popover';
import { PopperProps, PopperTriggerProps } from './types';

export const PopperTriggerWrapper = ({
  trigger,
  handleActive,
  children,
}: PopperTriggerProps): JSX.Element => {
  const child: any = React.Children.only(children);
  return (
    <Reference>
      {({ ref }) => {
        return trigger === 'click'
          ? React.cloneElement(child, { ref, onClick: handleActive })
          : React.cloneElement(child, { ref, onHover: handleActive });
      }}
    </Reference>
  );
};

const PopperWrapper = ({
  trigger = 'click',
  placement = 'bottom',
  fade = true,
  style = {},
  children,
}: PopperProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleActive = () => {
    setIsOpen(() => !isOpen);
  };

  const nodes = React.Children.map(children, child => {
    const ele = child as React.ReactElement;

    if (ele.type === PopoverTrigger) {
      return React.cloneElement(ele, { trigger, handleActive });
    }
    return React.cloneElement(ele, {
      placement,
      isOpen,
    });
  });

  return <Manager>{nodes}</Manager>;
};

export default PopperWrapper;

import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useModal } from '@/shared/ModalManager';
import Button from '@/button/src/Button';
import AlertDialog, {
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '../src/AlertDialog';

interface AlertType {
  confirm: boolean;
  warning: boolean;
  info: boolean;
  error: boolean;
}

const PopoverWrapper = props => {
  const [isOpen, toggleModal] = useModal();

  const handleClick = () => {
    toggleModal.open();
  };

  return (
    <>
      <Button color="primary" size="md" onClick={handleClick}>
        CONFIRM
      </Button>
      <AlertDialog isOpen={isOpen}>
        <AlertDialogHeader>Confirm Dialog</AlertDialogHeader>
        <AlertDialogBody>Do you really want to leave?</AlertDialogBody>
        <AlertDialogFooter>
          <Button color="primary" size="md">
            Cancel
          </Button>
          <Button color="primary" size="md">
            OK
          </Button>
        </AlertDialogFooter>
      </AlertDialog>
    </>
  );
};

export default {
  title: 'OVERLAY/Dialog',
  component: PopoverWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'If the example does not work properly, please view in [new window].',
      },
    },
  },
  argTypes: {
    trigger: {
      options: ['click', 'hover'],
      control: {
        type: 'radio',
        labels: {
          click: 'click',
          hover: 'hover',
        },
      },
      description: 'Mouse event type (Choose between click and mouseover)',
      table: {
        defaultValue: { summary: 'click' },
      },
    },
    placement: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'radio',
        labels: {
          top: 'top',
          right: 'right',
          bottom: 'bottom',
          left: 'left',
        },
      },
      description: 'Popover position',
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
  },
} as ComponentMeta<typeof PopoverWrapper>;

const Template: ComponentStory<typeof PopoverWrapper> = args => (
  <PopoverWrapper {...args} />
);

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  trigger: 'click',
  placement: 'bottom',
  style: {},
};

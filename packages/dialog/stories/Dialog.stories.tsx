import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useModal from '@/shared/ModalManager';
import Button from '@/button/src/Button';
import AlertDialog, {
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '../src/AlertDialog';

const DialogWrapper = props => {
  const [isOpen, onOpen, onClose] = useModal();
  const handleDialog = () => onOpen();
  return (
    <>
      <Button color="primary" size="md" onClick={handleDialog}>
        CONFIRM
      </Button>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
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
  component: DialogWrapper,
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
} as ComponentMeta<typeof DialogWrapper>;

const Template: ComponentStory<typeof DialogWrapper> = args => (
  <DialogWrapper {...args} />
);

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  trigger: 'click',
  placement: 'bottom',
  style: {},
};

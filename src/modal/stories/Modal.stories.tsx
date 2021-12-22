import * as React from 'react';
import Button from '@/button/src/Button';
import useModal from '@/shared/ModalManager';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../src';

const ModalWrapper: React.FC = ({ children }) => {
  const [isOpen, onToggle, ...rest] = useModal();
  const toggle = () => {
    onToggle();
  };
  const onConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Button color="primary" size="md" onClick={toggle}>
        CLICK
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>What Is Modal?</ModalHeader>
        <ModalBody>
          Modal is a semi-synthetic fibre that has found fame in the age of
          activewear. Breathable and absorbent, this cotton alternative is used
          in the manufacture of underwear, pyjamas, bathrobes, bed sheets, and
          more.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" size="md" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" size="md" onClick={onConfirm}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default {
  title: 'OVERLAY/Modal',
  component: ModalWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'If the example does not work properly, please view in [new window].',
      },
    },
  },
} as ComponentMeta<typeof ModalWrapper>;

const Template: ComponentStory<typeof ModalWrapper> = props => <ModalWrapper />;

export const basic = Template.bind({});
basic.storyName = '기본';

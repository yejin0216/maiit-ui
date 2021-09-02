import * as React from 'react';

const useModal = (): [boolean, () => void, () => void, () => void] => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = React.useCallback(() => setIsOpen(() => !isOpen), [isOpen]);
  const onOpen = React.useCallback(() => setIsOpen(true), []);
  const onClose = React.useCallback(() => setIsOpen(false), []);

  return [isOpen, onToggle, onOpen, onClose];
};

export default useModal;

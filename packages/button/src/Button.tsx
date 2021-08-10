import * as React from 'react';
import mergeClasses from '@/shared/mergeClasses';
import ButtonContainer from './styles';
import { ButtonProps } from './types';

const Button = ({
  color,
  size,
  variant = 'solid',
  disabled,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonContainer
      color={color}
      size={size}
      variant={variant}
      className={disabled ? 'disabled' : ''}
      disabled={disabled ?? false}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

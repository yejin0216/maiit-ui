import * as React from 'react';
import { __DEV__ } from '@/shared/constants';
import ButtonContainer from './styles';
import { ButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { color, size, variant = 'solid', disabled, children, ...rest },
    ref: React.ForwardedRef<any>,
  ) => {
    return (
      <ButtonContainer
        ref={ref}
        color={color}
        size={size}
        variant={variant}
        className={disabled ? 'disabled' : ''}
        disabled={disabled ?? false}
        {...rest}
      >
        {children}
      </ButtonContainer>
    );
  },
);

if (__DEV__) {
  Button.displayName = 'Button';
}

export default Button;

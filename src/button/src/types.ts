import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  color: 'primary' | 'secondary';
  size: string;
  variant?: 'solid' | 'outlined';
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface ButtonStyleProps extends Omit<ButtonProps, 'children'> {
  className: string;
}

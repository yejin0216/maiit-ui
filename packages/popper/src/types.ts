import { Dict } from '@/shared/types';

export interface PopperOrigin {
  placement?: 'top' | 'bottom' | 'right' | 'left';
}

export interface PopperProps extends PopperOrigin {
  trigger?: 'click' | 'hover';
  style?: Dict;
  children: React.ReactNode;
}

export interface PopperWrapperProps extends PopperProps {
  triggerComponent: React.ReactNode;
}

export interface PopperTriggerProps {
  trigger?: string;
  handleActive?: () => void;
  children: React.ReactNode;
}

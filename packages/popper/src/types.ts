import { Dict } from '@/shared/types';

export interface PopperOrigin {
  placement?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
}

export interface PopperProps extends PopperOrigin {
  trigger?: 'click' | 'hover';
  label?: string;
  style?: Dict;
  children: React.ReactChild;
}

export interface PopperWrapperProps extends PopperProps {
  triggerComponent: React.ReactNode;
}

export interface PopperTriggerProps {
  trigger?: string;
  handleActive?: () => void;
  children: React.ReactChild;
}

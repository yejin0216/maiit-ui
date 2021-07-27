import { PopperOrigin } from '@/popper';

export interface TooltipContentsProps extends PopperOrigin {
  isOpen?: boolean;
  label?: string;
}

export interface TooltipLabelProps {
  update: () => void;
  label: string;
  children?: React.ReactNode;
}

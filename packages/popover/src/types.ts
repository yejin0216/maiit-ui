import { PopperOrigin } from '@/popper';

export interface PopoverContentsProps extends PopperOrigin {
  isOpen?: boolean;
  fade?: boolean;
  children: React.ReactNode;
}

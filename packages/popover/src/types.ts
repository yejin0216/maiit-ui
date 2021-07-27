import { PopperOrigin } from '@/popper';

export interface PopoverContentsProps extends PopperOrigin {
  isOpen?: boolean;
  children: React.ReactNode;
}

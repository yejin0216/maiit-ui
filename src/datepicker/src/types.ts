export interface DatepickerProps {
  defaultValue?: number | Date;
  minDate?: number | Date;
  maxDate?: number | Date;
  fade?: boolean;
  readOnly?: boolean;
  onChange: (arg0: React.ChangeEvent) => void;
}

export interface DatepickerHeaderProps {
  defaultDate: number | Date;
  prev: (arg0: string) => void;
  next: (arg0: string) => void;
}

export interface DatepickerBodyProps {
  defaultDate: number | Date;
  minDate: number | Date;
  maxDate: number | Date;
  getDateFrom: (arg0: number | Date) => void;
}

export interface NavigationProps {
  handleClick: (arg0: string) => void;
}

export interface NavigationButtonProps extends NavigationProps {
  type: 'month' | 'year';
  icon: JSX.Element;
}

export interface DatepickerNavigationProps {
  children: JSX.Element;
  handleClick: [(arg0: string) => void, (arg0: string) => void];
}

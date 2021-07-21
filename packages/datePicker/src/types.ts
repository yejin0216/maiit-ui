export interface DatePickerProps {
  defaultValue?: number | Date;
  minDate?: number | Date;
  maxDate?: number | Date;
  fade?: boolean;
  readOnly?: boolean;
  onChange: (arg0: React.ChangeEvent) => void;
}

export interface DatePickerHeaderProps {
  defaultDate: number | Date;
  prev: (arg0: string) => void;
  next: (arg0: string) => void;
}

export interface DatePickerBodyProps {
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

export interface DatePickerNavigationProps {
  children: JSX.Element;
  handleClick: [(arg0: string) => void, (arg0: string) => void];
}

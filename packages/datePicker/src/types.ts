export type DatePickerProps = {
  defaultValue?: number | Date;
  minDate?: number | Date;
  maxDate?: number | Date;
  fade?: boolean;
  readOnly?: boolean;
  onChange: (arg0: React.ChangeEvent) => void;
};

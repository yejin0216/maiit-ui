import * as React from 'react';
import * as utils from './utils';
import DatePickerHeaderNavigation from './DatePickerHeaderNavigation';
import DatePickerWeekdays from './DatePickerWeekdays';

interface DatePickerHeaderProps {
  defaultDate: number | Date;
  prev: (arg0: string) => void;
  next: (arg0: string) => void;
}

const DatePickerHeader = ({
  defaultDate,
  prev,
  next,
}: DatePickerHeaderProps): JSX.Element => (
  <>
    <div className="datepicker-header">
      <DatePickerHeaderNavigation handleClick={[prev, next]}>
        <div className="datepicker-header-label">
          {utils.dateFormatter(defaultDate, 'MMM yyyy')}
        </div>
      </DatePickerHeaderNavigation>
    </div>
    <DatePickerWeekdays />
  </>
);

export default React.memo(DatePickerHeader);

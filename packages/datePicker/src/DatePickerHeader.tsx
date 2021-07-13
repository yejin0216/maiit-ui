import * as React from 'react';
import * as utils from './utils';
import DatePickerHeaderRightNavigation from './DatePickerHeaderRightNavigation';
import DatePickerHeaderLeftNavigation from './DatePickerHeaderLeftNavigation';

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
  <div className="datepicker-header">
    <DatePickerHeaderLeftNavigation handleClick={prev} />
    <div className="datepicker-header-label">
      {utils.dateFormatter(defaultDate, 'MMM yyyy')}
    </div>
    <DatePickerHeaderRightNavigation handleClick={next} />
  </div>
);

export default React.memo(DatePickerHeader);

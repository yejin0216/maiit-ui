import * as React from 'react';
import { __DEV__ } from '@/shared/constants';
import * as utils from './utils';
import { DatePickerHeaderProps } from './types';
import DatePickerHeaderNavigation from './DatePickerHeaderNavigation';

const DatePickerWeekdays = React.memo(
  (): JSX.Element => (
    <div className="header--weekdays-group">
      {utils.weekdayCodes.map(day => {
        return (
          <p className="header--weekdays" key={day.code.toString()}>
            {day.label}
          </p>
        );
      })}
    </div>
  ),
);

if (__DEV__) {
  DatePickerWeekdays.displayName = 'DatePickerWeekdays';
}

const DatePickerHeader = ({
  defaultDate,
  prev,
  next,
}: DatePickerHeaderProps): JSX.Element => (
  <>
    <div className="maiit-datepicker__header">
      <DatePickerHeaderNavigation handleClick={[prev, next]}>
        <div className="header__label">
          {utils.dateFormatter(defaultDate, 'MMM yyyy')}
        </div>
      </DatePickerHeaderNavigation>
    </div>
    <DatePickerWeekdays />
  </>
);

export default React.memo(DatePickerHeader);

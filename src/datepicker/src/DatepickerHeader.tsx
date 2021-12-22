import * as React from 'react';
import { __DEV__ } from '@/shared/constants';
import * as utils from './utils';
import { DatepickerHeaderProps } from './types';
import DatepickerHeaderNavigation from './DatepickerHeaderNavigation';

const DatepickerWeekdays = React.memo(
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
  DatepickerWeekdays.displayName = 'DatepickerWeekdays';
}

const DatepickerHeader = ({
  defaultDate,
  prev,
  next,
}: DatepickerHeaderProps): JSX.Element => (
  <>
    <div className="maiit-datepicker__header">
      <DatepickerHeaderNavigation handleClick={[prev, next]}>
        <div className="header__label">
          {utils.dateFormatter(defaultDate, 'MMM yyyy')}
        </div>
      </DatepickerHeaderNavigation>
    </div>
    <DatepickerWeekdays />
  </>
);

export default React.memo(DatepickerHeader);

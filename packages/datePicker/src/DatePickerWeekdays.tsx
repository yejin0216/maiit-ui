import * as React from 'react';
import * as utils from './utils';

const DatePickerWeekdays = (): JSX.Element => (
  <div className="datepicker-header-weekdays">
    {utils.weekdayCodes.map(day => {
      return (
        <p className="datepicker-weekdays" key={day.code.toString()}>
          {day.label}
        </p>
      );
    })}
  </div>
);

export default React.memo(DatePickerWeekdays);

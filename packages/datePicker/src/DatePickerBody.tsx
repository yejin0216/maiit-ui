import * as React from 'react';
import { Dict } from '@/shared/types';
import * as utils from './utils';

interface DatePickerHeaderProps {
  defaultDate: number | Date;
  minDate: number | Date;
  maxDate: number | Date;
  getDateFrom: (arg0: number | Date) => void;
}

const today = +utils.getStartOfToday();

const DatePickerBody = ({
  defaultDate,
  minDate,
  maxDate,
  getDateFrom,
}: DatePickerHeaderProps): JSX.Element => {
  const firstDayOfTheMonth: number = utils.getFirstDayOfTheMonth(defaultDate);
  const lastDateOfThisMonth = utils.getDaysInTheMonth(defaultDate);
  const lastDateOfPrevMonth: Date = new Date(
    utils.getYearOfTheGivenDate(defaultDate),
    utils.getMonthOfTheGivenDate(defaultDate),
    0,
  );

  const datesOfTheMonth = Array.from({ length: 42 }, (v, i) => {
    const indexFromFirstDay: number = i - firstDayOfTheMonth + 1;

    if (i >= firstDayOfTheMonth && indexFromFirstDay <= lastDateOfThisMonth) {
      const stdDate: number =
        +lastDateOfPrevMonth + 86400000 * indexFromFirstDay;
      const result = { key: stdDate, value: indexFromFirstDay };

      if (stdDate < +minDate || stdDate > +maxDate) {
        return Object.assign(result, { attribute: 'invalid' });
      }
      if (today === stdDate) {
        return Object.assign(result, { attribute: 'focused' });
      }

      return Object.assign(result, { attribute: 'valid' });
    }

    return { key: -i, value: '', attribute: 'invalid' };
  });

  return (
    <div className="datepicker-body">
      {/* {utils.weekdayCodes.map(day => {
        return (
          <p className="datepicker-weekdays" key={day.code.toString()}>
            {day.label}
          </p>
        );
      })} */}
      {datesOfTheMonth.map(
        (date: Dict): JSX.Element => {
          return (
            <button
              type="button"
              key={date.key.toString()}
              onClick={() => getDateFrom(date.key)}
              className={`datepicker-${date.attribute}-dates`}
            >
              {date.value}
            </button>
          );
        },
      )}
    </div>
  );
};

export default React.memo(DatePickerBody);

import * as React from 'react';
import { Dict } from '@/shared/types';
import { DatepickerBodyProps } from './types';
import * as utils from './utils';

const today = +utils.getStartOfToday();

const DatepickerBody = ({ defaultDate, minDate, maxDate, getDateFrom }: DatepickerBodyProps): JSX.Element => {
  const firstDayOfTheMonth: number = utils.getFirstDayOfTheMonth(defaultDate);
  const lastDateOfThisMonth: number = utils.getDaysInTheMonth(defaultDate);
  const defaultStdDate: number = +new Date(
    utils.getYearOfTheGivenDate(defaultDate),
    utils.getMonthOfTheGivenDate(defaultDate),
    0,
  );

  const datesOfTheMonth = Array.from({ length: 7 * 6 }, (v, i) => {
    if (i >= firstDayOfTheMonth && i < lastDateOfThisMonth + firstDayOfTheMonth) {
      const date = i - firstDayOfTheMonth + 1;
      const stdDate = date * 86400000 + defaultStdDate;
      const result = { key: stdDate, value: date };

      if (stdDate < +minDate || stdDate > +maxDate) {
        return { ...result, ...{ attribute: 'invalid' } };
      }

      if (today === stdDate) {
        return { ...result, ...{ attribute: 'focused' } };
      }

      return { ...result, ...{ attribute: 'valid' } };
    }

    return { key: i, value: '', attribute: 'invalid' };
  });

  return (
    <div className="maiit-datepicker__body">
      {datesOfTheMonth.map((date: Dict): JSX.Element => {
        return (
          <button
            type="button"
            key={date.key.toString()}
            onClick={() => getDateFrom(date.key)}
            className={`body--dates-${date.attribute}`}
          >
            {date.value}
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(DatepickerBody);

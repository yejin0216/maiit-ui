import * as React from 'react';
import { BiChevronLeft, BiChevronsLeft } from 'react-icons/bi';
import { DatePickerNavagationProps } from './types';

const DatePickerHeaderLeftNavigation = ({
  handleClick,
}: DatePickerNavagationProps): JSX.Element => (
  <>
    <button
      className="datepicker-header-navigation"
      type="button"
      onClick={() => handleClick('year')}
    >
      <BiChevronsLeft />
    </button>
    <button
      className="datepicker-header-navigation"
      type="button"
      onClick={() => handleClick('month')}
    >
      <BiChevronLeft />
    </button>
  </>
);

export default DatePickerHeaderLeftNavigation;

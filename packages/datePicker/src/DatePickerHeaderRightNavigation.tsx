import * as React from 'react';
import { BiChevronRight, BiChevronsRight } from 'react-icons/bi';
import { DatePickerNavagationProps } from './types';

const DatePickerHeaderRightNavigation = ({
  handleClick,
}: DatePickerNavagationProps): JSX.Element => (
  <>
    <button
      className="datepicker-header-navigation"
      type="button"
      onClick={() => handleClick('month')}
    >
      <BiChevronRight />
    </button>
    <button
      className="datepicker-header-navigation"
      type="button"
      onClick={() => handleClick('year')}
    >
      <BiChevronsRight />
    </button>
  </>
);

export default DatePickerHeaderRightNavigation;

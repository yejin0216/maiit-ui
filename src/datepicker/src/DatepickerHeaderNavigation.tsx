import * as React from 'react';
import { BiChevronRight, BiChevronsRight, BiChevronLeft, BiChevronsLeft } from 'react-icons/bi';
import { NavigationButtonProps, NavigationProps, DatepickerNavigationProps } from './types';

const NavigationButton = (props: NavigationButtonProps): JSX.Element => {
  const { type, handleClick, icon } = props;
  return (
    <button className="header--navigation" type="button" onClick={() => handleClick(type)}>
      {icon}
    </button>
  );
};

const PrevNavigation = (props: NavigationProps): JSX.Element => {
  const { handleClick } = props;
  return (
    <>
      <NavigationButton type="year" handleClick={handleClick} icon={<BiChevronsLeft />} />
      <NavigationButton type="month" handleClick={handleClick} icon={<BiChevronLeft />} />
    </>
  );
};

const NextNavigation = (props: NavigationProps): JSX.Element => {
  const { handleClick } = props;
  return (
    <>
      <NavigationButton type="month" handleClick={handleClick} icon={<BiChevronRight />} />
      <NavigationButton type="year" handleClick={handleClick} icon={<BiChevronsRight />} />
    </>
  );
};

const DatepickerHeaderNavigation = (props: DatepickerNavigationProps): JSX.Element => {
  const { children, handleClick } = props;
  const [prev, next] = [...handleClick];
  return (
    <>
      <PrevNavigation handleClick={prev} />
      {children}
      <NextNavigation handleClick={next} />
    </>
  );
};

export default DatepickerHeaderNavigation;

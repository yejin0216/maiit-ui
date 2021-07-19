import * as React from 'react';
import {
  BiChevronRight,
  BiChevronsRight,
  BiChevronLeft,
  BiChevronsLeft,
} from 'react-icons/bi';

interface NavigationProps {
  handleClick: (arg0: string) => void;
}

interface NavigationButtonProps extends NavigationProps {
  type: 'month' | 'year';
  icon: JSX.Element;
}

const NavigationButton = (props: NavigationButtonProps): JSX.Element => {
  const { type, handleClick, icon } = props;
  return (
    <button
      className="datepicker-header-navigation"
      type="button"
      onClick={() => handleClick(type)}
    >
      {icon}
    </button>
  );
};

const PrevNavigation = (props: NavigationProps): JSX.Element => {
  const { handleClick } = props;
  return (
    <>
      <NavigationButton
        type="year"
        handleClick={handleClick}
        icon={<BiChevronsLeft />}
      />
      <NavigationButton
        type="month"
        handleClick={handleClick}
        icon={<BiChevronLeft />}
      />
    </>
  );
};

const NextNavigation = (props: NavigationProps): JSX.Element => {
  const { handleClick } = props;
  return (
    <>
      <NavigationButton
        type="month"
        handleClick={handleClick}
        icon={<BiChevronRight />}
      />
      <NavigationButton
        type="year"
        handleClick={handleClick}
        icon={<BiChevronsRight />}
      />
    </>
  );
};

interface DatePickerNavigationProps {
  children: JSX.Element;
  handleClick: [(arg0: string) => void, (arg0: string) => void];
}

const DatePickerHeaderNavigation = (
  props: DatePickerNavigationProps,
): JSX.Element => {
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

export default DatePickerHeaderNavigation;
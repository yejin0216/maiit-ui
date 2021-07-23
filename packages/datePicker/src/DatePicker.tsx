import * as React from 'react';
import { DatepickerProps } from './types';
import * as utils from './utils';
import DatepickerContainer from './styles';
import DatepickerHeader from './DatepickerHeader';
import DatepickerBody from './DatepickerBody';

const dateFormat = 'yyyy-MM-dd';

const Datepicker = (props: DatepickerProps): JSX.Element => {
  const {
    defaultValue = utils.getStartOfToday(),
    minDate = new Date(1970, 0, 1),
    maxDate = new Date(2100, 11, 31),
    fade = true,
    readOnly = false,
    onChange,
  } = props;

  const [defaultDate, setDefaultDate] = React.useState<number | Date>(
    defaultValue,
  );
  // const [targetPosition, setTargetPosition] = React.useState<Dict>({});
  // const [position, setPosition] = React.useState<Dict>({});
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const calendarRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = React.useCallback(
    (e: MouseEvent): void => {
      const $target = e.target as HTMLElement;
      if (e.target === inputRef.current) {
        e.preventDefault();
        if (!isOpen) {
          // const $targetPostion = $target.getBoundingClientRect();
          // setTargetPosition(
          //   Object.assign($targetPostion, {
          //     innerWidth: window.innerWidth,
          //     innerHeight: window.innerHeight,
          //   }),
          // );
          // const $position = calendarRef?.current?.getBoundingClientRect() ?? {};
          // setPosition($position);
          setIsOpen(() => true);
        }
      } else if (calendarRef?.current?.contains($target)) {
        e.stopPropagation();
      } else {
        setIsOpen(() => false);
      }
    },
    [isOpen],
  );

  React.useEffect(() => {
    document.addEventListener('click', handleToggle);
    return () => {
      document.removeEventListener('click', handleToggle);
    };
  }, [handleToggle]);

  React.useEffect(() => {
    setDefaultDate(defaultValue);
    if (inputRef.current) {
      inputRef.current.value = utils.dateFormatter(defaultValue, dateFormat);
    } else {
      throw new Error('Could not find input type to input date.');
    }
  }, [defaultValue]);

  const prev = (type: string): void => {
    setDefaultDate(() => utils.subPeriod(type, defaultDate, 1));
  };

  const next = (type: string): void => {
    setDefaultDate(() => utils.addPeriod(type, defaultDate, 1));
  };

  const getDateFrom = (value: number | Date): void => {
    if (inputRef.current) {
      inputRef.current.value = utils.dateFormatter(value, dateFormat);
    } else {
      throw new Error('Could not find input type to input date.');
    }
    setDefaultDate(() => value);
    setIsOpen(() => false);
  };

  const handleChange = (
    e: React.ChangeEvent,
    fn: (arg0: React.ChangeEvent) => void,
  ): void => {
    const regExp = utils.getRegExpOfDateFormat(dateFormat);
    const $targetValue = (e.target as HTMLInputElement).value;
    if (regExp.test($targetValue)) {
      const value = utils.parseStringInISO($targetValue);
      setDefaultDate(value);
      fn(e);
    }
  };

  return (
    <DatepickerContainer
      className="maiit-datepicker__container"
      isOpen={isOpen}
      // targetPosition={targetPosition}
      // position={position}
      fade={fade}
      autocomplete
    >
      <input
        type="date"
        ref={inputRef}
        className="maiit-datepicker__input"
        aria-label="input date"
        readOnly={readOnly}
        onChange={e => handleChange(e, onChange)}
      />
      <div ref={calendarRef} className="maiit-datepicker__contents">
        <DatepickerHeader defaultDate={defaultDate} prev={prev} next={next} />
        <DatepickerBody
          defaultDate={defaultDate}
          minDate={minDate}
          maxDate={maxDate}
          getDateFrom={getDateFrom}
        />
      </div>
    </DatepickerContainer>
  );
};

export default Datepicker;

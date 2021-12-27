import {
  startOfToday,
  getUnixTime,
  format,
  parseISO,
  subDays,
  subMonths,
  subYears,
  addDays,
  addMonths,
  addYears,
  getDate,
  getWeeksInMonth,
  lastDayOfMonth,
  getDaysInMonth,
  isSameMonth,
  getYear,
  getMonth,
  getDay,
} from 'date-fns';
import { Dict } from '@/shared/types';

/**
 * Return the start of today.
 * @return {Date} the start of today
 */
export const getStartOfToday = (): Date => {
  return startOfToday();
};

/**
 * Return the formatted date string in the given format.
 * @param {Date | Number} date
 * @param {String} pattern
 * @param {Object} options
 * @return {String} the formatted date string
 */
export const dateFormatter = (date: Date | number = new Date(), pattern: string, options?: Dict): string => {
  return format(date, pattern, options);
};

/**
 * Parse the given string in ISO 8601 format and return an instance of Date.
 * @param {String} strDate
 * @param {Object} options
 * @return {Date} the parsed date in the local time zone
 */
export const parseStringInISO = (strDate: string, options?: Dict): Date => {
  return parseISO(strDate, options);
};

/**
 * Get the milliseconds timestamp of the given date.
 * @param {Date | Number} date
 * @returns {Number} the timestamp
 */
export const getUnixTimeOfTheGivenDate = (date: Date | number = new Date()): number => {
  return getUnixTime(date) * 1000;
};

/**
 * Subtract the specified number of period from the given date.
 * @param {String} type
 * @param {Date | Number} date
 * @param {Number} amount
 * @return {Date}
 */
export const subPeriod = (type: string, date: Date | number = new Date(), amount: number): Date => {
  switch (type) {
    case 'day':
      return subDays(date, amount);
    case 'month':
      return subMonths(date, amount);
    default:
      return subYears(date, amount);
  }
};

/**
 * Add the specified number of period to the given date.
 * @param {String} type
 * @param {Date | Number} date
 * @param {Number} amount
 * @return {Date}
 */
export const addPeriod = (type: string, date: Date | number = new Date(), amount: number): Date => {
  switch (type) {
    case 'day':
      return addDays(date, amount);
    case 'month':
      return addMonths(date, amount);
    default:
      return addYears(date, amount);
  }
};

/**
 * Get the day of the month of the given date.
 * @param {Date | Number} date
 * @return {Number} the day of month
 */
export const getTheDayOfMonth = (date: Date | number = new Date()): number => {
  return getDate(date);
};

/**
 * Get the number of calendar weeks the month in the given date spans.
 * @param {Date | Number} date
 * @param {Object} options
 * @return {Number} the number of calendar weeks
 */
export const getWeekInTheMonth = (date: Date | number = new Date(), options?: Dict): number => {
  return getWeeksInMonth(date, options);
};

/**
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 * @param {Date | Number} date
 * @return {Date} the end of a month
 */
export const getEndDateOfTheMonth = (date: Date | number = new Date()): Date => {
  return lastDayOfMonth(date);
};

/**
 * Get the number of days in a month of the given date.
 * @param {Date | Number} date
 * @return {Number} the number of days in a month
 */
export const getDaysInTheMonth = (date: Date | number = new Date()): number => {
  return getDaysInMonth(date);
};

/**
 * Are the given dates in the same month?
 * @param dateLeft
 * @param dateRight
 * @return {Boolean} the dates are in the same month
 */
export const isSameMonthInYear = (dateLeft = new Date(), dateRight = new Date()): boolean => {
  return isSameMonth(dateLeft, dateRight);
};

/**
 * Get the year of the given date.
 * @param {Date | Number} date
 * @return {Number} the year
 */
export const getYearOfTheGivenDate = (date: Date | number = new Date()): number => {
  return getYear(date);
};

/**
 * Get the month of the given date.
 * @param {Date | Number} date
 * @return {Number} the month
 */
export const getMonthOfTheGivenDate = (date: Date | number = new Date()): number => {
  return getMonth(date);
};

/**
 * Get the day of the week of the given date.
 * @param {Date | Number} date
 * @return {0 | 1 | 2 | 3 | 4 | 5 | 6} the day of week, 0 represents Sunday
 */
export const getDayOfTheWeek = (date: Date | number = new Date()): number => {
  return getDay(date);
};

/**
 * Return the day of the first day of the month
 * @param {Date} date
 * @return {0 | 1 | 2 | 3 | 4 | 5 | 6} the day of week, 0 represents Sunday
 */
export const getFirstDayOfTheMonth = (date: Date | number = new Date()): number => {
  return getDay(new Date(getYear(date), getMonth(date), 1));
};

/**
 * Return the day of the last day of the month
 * @param {Date} date
 * @return {0 | 1 | 2 | 3 | 4 | 5 | 6} the day of week, 0 represents Sunday
 */
export const getLastDayOfTheMonth = (date: Date | number = new Date()): number => {
  return getDay(new Date(getYear(date), getMonth(date), 0));
};

/**
 * the codes of weekdays
 * @constant
 */
export const weekdayCodes = [
  { code: 0, label: 'S' },
  { code: 1, label: 'M' },
  { code: 2, label: 'T' },
  { code: 3, label: 'W' },
  { code: 4, label: 'T' },
  { code: 5, label: 'F' },
  { code: 6, label: 'S' },
];

/**
 * Return regular expression pattern of the given date formate
 * @param {String} formatType
 * @return {RegExp}
 */
export const getRegExpOfDateFormat = (formatType: string): RegExp => {
  let regExp = '';
  switch (formatType) {
    case 'yyyy-MM-dd':
      regExp = '^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$';
      break;
    case 'dd-MM-yyyy':
      regExp = '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$';
      break;
    case 'MM-dd-yyyy':
      regExp = '^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d$';
      break;
    default:
      regExp = '^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$';
  }
  return new RegExp(regExp);
};

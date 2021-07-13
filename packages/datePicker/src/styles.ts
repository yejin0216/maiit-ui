import styled, { css } from 'styled-components';
import { fontSizes } from '@/theme/styles/fonts';
import { geek } from '@/theme/styles/colors';
import { classNames } from '@/color-mode/src/utils';

const baseGridStyles = css`
  letter-spacing: 0.025rem;
  text-transform: uppercase;
`;

const baseDateBlockStyles = css`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin: 0;
  background: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const DatePickerContainer = styled.div.attrs(props => {
  props.className as string;
})`
  .datepicker-input {
    display: inline-block;
    width: 200px;
    height: 30px;
    font-size: ${fontSizes.md};
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #929292;
    padding: 0.375rem 0.75rem;
  }

  .datepicker-calendar {
    z-index: 10000;
    position: absolute;
    left: 0;
    top: 0;
    word-break: break-all;
    text-align: left;
    height: auto;
    width: auto;
    border-radius: 3px;
    font-size: ${fontSizes.md};
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
    transform-origin: top left;
    transform: ${({ targetPosition, position }) =>
      `translate(${targetPosition.left}px, ${
        targetPosition.innerHeight - targetPosition.bottom < position.height
          ? targetPosition.top - position.height
          : targetPosition.bottom
      }px)`};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: ${props =>
      props.fade ? 'visibility 0.3s linear, opacity 0.3s' : 0};
  }

  .datepicker-header {
    display: flex;
    height: 40px;
    // font-size: ${fontSizes.xs};
    letter-spacing: 0.03125rem;
    text-transform: uppercase;
    padding: 16px;

    .datepicker-header-label {
      flex-grow: 1;
      line-height: 40px;
      text-align: center;
      font-weight: bold;
    }

    .datepicker-header-navigation {
      margin: 0;
      border: 0;
      padding: 0;
      outline: none;
      font: inherit;
      min-width: 40px;
      background: none;
      cursor: pointer;
      font-size: ${fontSizes['3xl']};
      &:hover {
        background-color: ${geek.blue10};
        border-radius: 3px;
      }
    }
  }

  .datepicker-body {
    flex-shrink: 0;
    display: grid;
    padding: 0 8px 8px 8px;
    grid-template-columns: repeat(7, 40px);
    grid-auto-rows: 40px;
    row-gap: 2px;
    place-items: center;
    -webkit-box-align: center;
    user-select: none;
    color: inherit;

    .datepicker-weekdays {
      ${baseGridStyles};
      font-size: ${fontSizes.sm};
      font-weight: bold;
      color: #757575;
    }

    .datepicker-valid-dates {
      ${baseGridStyles};
      ${baseDateBlockStyles};
      &:hover {
        background-color: ${geek.blue10};
        cursor: pointer;
      }
    }

    .datepicker-invalid-dates {
      ${baseGridStyles};
      ${baseDateBlockStyles};
      opacity: 10%;
    }

    .datepicker-focused-dates {
      ${baseGridStyles};
      ${baseDateBlockStyles};
      border: 1px solid #757575;
      cursor: pointer;
    }
  }
`;

export default DatePickerContainer;

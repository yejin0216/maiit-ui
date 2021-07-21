import styled, { css } from 'styled-components';
import { fontSizes } from '@/theme/styles/fonts';
import { MAIIT_DATEPICKER } from '@/theme/styles/constants';

const baseGridStyle = css`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-auto-rows: 40px;
  row-gap: 2px;
  padding: 0 8px;
  place-items: center;
  user-select: none;
`;

const baseGridItemStyles = css`
  width: 40px;
  height: 40px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  border-radius: 50%;
`;

const baseDateBlockStyles = css`
  border: none;
  background: none;
`;

const DatePickerContainer = styled.div.attrs(props => {
  props.className as string;
})`
  .${MAIIT_DATEPICKER}__input {
    display: inline-block;
    width: 200px;
    height: 30px;
    font-size: ${fontSizes.md};
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #929292;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
  }

  .${MAIIT_DATEPICKER}__contents {
    z-index: 10001;
    position: absolute;
    word-break: break-all;
    text-align: left;
    height: auto;
    width: auto;
    border-radius: 3px;
    font-size: ${fontSizes.md};
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
    transform-origin: top left;
    transform: translate(0px, 0px);
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: ${props =>
      props.fade ? 'visibility 0.3s linear, opacity 0.3s' : 0};
  }

  .${MAIIT_DATEPICKER}__header {
    display: flex;
    height: 40px;
    letter-spacing: 0.03125rem;
    text-transform: uppercase;
    padding: 16px;

    .header__label {
      flex-grow: 1;
      line-height: 40px;
      text-align: center;
      font-weight: 500;
    }

    .header--navigation {
      margin: 0;
      border: 0;
      padding: 0;
      outline: none;
      font: inherit;
      min-width: 40px;
      background: none;
      border-radius: 50%;
      font-size: ${fontSizes['3xl']};
    }
  }

  .header--weekdays-group {
    ${baseGridStyle}
    margin-bottom: 8px;
    border-bottom: 1px solid #e0e0e0;

    .header--weekdays {
      ${baseGridItemStyles};
      font-size: ${fontSizes.sm};
    }
  }

  .${MAIIT_DATEPICKER}__body {
    ${baseGridStyle}

    .body--dates-valid {
      ${baseGridItemStyles};
      ${baseDateBlockStyles};
    }

    .body--dates-invalid {
      ${baseGridItemStyles};
      ${baseDateBlockStyles};
      opacity: 10%;
    }

    .body--dates-focused {
      ${baseGridItemStyles};
      ${baseDateBlockStyles};
      border: 1px solid #757575;
      cursor: pointer;
    }
  }
`;

export default DatePickerContainer;

import styled from 'styled-components';
import { MAIIT_DATEPICKER } from '@/theme/styles/constants';
import { Dict } from '@/shared/types';

const baseGridStyle = `
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(7, 36px);
  grid-auto-rows: 36px;
  row-gap: 2px;
  padding: 0 8px;
  place-items: center;
  user-select: none;
`;

const baseGridItemStyles = `
  width: 36px;
  height: 36px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  border-radius: 50%;
`;

const baseDateBlockStyles = `
  border: none;
  background: none;
`;

const DatepickerContainer = styled.div.attrs(props => {
  props.className as string;
})`
  .${MAIIT_DATEPICKER}__input {
    display: inline-block;
    width: 200px;
    height: 30px;
    font-size: ${props => (props.theme as Dict).font.sizes.md};
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #bbb;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
  }

  .${MAIIT_DATEPICKER}__contents {
    z-index: 10000;
    position: absolute;
    word-break: break-all;
    text-align: left;
    height: auto;
    width: auto;
    font-size: ${props => (props.theme as Dict).font.sizes.md};
    border: 1px solid #121212;
    transform-origin: top left;
    transform: translate(0px, 5px);
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: ${props => (props.fade ? 'visibility 0.3s linear, opacity 0.3s' : 0)};
  }

  .${MAIIT_DATEPICKER}__header {
    display: flex;
    height: 40px;
    letter-spacing: 0.03125rem;
    text-transform: uppercase;
    padding: 10px;

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
      font-size: ${props => (props.theme as Dict).font.sizes['3xl']};
      color: #aaaaaa;

      &:hover {
        background-color: #eeeeee;
      }
    }
  }

  .header--weekdays-group {
    ${baseGridStyle}
    margin-bottom: 8px;

    .header--weekdays {
      ${baseGridItemStyles};
      font-size: ${props => (props.theme as Dict).font.sizes['2xs']};
      color: #909090;
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
      background-color: ${props => (props.theme as Dict).colors.secondary.sub1}80;
    }

    .body--dates-valid {
      &:hover {
        background-color: ${props => (props.theme as Dict).colors.secondary.sub1}80;
      }
    }
  }
`;

export default DatepickerContainer;

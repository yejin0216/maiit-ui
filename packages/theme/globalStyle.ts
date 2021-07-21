import { createGlobalStyle } from 'styled-components';
import { classNames } from '@/color-mode/src/utils';
import { Dict } from '@/shared/types';

const nomarlize = `
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }
  pre {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    /* line-height: 1.15; */ 
    margin: 0; 
  }
  button,
  input { 
    overflow: visible;
  }
  button,
  select { 
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; /* 3 */
    white-space: normal; 
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;

export default createGlobalStyle`
  ${nomarlize}
  html {
    font-family: Roboto,Helvetica Neue,sans-serif;
    font-size: 14px;
  }
  button {
    cursor: pointer;
  }

  .maiit-datepicker__container {
    .maiit-datepicker__header > .header--navigation:hover {
      background-color: #eeeeee;
    }
    .maiit-datepicker__body > .body--dates-valid:hover,
    .maiit-datepicker__body > .body--dates-invalid:hover  {
      background-color: ${props => (props.theme as Dict).colors.default[100]};
    }
  }

  .${classNames.light} {
    background-color: ${props =>
      (props.theme as Dict).backgroundColors.default.primary};
    color: ${props => (props.theme as Dict).fontColors.default.title};

    input, 
    .maiit-datepicker__body button, 
    .maiit-datepicker__header div {
      color: ${props => (props.theme as Dict).fontColors.default.title};
    }

    .maiit-datepicker__header button {
      color: #858585; 
    }

    .header--weekdays {
      color: #00000061;
    }
  }
  .${classNames.dark} {
    background-color: ${props =>
      (props.theme as Dict).backgroundColors.dark.primary};
    color: ${props => (props.theme as Dict).fontColors.dark.title};

    input, 
    .maiit-datepicker__contents {
      background-color: ${props => (props.theme as Dict).colors.grey[800]};
    }

    input, 
    .maiit-datepicker__contents button, 
    .maiit-datepicker__header {
      color: ${props => (props.theme as Dict).fontColors.dark.title};
    }
  }
`;

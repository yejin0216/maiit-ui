# MAIIT-BUTTON

## Description

The Datepicker component is used to select a date. If you click a date calendar, the datepicker component returns the selected date.

## Components

- Datepicker

## Usage

```
  import {
    Datepicker
  } from "@maiit-ui/datepicker"
```

## Props

- defaultValue

  | Type | default    |
  | :--- | :--------- |
  | Date | new Date() |

- minDate

  | Type | default    |
  | :--- | :--------- |
  | Date | new Date() |

- maxDate

  | Type | default    |
  | :--- | :--------- |
  | Date | new Date() |

- readOnly

  | Type    | Default |
  | :------ | :------ |
  | boolean | false   |

- onChange

  | Description                                   | Type   |
  | :-------------------------------------------- | :----- |
  | if clicked on the calendar, return the dates. | string |

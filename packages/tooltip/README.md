# MAIIT-TOOLTIP

## Description

> The tooltip, also known as infotip or hint, is a common graphical user interface element in which, when hovering over a screen element or component, a text box displays information about that element (such as a description of a button's function, or what an abbreviation stands for). The tooltip is displayed continuously as long as the user hovers over the element.
> [wikipedia](https://en.wikipedia.org/wiki/Tooltip)

## Components

- Tooltip

## Usage

```
  import {
    Tooltip
  } from "@maiit-ui/tooltip"
```

## Props

- label

  | Description        | Type   |
  | :----------------- | :----- |
  | content to display | string |

- trigger

  | Type               | Default |
  | :----------------- | :------ |
  | "click" \| "hover" | "click" |

- placement

  | Type                                                                                                                                                                                                       | Default  |
  | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
  | "bottom" \| "left" \| "right" \| "top" \| "auto" \| "auto-start" \| "auto-end" \| "top-start" \| "top-end" \| "bottom-start" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end" | "bottom" |

- style

  | Description | Type   |
  | :---------- | :----- |
  | style       | object |

- children

  | Description | Type      |
  | :---------- | :-------- |
  | target      | ReactNode |

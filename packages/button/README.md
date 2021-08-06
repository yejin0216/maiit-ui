# MAIIT-BUTTON

## Description

The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Components

- Button

## Usage

```
  import {
    Button
  } from "@maiit-ui/button"
```

## Props

- color

  | Type                                                                                                                                                                | default   |
  | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- |
  | "primary" \| "primary sub1" \| "primary sub2" \| "secondary" \| "secondary sub1" \| "secondary sub2" \| "dgray" \| "lgray" \| "white" \| "black" \| string(#RRGGBB) | "primary" |

- size

  | Type                         | default |
  | :--------------------------- | :------ |
  | "sm" \| "md" \| "lg" \| "xs" | "md"    |

- variant

  | Description                                               | default |
  | :-------------------------------------------------------- | :------ |
  | if `true`, the button will be styled in its active state. | boolean |

- active

  | Description                                               | Type    | Default |
  | :-------------------------------------------------------- | :------ | :------ |
  | if `true`, the button will be styled in its active state. | boolean | true    |

- disabled

  | Description                             | Type    | Default |
  | :-------------------------------------- | :------ | :------ |
  | if `true`, the button will be disabled. | boolean | false   |

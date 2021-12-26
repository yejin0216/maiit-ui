# MAIIT-TABLE

## Description

## Components

- Table
- IndeterminateCheckbox

## Usage

```
  import {
    Table
  } from "@maiit-ui/table"
```

## Props

- columns

  | Type   | default |
  | :----- | :------ |
  | Column | []      |

- data

  | Type | default |
  | :--- | :------ |
  | T    | [{}]    |

- initialState

  | Description                                                                                          | Type |
  | :--------------------------------------------------------------------------------------------------- | :--- |
  | If a row's ID is found in this array, it will have the state of the value corresponding to that key. | {}   |

- className

  | Description | Type          |
  | :---------- | :------------ |
  |             | Array<String> |

- rowSelection

  | Type    | default |
  | :------ | :------ |
  | boolean | false   |

- scroll

  | Type    | default |
  | :------ | :------ |
  | boolean | false   |

- onRowClick

  | Description                                   | Type                                                                       |
  | :-------------------------------------------- | :------------------------------------------------------------------------- |
  | if clicked on the row, return the row origin. | (e: MouseEvent<HTMLTableRowElement>, row: Record<string, unknown>) => void |

- onCellClick

  | Description                                   | Type                                                                       |
  | :-------------------------------------------- | :------------------------------------------------------------------------- |
  | if clicked on the cell, return the cell data. | (e: MouseEvent<HTMLTableRowElement>, row: Record<string, unknown>) => void |

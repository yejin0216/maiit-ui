import { MouseEvent } from 'react';
import { Column, Row } from 'react-table';

export interface ITableProperty<T> {
  columns: Column[];
  data: T[];
  initialState?: Record<string, unknown>;
}

export type TTableEvent = {
  onRowClick?: (
    e: MouseEvent<HTMLTableRowElement>,
    row: Record<string, unknown>,
  ) => void;
  onCellClick?: (
    e: MouseEvent<HTMLTableRowElement>,
    row: Record<string, unknown>,
  ) => void;
};

export interface ITableProps<T> extends ITableProperty<T> {
  className?: Array<string>;
  rowSelection?: boolean;
  scroll?: boolean;
  onRowClick?: Pick<TTableEvent, 'onRowClick'>;
  onCellClick?: Pick<TTableEvent, 'onCellClick'>;
}

export interface ITableTrProps {
  row: Row;
  onRowClick?: Pick<TTableEvent, 'onRowClick'>;
  onCellClick?: Pick<TTableEvent, 'onCellClick'>;
}

import { Dict } from '@/shared/types';
import { MouseEvent } from 'react';
import { Column, HeaderGroup, Row } from 'react-table';

export interface ITableProperty<T> {
  columns: Column[];
  data: T[];
  initialState?: Record<string, unknown>;
}

export type TOnRowClick = (
  e: MouseEvent<HTMLTableRowElement>,
  row: Dict<unknown>,
) => void;

export type TOnCellClick = (
  e: MouseEvent<HTMLTableRowElement>,
  row: Dict<unknown>,
) => void;

export interface ITableProps<T> extends ITableProperty<T> {
  classNames?: string[];
  rowSelection?: boolean;
  scroll?: boolean;
  onRowClick?: TOnRowClick;
  onCellClick?: TOnCellClick;
}

export interface ITheadProps {
  headerGroups: HeaderGroup[];
}

export interface ITableTrProps {
  row: Row;
  onRowClick?: TOnRowClick;
  onCellClick?: TOnCellClick;
}

export interface ICheckboxProps {
  indeterminate?: boolean;
  id: string;
  disabled?: boolean;
  onClick?: () => void;
}

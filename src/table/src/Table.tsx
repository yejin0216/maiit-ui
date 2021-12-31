import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import { HeaderProps, Hooks, TableInstance, useRowSelect, useTable } from 'react-table';
import { mergeClasses } from '@/shared/utils';
import { Dict } from '@/shared/types';
import { ITableProps } from './types';
import { Theader, TrWithData, TrWithNoData, IndeterminateCheckbox } from './TableProperty';

const pluginHooks = (hooks: Hooks) => {
  hooks.visibleColumns.push(columns => [
    {
      id: 'selection',
      Header: function setHeaderProps(headerProps: HeaderProps<Dict<unknown>>) {
        const { isAllRowsSelected, toggleRowSelected, rows } = headerProps;

        const selectableRows = rows.filter(row => !row.original.disabled);
        const selectedRows = rows.filter(row => row.original.disabled);

        const overriddenOnChange = (e: ChangeEvent<HTMLInputElement>) => {
          selectableRows.forEach(row => toggleRowSelected(row.id, e.currentTarget.checked));
        };
        const disabled = !selectableRows.length;
        const checked =
          isAllRowsSelected || (selectableRows.length !== 0 && selectableRows.length === selectedRows.length);
        const modifiedToggleAllRowsProps = {
          onChange: overriddenOnChange,
          disabled,
          checked,
        };

        return <IndeterminateCheckbox id="0" {...modifiedToggleAllRowsProps} />;
      },
    },
    ...columns,
  ]);
};

type TTableProps<T> = TableInstance &
  Pick<ITableProps<T>, 'classNames' | 'onRowClick' | 'onCellClick'> & { isSearched: boolean };

const Table = <T,>(props: TTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    classNames = [],
    isSearched = false,
    onRowClick,
    onCellClick,
  } = props;

  return (
    <table {...getTableProps()} className={mergeClasses(classNames)}>
      <Theader headerGroups={headerGroups} />
      <tbody {...getTableBodyProps()}>
        {rows.length === 0 ? (
          <TrWithNoData colSpan={allColumns.length} isSearched={isSearched} />
        ) : (
          rows.map(row => {
            prepareRow(row);
            return <TrWithData key={row.id} row={row} onRowClick={onRowClick} onCellClick={onCellClick} />;
          })
        )}
      </tbody>
    </table>
  );
};

const RowSelectionTable = <T,>(props: ITableProps<T>): ReactElement => {
  const { columns, data, initialState = {}, classNames = [], scroll = false, onRowClick, onCellClick } = props;

  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (!isSearched) setIsSearched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState,
    },
    useRowSelect,
    pluginHooks,
  );

  return (
    <Table<T>
      {...tableInstance}
      classNames={classNames}
      onRowClick={onRowClick}
      onCellClick={onCellClick}
      isSearched={isSearched}
    />
  );
};

const BasicTable = <T,>(props: ITableProps<T>): ReactElement => {
  const { columns, data, initialState = {}, classNames = [], scroll = false, onRowClick, onCellClick } = props;

  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (!isSearched) setIsSearched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const tableInstance = useTable({
    columns,
    data,
    initialState,
  });

  return (
    <Table<T>
      {...tableInstance}
      classNames={classNames}
      onRowClick={onRowClick}
      onCellClick={onCellClick}
      isSearched={isSearched}
    />
  );
};

export { BasicTable, RowSelectionTable };

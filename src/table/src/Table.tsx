import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import { CellProps, HeaderProps, Hooks, useRowSelect, useTable } from 'react-table';
import { mergeClasses } from '@/shared/utils';
import { Dict } from '@/shared/types';
import { ITableProps } from './types';
import { Theader, TrWithData, TrWithNoData, IndeterminateCheckbox } from './TableProperty';

const pluginHooks = [
  useRowSelect,
  (hooks: Hooks) => {
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
  },
];

const Table = <T,>(props: ITableProps<T>): ReactElement => {
  const {
    columns,
    data,
    initialState = {},
    classNames = [],
    rowSelection = false,
    scroll = false,
    onRowClick,
    onCellClick,
  } = props;

  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (!isSearched) setIsSearched(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns } = useTable(
    {
      columns,
      data,
      initialState,
    },
    ...(rowSelection ? pluginHooks : []),
  );

  const isNoData = rows.length === 0;
  const colCount = allColumns.length;

  return (
    <table {...getTableProps()} className={mergeClasses(classNames)}>
      <Theader headerGroups={headerGroups} />
      <tbody {...getTableBodyProps()}>
        {isNoData ? (
          <TrWithNoData colSpan={colCount} isSearched={isSearched} />
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

export default Table;

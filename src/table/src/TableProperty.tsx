/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-key */
import { __DEV__ } from '@/shared/constants';
import React, { ReactElement, MouseEvent, memo, forwardRef, Ref, useRef, useEffect } from 'react';
import { Cell, Row } from 'react-table';
import { ICheckboxProps, ITableTrProps, ITheadProps, TOnRowClick } from './types';

export const Theader = (props: ITheadProps): ReactElement => {
  const { headerGroups } = props;
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps({
                style: { width: column.width },
              })}
              scope="col"
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export const TrWithData = (props: ITableTrProps): ReactElement => {
  const { row, onRowClick, onCellClick } = props;

  const handleRowClick = (e: MouseEvent<HTMLTableRowElement>, selectedRow: Row): TOnRowClick | void => {
    return onRowClick ? onRowClick(e, selectedRow.original) : e.preventDefault();
  };

  return (
    <tr {...row.getRowProps()} onClick={e => handleRowClick(e, row)}>
      {row.cells.map((cell: Cell) => (
        <td {...cell.getCellProps({ style: { width: cell.column.width } })}>{cell.render('Cell')}</td>
      ))}
    </tr>
  );
};

interface INoDataProps {
  colSpan: number;
  isSearched: boolean;
}

export const TrWithNoData = (props: INoDataProps): ReactElement => {
  const { colSpan, isSearched } = props;
  return (
    <tr>
      <td colSpan={colSpan} className="msg-txt">
        {isSearched ? '검색 결과가 없습니다.' : '등록된 정보가 없습니다.'}
      </td>
    </tr>
  );
};

export const IndeterminateCheckbox = memo(
  forwardRef<HTMLInputElement, ICheckboxProps>(
    ({ indeterminate, id, ...rest }, ref: Ref<HTMLInputElement>): ReactElement => {
      const defaultRef = useRef<HTMLInputElement>(null);
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        // NOTE https://github.com/tannerlinsley/react-table/discussions/1989
        if (typeof resolvedRef === 'object' && resolvedRef.current) {
          resolvedRef.current.indeterminate = Boolean(indeterminate);
        }
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <label htmlFor={id}>체크박스 라인</label>
          <input type="checkbox" id={id} name="check" ref={resolvedRef} {...rest} />
        </>
      );
    },
  ),
);

if (__DEV__) {
  IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';
}

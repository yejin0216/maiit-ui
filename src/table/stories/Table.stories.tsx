import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITableProps } from '@/table/src/types';
import { BasicTable, RowSelectionTable } from '@/table/src/Table';
import makeData, { IPersonData } from './makeData';

const columns = [
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Visits',
    accessor: 'visits',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Profile Progress',
    accessor: 'progress',
  },
];

export default {
  title: 'Table/Table',
  component: BasicTable,
} as ComponentMeta<typeof BasicTable>;

const BasicTableTemplate: ComponentStory<typeof BasicTable> = args => <BasicTable {...args} />;

export const basic = BasicTableTemplate.bind({});
basic.storyName = '기본';
basic.args = {
  columns,
  data: makeData(20),
  scroll: false,
};

const RowSelectionTableTemplate: ComponentStory<typeof RowSelectionTable> = args => <RowSelectionTable {...args} />;

export const rowSelection = RowSelectionTableTemplate.bind({});
rowSelection.storyName = '행 선택';
rowSelection.args = {
  columns,
  data: makeData(20),
  scroll: false,
};

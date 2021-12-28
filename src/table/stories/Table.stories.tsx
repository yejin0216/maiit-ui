import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITableProps } from '@/table/src/types';
import Table from '@/table/src/Table';
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

const BasicTable = (props: ITableProps<IPersonData>): JSX.Element => {
  return <Table {...props} />;
};

export default {
  title: 'TABLE/Bisic Table',
  component: BasicTable,
  paramters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'If the example does not work properly, please view in [new window].',
      },
    },
  },
} as ComponentMeta<typeof BasicTable>;

const Template: ComponentStory<typeof BasicTable> = args => <BasicTable {...args} />;

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  columns,
  data: makeData(20),
  rowSelection: false,
  scroll: false,
};

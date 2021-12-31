import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITableProps } from '@/table/src/types';
import { BasicTable } from '@/table/src/Table';
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

const BasicTableWrapper = (props: ITableProps<IPersonData>): JSX.Element => {
  return <BasicTable {...props} />;
};

export default {
  title: 'TABLE/Bisic Table',
  component: BasicTableWrapper,
  paramters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'If the example does not work properly, please view in [new window].',
      },
    },
  },
} as ComponentMeta<typeof BasicTableWrapper>;

const BasicTableTemplate: ComponentStory<typeof BasicTableWrapper> = args => <BasicTableWrapper {...args} />;

export const basic = BasicTableTemplate.bind({});
basic.storyName = '기본';
basic.args = {
  columns,
  data: makeData(20),
  scroll: false,
};

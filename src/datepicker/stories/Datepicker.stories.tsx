import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Datepicker from '../src/Datepicker';
import { DatepickerProps } from '../src/types';
import * as utils from '../src/utils';

const DatepickerWrapper = (props: DatepickerProps) => {
  return <Datepicker {...props} />;
};

export default {
  title: 'DATETIME/Datepicker',
  component: DatepickerWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'If the example does not work properly, please view in [new window].',
      },
    },
  },
  argTypes: {
    fade: {
      description: 'Whether transition is applied',
      table: {
        defaultValue: { summary: true },
      },
    },
    readOnly: {
      description: 'Whether the input box is readonly',
      table: {
        defaultValue: { summary: false },
      },
    },
    defaultValue: {
      description: 'Default selected date',
      control: { type: 'date' },
      table: {
        defaultValue: { summary: 'Today' },
      },
    },
    minDate: {
      description: 'Minimum selectable date',
      control: { type: 'date' },
    },
    maxDate: {
      description: 'Maximum selectable date',
      control: { type: 'date' },
    },
    // onChange: {
    //   description: 'Minimum selectable date',
    // },
  },
} as ComponentMeta<typeof DatepickerWrapper>;

const Template: ComponentStory<typeof DatepickerWrapper> = args => <DatepickerWrapper {...args} />;

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  fade: true,
  defaultValue: utils.getStartOfToday(),
  minDate: utils.subPeriod('year', utils.getStartOfToday(), 1),
  maxDate: utils.addPeriod('year', utils.getStartOfToday(), 1),
  readOnly: false,
  onChange: (e: React.ChangeEvent) => {
    const $targetValue = (e.target as HTMLInputElement).value;
  },
};

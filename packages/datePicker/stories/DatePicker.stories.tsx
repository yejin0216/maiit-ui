import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from '../src/DatePicker';
import { DatePickerProps } from '../src/types';
import * as utils from '../src/utils';

const DatePickerWrapper = (props: DatePickerProps) => {
  const handleChange = (e: React.ChangeEvent) => {
    const $target = e.target as HTMLInputElement;
    console.log($target.value);
  };

  return <DatePicker {...props} onChange={handleChange} />;
};

export default {
  title: 'Date Picker',
  component: DatePickerWrapper,
  parameters: {
    docs: {
      description: {
        component: `You can pick a date from the widget and return it.<br/>
        ✳︎ If the example does not work properly, please view in [new window].`,
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
    dateFormat: {
      description: 'Date format',
      table: {
        defaultValue: { summary: 'yyyy-MM-dd' },
      },
    },
  },
} as ComponentMeta<typeof DatePickerWrapper>;

const Template: ComponentStory<typeof DatePickerWrapper> = args => (
  <DatePicker {...args} />
);

export const InputType = Template.bind({});
InputType.args = {
  fade: true,
  defaultValue: utils.getStartOfToday(),
  minDate: utils.subPeriod('year', utils.getStartOfToday(), 1),
  maxDate: utils.addPeriod('year', utils.getStartOfToday(), 1),
  readOnly: false,
};

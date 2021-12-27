import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopperProps } from '@/popper';
import { Tooltip } from '@/tooltip';
import Button from '@/button/src/Button';

const TooltipStory = (props: PopperProps) => {
  return (
    <Tooltip {...props}>
      <Button color="primary" size="md">
        TOOLTIP
      </Button>
    </Tooltip>
  );
};

export default {
  title: 'OVERLAY/Tooltip',
  component: TooltipStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'If the example does not work properly, please view in [new window].',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Display message',
      table: {
        defaultValue: { summary: '' },
      },
    },
    trigger: {
      options: ['click', 'hover'],
      control: {
        type: 'radio',
        labels: {
          click: 'click',
          hover: 'hover',
        },
      },
      description: 'Mouse event type (Choose between click and mouseover)',
      table: {
        defaultValue: { summary: 'click' },
      },
    },
    placement: {
      options: [
        'bottom',
        'left',
        'right',
        'top',
        'auto',
        'auto-start',
        'auto-end',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
      control: {
        type: 'select',
        labels: {
          bottom: 'bottom',
          left: 'left',
          right: 'right',
          top: 'top',
          auto: 'auto',
          'auto-start': 'auto-start',
          'auto-end': 'auto-end',
          'top-start': 'top-start',
          'top-end': 'top-end',
          'bottom-start': 'bottom-start',
          'bottom-end': 'bottom-end',
          'right-start': 'right-start',
          'right-end': 'right-end',
          'left-start': 'left-start',
          'left-end': 'left-end',
        },
      },
      description: 'Tooltip position',
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
  },
} as ComponentMeta<typeof TooltipStory>;

const Template: ComponentStory<typeof TooltipStory> = args => <TooltipStory {...args} />;

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  label: "it's a tooltip!",
  trigger: 'click',
  placement: 'bottom',
  style: {},
};

import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { PopperProps } from '@/popper';
import { Tooltip } from '@/tooltip';

const Button = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  width: 102px;
  height: 34px;
  border: 0;
  border-radius: 5px;
  background-color: #ff464b;
  font-size: 14px;
  padding: 11px 20px;
  margin: 0px;
`;

const TooltipStory = (props: PopperProps) => {
  return (
    <Tooltip {...props}>
      <Button type="button" id="tooltip-example">
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
        component:
          'If the example does not work properly, please view in [new window].',
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
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'radio',
        labels: {
          top: 'top',
          right: 'right',
          bottom: 'bottom',
          left: 'left',
        },
      },
      description: 'Tooltip position',
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
  },
} as ComponentMeta<typeof TooltipStory>;

const Template: ComponentStory<typeof TooltipStory> = args => (
  <TooltipStory {...args} />
);

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  label: "it's a tooltip!",
  trigger: 'click',
  placement: 'bottom',
  style: {},
};

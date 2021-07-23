import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { PopperProps } from '@/popper';
import {
  Popover,
  PopoverTrigger,
  PopoverContents,
  PopoverHeader,
  PopoverBody,
} from '@/popover';

const Button = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #1ea7fd;
  font-size: 14px;
  padding: 11px 20px;
`;

const PopoverWrapper = (props: PopperProps) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <Button type="button" id="popover-example">
          Open Popover
        </Button>
      </PopoverTrigger>
      <PopoverContents>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          A popover is a light roll made from an egg batter similar to that of
          Yorkshire pudding, typically baked in muffin tins or dedicated popover
          pans, which have straight-walled sides rather than angled. Popovers
          may be served either as a sweet, topped with fruit and whipped cream;
          or, butter and jam for breakfast; or, with afternoon tea; or, with
          meats at lunch and dinner.
        </PopoverBody>
      </PopoverContents>
    </Popover>
  );
};

export default {
  title: 'OVERLAY/Popover',
  component: PopoverWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `You can pick a date from the widget and return it.<br/>
        ✳︎ If the example does not work properly, please view in [new window].`,
      },
    },
  },
  argTypes: {
    trigger: {
      description: 'Whether the input box is readonly',
      table: {
        defaultValue: { summary: 'click' },
      },
    },
    placement: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
      description: 'Whether transition is applied',
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
    fade: {
      description: 'Whether transition is applied',
      table: {
        defaultValue: { summary: true },
      },
    },
  },
} as ComponentMeta<typeof PopoverWrapper>;

const Template: ComponentStory<typeof PopoverWrapper> = args => (
  <PopoverWrapper {...args} />
);

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  trigger: 'click',
  placement: 'bottom',
  fade: true,
  style: {},
};

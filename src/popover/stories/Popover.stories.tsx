import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopperProps } from '@/popper';
import {
  Popover,
  PopoverTrigger,
  PopoverContents,
  PopoverHeader,
  PopoverBody,
} from '@/popover';
import Button from '@/button/src/Button';

const PopoverWrapper = (props: PopperProps) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <Button color="primary" size="md">
          POPOVER
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
        component:
          'If the example does not work properly, please view in [new window].',
      },
    },
  },
  argTypes: {
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
      description: 'Popover position',
      table: {
        defaultValue: { summary: 'bottom' },
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
  style: {},
};

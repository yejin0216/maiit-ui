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

const PopoverWrapper = (props: PopperProps) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <button type="button" id="popover-example">
          Open Popover
        </button>
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
  title: 'Popover',
  component: PopoverWrapper,
  parameters: {
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

export const Basic = Template.bind({});
Basic.args = {
  trigger: 'click',
  placement: 'bottom',
  fade: true,
  style: {},
};

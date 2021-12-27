import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonProps } from '@/button/src/types';
import Button from '@/button/src/Button';

const ButtonStory = (props: ButtonProps): JSX.Element => {
  return <Button {...props}>Button</Button>;
};

export default {
  title: 'BUTTON/Button',
  component: ButtonStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'If the example does not work properly, please view in [new window].',
      },
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
        labels: {
          primary: 'primary',
          secondary: 'secondary',
        },
      },
      description: 'Tooltip position',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'radio',
        labels: {
          xs: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
        },
      },
      description: 'Tooltip position',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      options: ['solid', 'outlined'],
      control: {
        type: 'radio',
        labels: {
          solid: 'solid',
          outlined: 'outlined',
        },
      },
      description: 'Tooltip position',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    disabled: {
      description: 'Whether transition is applied',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof ButtonStory>;

const Template: ComponentStory<typeof ButtonStory> = args => <ButtonStory {...args} />;

export const basic = Template.bind({});
basic.storyName = '기본';
basic.args = {
  color: 'primary',
  size: 'md',
  variant: 'solid',
  disabled: false,
};

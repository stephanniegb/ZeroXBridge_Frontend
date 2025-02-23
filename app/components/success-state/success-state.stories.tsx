import type { Meta, StoryObj } from '@storybook/react';
import SuccessState from './success-state';
import AnimatedIcon from './animated-icon';

const meta: Meta<typeof SuccessState> = {
  title: 'Components/SuccessState',
  component: SuccessState,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SuccessState>;

export const SwapSuccess: Story = {
  args: {
    message: 'You have successfully SWAPPED 0.00034 ETH to 5.79 SOL',
    icon: <AnimatedIcon iconType='swap' />,
  },
};

export const ClaimSuccess: Story = {
  args: {
    message: 'You have successfully CLAIMED your xZB tokens',
    icon: <AnimatedIcon iconType='claim' />,
  },
};

export const LockSuccess: Story = {
  args: {
    message: 'You have successfully LOCKED $200 xZB Tokens.',
    icon: <AnimatedIcon iconType='lock' />,
  },
};

export const BurnSuccess: Story = {
  args: {
    message: 'You have successfully BURNT $200 xZB Tokens.',
    icon: <AnimatedIcon iconType='burn' />,
  },
};
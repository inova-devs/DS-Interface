import React from "react";

import { Button, LoadingDots } from "@inovadevs-org/ui";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Ui/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "subtle", "ghost", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "default", "lg", "xl"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => <Button {...args} />,
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => <Button {...args} />,
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
  },
  render: (args) => <Button {...args} />,
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: (args) => <Button {...args} />,
};

export const Link: Story = {
  args: {
    variant: "link",
  },
  render: (args) => <Button {...args} />,
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      Button
      <span key="icon" className="ml-2">
        👍
      </span>
    </Button>
  ),
};

export const WithLoader: Story = {
  args: {
    children: <LoadingDots />,
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

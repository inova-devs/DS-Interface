import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Avatar",
  component: Avatar,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    asChild: {
      control: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    layout: "centered",
  },
  subcomponents: {
    AvatarFallback,
    AvatarImage,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>JS</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {};

import React from "react";

import { Separator } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
  },
  args: {
    orientation: "horizontal",
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "w-[180px]",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
  className: "h-[180px]",
};

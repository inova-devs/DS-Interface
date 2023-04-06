import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, LoadingDots } from "@acme/core";

export default {
  title: "Ui/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "destructive",
          "outline",
          "subtle",
          "ghost",
          "link",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["lg", "default", "sm"],
      },
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
  parameters: {
    layout: "centered",
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: "subtle",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: [
    "Button",
    <span key="icon" className="ml-2">
      👍
    </span>,
  ],
};

export const WithLoader = Template.bind({});
WithLoader.args = {
  children: <LoadingDots />,
};
WithLoader.argTypes = {
  children: {
    control: {
      disable: true,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

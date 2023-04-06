import React from "react";
import { GrItalic } from "react-icons/gr";

import { Toggle } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "outline"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "default", "lg"],
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "default",
    size: "default",
    ariaLabel: "Toggle italic",
  },
  subcomponents: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <>
      <GrItalic className=" h-4 w-4" />
    </>,
  ],
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: [
    <>
      <GrItalic className="h-4 w-4" />
    </>,
  ],
};

export const WithText = Template.bind({});
WithText.args = {
  children: [
    <>
      <GrItalic className="mr-2 h-4 w-4" />
      Italic
    </>,
  ],
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: [
    <>
      <GrItalic className="h-4 w-4" />
    </>,
  ],
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: [
    <>
      <GrItalic className="h-4 w-4" />
    </>,
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: [
    <>
      <GrItalic className="h-4 w-4" />
    </>,
  ],
};

import React from "react";

import { Button, Label, Textarea } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Textarea",
  component: Textarea,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    placeholder: "Placeholder",
    className: "w-[400px]",
    disabled: false,
  },
  subcomponents: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "message",
};
WithLabel.decorators = [
  (Story) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Story />
    </div>
  ),
];

export const WithText = Template.bind({});
WithText.args = {
  id: "message",
  defaultValue: "Hello world!",
};
WithText.decorators = [
  (Story) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your Message</Label>
      <Story />
      <p className="text-sm text-slate-500">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
];

export const WithButton = Template.bind({});
WithButton.args = {
  id: "message",
  defaultValue: "Hello world!",
};

WithButton.decorators = [
  (Story) => (
    <div className="grid w-full gap-2">
      <Story />
      <Button>Send</Button>
    </div>
  ),
];

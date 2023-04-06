import React from "react";

import { Checkbox, Label } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Checkbox",
  component: Checkbox,
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
  subcomponents: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "terms",
};
WithLabel.decorators = [
  (Story) => (
    <div className="flex items-center space-x-2">
      <Story />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
];

export const WithText = Template.bind({});
WithText.args = {
  id: "terms",
};
WithText.decorators = [
  (Story) => (
    <div className="items-top flex space-x-2">
      <Story />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
];

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.decorators = [
  (Story) => (
    <div className="flex items-center space-x-2">
      <Story />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
];

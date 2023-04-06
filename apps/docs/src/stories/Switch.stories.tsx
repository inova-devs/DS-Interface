import React from "react";

import { Label, Switch } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Switch",
  component: Switch,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;
export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  id: "airplane-mode",
};
WithText.decorators = [
  (Story) => (
    <div className="flex items-center space-x-2">
      <Story />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
];

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

import React from "react";

import { Checkbox, Label } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Accept terms and conditions",
};

export const WithCheckbox = Template.bind({});
WithCheckbox.args = {
  children: "Accept terms and conditions",
  htmlFor: "terms",
};

WithCheckbox.decorators = [
  (Story) => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Story />
      </div>
    </div>
  ),
];

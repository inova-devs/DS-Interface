import React from "react";

import { Button, Input, Label } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Input",
  component: Input,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "Text",
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  type: "email",
  placeholder: "email",
  id: "email",
};
WithLabel.decorators = [
  (Story) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Story />
    </div>
  ),
];

export const WithText = Template.bind({});
WithText.args = {
  type: "email",
  placeholder: "email",
  id: "email",
};
WithText.decorators = [
  (Story) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Story />
      <p className="text-sm text-slate-500">Enter your email address.</p>
    </div>
  ),
];

export const WithError = Template.bind({});
WithError.args = {
  type: "email",
  placeholder: "email",
  id: "email",
};
WithError.decorators = [
  (Story) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Story />
      <p className="text-sm text-red-500">Email is required.</p>
    </div>
  ),
];

export const WithButton = Template.bind({});
WithButton.args = {
  type: "email",
  placeholder: "email",
  id: "email",
};

WithButton.decorators = [
  (Story) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Story />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
];

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Password",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "Email",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "Number",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  placeholder: "Search",
};

export const Url = Template.bind({});
Url.args = {
  type: "url",
  placeholder: "Url",
};

export const Tel = Template.bind({});
Tel.args = {
  type: "tel",
  placeholder: "Tel",
};

export const Date = Template.bind({});
Date.args = {
  type: "date",
  placeholder: "Date",
};

export const Time = Template.bind({});
Time.args = {
  type: "time",
  placeholder: "Time",
};

export const Month = Template.bind({});
Month.args = {
  type: "month",
  placeholder: "Month",
};

export const Week = Template.bind({});
Week.args = {
  type: "week",
  placeholder: "Week",
};

export const DatetimeLocal = Template.bind({});
DatetimeLocal.args = {
  type: "datetime-local",
  placeholder: "Datetime Local",
};

export const Color = Template.bind({});
Color.args = {
  type: "color",
  placeholder: "Color",
};

export const Range = Template.bind({});
Range.args = {
  type: "range",
  placeholder: "Range",
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
  placeholder: "Checkbox",
};

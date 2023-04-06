import Image from "next/image";
import React from "react";

import { AspectRatio } from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/AspectRatio",
  component: AspectRatio,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof AspectRatio>;

const Template: ComponentStory<typeof AspectRatio> = (args) => (
  <div className="w-[450px]">
    <AspectRatio {...args}>
      <Image
        src="/Landscape-Color.jpg"
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover"
        fill
      />
    </AspectRatio>
  </div>
);

export const Format_16_9 = Template.bind({});
Format_16_9.args = {
  ratio: 16 / 9,
};

export const Format_4_3 = Template.bind({});
Format_4_3.args = {
  ratio: 4 / 3,
};

export const Format_1_1 = Template.bind({});
Format_1_1.args = {
  ratio: 1,
};

export const Format_3_4 = Template.bind({});
Format_3_4.args = {
  ratio: 3 / 4,
};

export const Format_9_16 = Template.bind({});
Format_9_16.args = {
  ratio: 9 / 16,
};

export const Format_3_2 = Template.bind({});
Format_3_2.args = {
  ratio: 3 / 2,
};

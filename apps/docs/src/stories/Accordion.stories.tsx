import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["single", "multiple"],
      },
    },
  },
  args: {},
  subcomponents: {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Accordion>;

// eslint-disable-next-line
const Template: ComponentStory<typeof Accordion> = (args: any) => (
  <Accordion {...args} className="w-[450px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other components
        aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. Its animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  collapsible: true,
  type: "single",
};

export const Multiple = Template.bind({});
Multiple.args = {
  collapsible: true,
  //eslint-disable-next-line
  // @ts-ignore
  type: "multiple",
};

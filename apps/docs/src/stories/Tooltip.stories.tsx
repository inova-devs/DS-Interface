import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  argTypes: {
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
    delayDuration: {
      control: {
        type: "slider",
        min: 0,
        max: 2000,
        step: 100,
      },
    },
  },
  args: {
    children: [
      <>
        <span>Hover me</span>
      </>,
    ],
    content: "Tooltip content",
    delayDuration: 500,
  },
  subcomponents: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <TooltipProvider {...args}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" className="w-10 rounded-full p-0">
          <AiOutlinePlusCircle className="h-4 w-4" />
          <span className="sr-only">Add</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const Default = Template.bind({});
Default.args = {};

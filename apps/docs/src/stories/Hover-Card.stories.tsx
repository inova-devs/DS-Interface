import React from "react";
import { HiCalendar } from "react-icons/hi";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@inovadevs-org/ui";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/HoverCard",
  component: HoverCard,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  subcomponents: {
    HoverCardTrigger,
    HoverCardContent,
  },
} as ComponentMeta<typeof HoverCard>;

const Template: ComponentStory<typeof HoverCard> = (args) => (
  <HoverCard {...args}>
    <HoverCardTrigger asChild>
      <Button variant="link">@nextjs</Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <HiCalendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export const Default = Template.bind({});

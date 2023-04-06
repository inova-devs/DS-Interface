import * as React from "react";

import { cn } from "@inovadevs-org/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-default flex flex-col rounded-md p-1 sm:flex-row sm:items-center sm:justify-center",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-slate-12 transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-sky-10 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-12-dark dark:data-[state=active]:bg-sky-10-dark dark:data-[state=active]:text-black",
      className
    )}
    {...props}
    ref={ref}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn("mt-2 rounded-md p-3", className)}
    {...props}
    ref={ref}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

/*
Usage:

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p className="text-sm text-slate-500 dark:text-slate-400">
      Make changes to your account here. Click save when you&apos;re done.
    </p>
  </TabsContent>
  <TabsContent value="password">
    <p className="text-sm text-slate-500 dark:text-slate-400">
      Change your password here. After saving, you&apos;ll be logged out.
    </p>
  </TabsContent>
</Tabs>

*/

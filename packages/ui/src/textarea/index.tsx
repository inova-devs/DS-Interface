import * as React from "react";

import { cn } from "@inovadevs-org/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-default flex h-20 w-full  rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

/*
Usage:

Defaul:
<Textarea placeholder="Type your message here." />

Disabled:
<Textarea placeholder="Type your message here." disabled />

With Label:
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>

With Text and Label
<div className="grid w-full gap-1.5">
  <Label htmlFor="message-2">Your Message</Label>
  <Textarea placeholder="Type your message here." id="message-2" />
  <p className="text-sm text-slate-500">
    Your message will be copied to the support team.
  </p>
</div>

With Button
<div className="grid w-full gap-2">
  <Textarea placeholder="Type your message here." />
  <Button>Send message</Button>
</div>
*/

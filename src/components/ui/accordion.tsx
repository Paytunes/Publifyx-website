import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/* CSS-only accordion using <details>/<summary>.
   Same exports as the old Radix version — drop-in replacement. */

interface AccordionProps {
  type?: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn("", className)}>
      {children}
    </div>
  ),
)
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  value?: string
  className?: string
  children: React.ReactNode
}

const AccordionItem = React.forwardRef<HTMLDetailsElement, AccordionItemProps>(
  ({ className, value: _value, ...props }, ref) => (
    <details
      ref={ref}
      className={cn("border-b group", className)}
      {...props}
    />
  ),
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
  children: React.ReactNode
}

const AccordionTrigger = React.forwardRef<HTMLElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <summary
      ref={ref as React.Ref<HTMLElement>}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer list-none [&::-webkit-details-marker]:hidden",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
    </summary>
  ),
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className="overflow-hidden text-sm" {...props}>
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  ),
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

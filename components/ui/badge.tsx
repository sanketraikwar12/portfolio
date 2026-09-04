import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary/10 text-primary backdrop-blur-md",
        secondary:
          "border-border/60 bg-card/60 text-muted-foreground backdrop-blur-md",
        outline: "border-border/60 text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({className, variant, ...props}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({variant}), className)} {...props} />
  );
}

export {Badge, badgeVariants};

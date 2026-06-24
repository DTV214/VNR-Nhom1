import * as React from "react";

import { cn } from "@/lib/utils";

export const GlitchVaultCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "glitch-vault-card relative isolate overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));

GlitchVaultCard.displayName = "GlitchVaultCard";

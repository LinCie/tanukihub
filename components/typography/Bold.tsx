// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
}

export default function Bold({ children, className, ...props }: Props) {
  return (
    <span
      className={cn(
        // Base styles
        "font-bold",

        // Custom clasname
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

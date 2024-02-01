// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
}

export default function Japanese({ children, className, ...props }: Props) {
  return (
    <span
      className={cn(
        // Base styles
        "font-zen",

        // Custom classname
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

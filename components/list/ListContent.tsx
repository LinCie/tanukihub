// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"li"> {
  children?: ReactNode;
}

export default function ListContent({ children, className, ...props }: Props) {
  return (
    <li
      className={cn(
        // Base styles
        "list-item",

        // Custom classname
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}

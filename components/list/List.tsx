// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"ul"> {
  children?: ReactNode;
  type: "disc" | "decimal";
  position: "inside" | "outside";
}

export default function List({
  children,
  type,
  position,
  className,
  ...props
}: Props) {
  return (
    <ul
      className={cn(
        // Base styles
        className,

        // List Type bariant
        type === "disc" ? "list-disc" : "list-decimal",

        // List Position bariant
        position === "inside" ? "list-inside" : "list-outside",
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

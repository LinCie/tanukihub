// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export default function BottomNavigation({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      id="bottom-navigation"
      className={cn(
        // Base styles
        "my-10 flex w-full select-none items-center justify-between",

        // Custom classname
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

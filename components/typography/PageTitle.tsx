// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"h1"> {
  children?: ReactNode;
}

export default function PageTitle({ className, children, ...props }: Props) {
  return (
    <h1
      id="page-title"
      data-test="page-title"
      aria-label="Page Title"
      className={cn(
        // Base styles
        "mb-3 text-xl font-bold text-main-title-dark dark:text-main-title-light sm:mb-4 sm:text-2xl",

        // Custom classname
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

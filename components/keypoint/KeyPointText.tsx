// React imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

const KeyPointText = ({ children, className, ...props }: Props) => {
  return (
    <p
      className={cn(
        // Base styles
        "mb-1 text-sm text-main-dark last-of-type:mb-0 dark:text-main-light sm:mb-2 sm:text-base last-of-type:sm:mb-0",
        // className props
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default KeyPointText;

import { ReactNode, ComponentPropsWithoutRef } from "react";

import { Component1Icon } from "@radix-ui/react-icons";

interface Props extends ComponentPropsWithoutRef<"h2"> {
  children?: ReactNode;
}

export default function SectionTitle({ children, className, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <h2
      className={`mb-2 flex items-center gap-1 text-base font-bold text-main-title-dark dark:text-main-title-light sm:mb-3 sm:gap-2 sm:text-lg ${customClass}`.trim()}
      {...props}
    >
      <div>
        <Component1Icon className="h-4 w-4 text-main-title-dark dark:text-main-title-light sm:h-5 sm:w-5" />
      </div>
      <div>{children}</div>
    </h2>
  );
}

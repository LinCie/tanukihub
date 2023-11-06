import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"h1"> {
  children?: ReactNode;
}

export default function PageTitle({ className, children, ...props }: Props) {
  return (
    <h1
      aria-label="Page Title"
      className={`mb-4 text-xl font-bold text-black dark:text-white sm:mb-6 sm:text-2xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h1>
  );
}

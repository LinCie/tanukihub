import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

export default function Paragraph({ className, children, ...props }: Props) {
  return (
    <p
      className={`mb-2 text-sm text-black dark:text-white sm:mb-3 sm:text-base ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

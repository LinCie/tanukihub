import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

export default function Paragraph({ className, children, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <p
      className={`text-main-dark dark:text-main-light mb-2 indent-3 text-sm last-of-type:mb-4 sm:mb-3 sm:indent-5 sm:text-base last-of-type:sm:mb-5 ${customClass}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

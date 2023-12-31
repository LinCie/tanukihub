import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

export default function Paragraph({ className, children, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <p
      className={`mb-1 indent-3 text-sm text-main-dark last-of-type:mb-2 dark:text-main-light sm:mb-2 sm:indent-5 sm:text-base last-of-type:sm:mb-3 ${customClass}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

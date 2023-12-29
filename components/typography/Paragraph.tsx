import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

export default function Paragraph({ className, children, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <p
      className={`mb-2 indent-3 text-sm text-black last-of-type:mb-4 dark:text-white sm:mb-3 sm:indent-5 sm:text-base last-of-type:sm:mb-5 ${customClass}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

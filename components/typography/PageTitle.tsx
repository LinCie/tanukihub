import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"h1"> {
  children?: ReactNode;
}

export default function PageTitle({ className, children, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <h1
      id="page-title"
      data-test="page-title"
      aria-label="Page Title"
      className={`mb-3 text-xl font-bold text-main-title-dark dark:text-main-title-light sm:mb-4 sm:text-2xl ${customClass}`.trim()}
      {...props}
    >
      {children}
    </h1>
  );
}

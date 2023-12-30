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
      className={`text-main-title-dark dark:text-main-title-light mb-4 text-xl font-bold sm:mb-5 sm:text-2xl ${customClass}`.trim()}
      {...props}
    >
      {children}
    </h1>
  );
}

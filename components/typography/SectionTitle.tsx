import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"h2"> {
  children?: ReactNode;
}

export default function SectionTitle({ children, className, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <h2
      className={`text-main-title-dark dark:text-main-title-light mb-3 text-base font-bold sm:mb-4 sm:text-lg ${customClass}`.trim()}
      {...props}
    >
      {children}
    </h2>
  );
}

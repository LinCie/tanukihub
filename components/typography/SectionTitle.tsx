import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"h2"> {
  children?: ReactNode;
}

export default function SectionTitle({ children, className, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <h2
      className={`mb-2 text-base font-bold text-black dark:text-white sm:mb-3 sm:text-xl ${customClass}`.trim()}
      {...props}
    >
      {children}
    </h2>
  );
}

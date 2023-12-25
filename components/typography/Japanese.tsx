import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
}

export default function Japanese({ children, className, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <span className={`font-zen whitespace-nowrap ${customClass}`.trim()} {...props}>
      {children}
    </span>
  );
}

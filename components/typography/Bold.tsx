import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
}

export default function Bold({ children, className, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <span className={`font-bold ${customClass}`.trim()} {...props}>
      {children}
    </span>
  );
}

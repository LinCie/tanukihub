import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"span"> {
  children?: ReactNode;
}

export default function Bold({ children, className, ...props }: Props) {
  return (
    <span className={`font-bold ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

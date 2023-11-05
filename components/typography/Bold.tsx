import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
}

export default function Bold({ children, className, ...props }: Props) {
  return (
    <span className={`font-bold ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

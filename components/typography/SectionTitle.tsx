import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className, ...props }: Props) {
  return (
    <h2
      className={`mb-2 text-base font-bold text-black dark:text-white sm:mb-3 sm:text-xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h2>
  );
}

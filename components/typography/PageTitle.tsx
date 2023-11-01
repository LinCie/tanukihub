import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children?: ReactNode;
}

export default function PageTitle({ className, children, ...props }: Props) {
  return (
    <h1
      aria-label="Page Title"
      className={`mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h1>
  );
}

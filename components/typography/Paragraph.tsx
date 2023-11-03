import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: ReactNode;
}

export default function Paragraph({ className, children, ...props }: Props) {
  return (
    <p
      className={`mb-2 text-sm text-black dark:text-white sm:text-base ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

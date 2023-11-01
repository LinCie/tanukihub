import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: ReactNode;
}

export default function Paragraph({ className, children, ...props }: Props) {
  return (
    <p
      className={`pb-2 text-justify indent-5 text-sm text-black dark:text-white sm:text-base sm:indent-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

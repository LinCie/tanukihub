import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"li"> {
  children?: ReactNode;
}

export default function ListContent({ children, className, ...props }: Props) {
  return (
    <li className={`${className}`.trim()} {...props}>
      {children}
    </li>
  );
}

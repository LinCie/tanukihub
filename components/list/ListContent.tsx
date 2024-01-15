import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"li"> {
  children?: ReactNode;
}

export default function ListContent({ children, className, ...props }: Props) {
  const customClass = className ? className : "";

  return (
    <li className={`list-item ${customClass}`.trim()} {...props}>
      {children}
    </li>
  );
}

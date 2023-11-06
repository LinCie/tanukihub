import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"ul"> {
  children?: ReactNode;
  type: "disc" | "decimal" | "none";
  position: "inside" | "outside";
}

export default function List({
  children,
  type,
  position,
  className,
  ...props
}: Props) {
  return (
    <ul className={`list-${type} list-${position}`} {...props}>
      {children}
    </ul>
  );
}

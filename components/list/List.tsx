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
  const customClass = className ? className : "";

  return (
    <ul
      className={`list-${type} list-${position} ${customClass}`.trim()}
      {...props}
    >
      {children}
    </ul>
  );
}

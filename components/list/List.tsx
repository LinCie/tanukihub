import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"ul"> {
  children?: ReactNode;
  type: "disc" | "decimal";
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

  const listType = type === "disc" ? "list-disc" : "list-decimal";
  const listPosition = position === "inside" ? "list-inside" : "list-outside";

  return (
    <ul
      className={`${listType} ${listPosition} ${customClass}`.trim()}
      {...props}
    >
      {children}
    </ul>
  );
}

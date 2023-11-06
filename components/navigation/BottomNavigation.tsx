import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export default function BottomNavigation({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      id="bottom-navigation"
      className={`my-10 flex w-full select-none items-center justify-between ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

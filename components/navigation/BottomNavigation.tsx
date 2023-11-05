import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
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

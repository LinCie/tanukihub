// React Imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// NextJS Imports
import Link, { LinkProps } from "next/link";

// Radix UI Imports
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

interface Props
  extends LinkProps,
    Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps> {
  children?: ReactNode;
  right?: boolean;
}

export default function BottomNavigationLink({
  children,
  className,
  right,
  href,
  ...props
}: Props) {
  const customClass = className ? className : "";

  return (
    <Link
      href={href}
      id={right ? "navigation-next" : "navigation-previous"}
      className={`flex items-center justify-between gap-2 text-xs font-medium text-main-identity hover:underline dark:text-main-title-light sm:text-sm ${
        right ? "flex-row" : "flex-row-reverse"
      } ${customClass}`.trim()}
      {...props}
    >
      <div className="max-w-[150px] text-clip sm:max-w-[500px]">{children}</div>
      {right ? (
        <ArrowRightIcon data-test="right-arrow" className="size-5 md:size-6" />
      ) : (
        <ArrowLeftIcon data-test="left-arrow" className="size-5 md:size-6" />
      )}
    </Link>
  );
}

// React Imports
import { ReactNode, ComponentPropsWithoutRef } from "react";

// NextJS Imports
import Link, { LinkProps } from "next/link";

// Radix UI Imports
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

// Utility imports
import { cn } from "@/lib/utils";

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
  return (
    <Link
      href={href}
      id={right ? "navigation-next" : "navigation-previous"}
      className={cn(
        // base styles
        "flex items-center justify-between gap-2 text-xs font-medium text-main-identity hover:underline dark:text-main-title-light sm:text-sm",

        // Link Position state
        right ? "flex-row" : "flex-row-reverse",

        // Custom classname
        className,
      )}
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

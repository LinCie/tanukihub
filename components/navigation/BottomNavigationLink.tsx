// React Imports
import { ReactNode } from "react";

// NextJS Imports
import Link, { LinkProps } from "next/link";

// Radix UI Imports
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

interface Props extends LinkProps {
  children?: ReactNode;
  className?: string;
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
      className={`flex items-center justify-between gap-2 text-xs font-medium text-[#CC3E3E] hover:underline dark:text-white sm:text-sm ${
        right ? "flex-row" : "flex-row-reverse"
      } ${className}`.trim()}
      {...props}
    >
      <div className="max-w-[150px] overflow-clip sm:max-w-[500px]">
        {children}
      </div>
      {right ? (
        <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <ArrowLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </Link>
  );
}

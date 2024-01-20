import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export { cn };

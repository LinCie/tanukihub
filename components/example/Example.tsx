import { ComponentPropsWithoutRef } from "react";

import { InfoCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

import ExampleType from "@/components/example/ExampleType";
import List from "@/components/list/List";
import ExampleContent from "@/components/example/ExampleContent";

interface Props extends ComponentPropsWithoutRef<"div"> {
  examples: ExampleType[];
}

export default function Example({ examples, className, ...props }: Props) {
  return (
    <div className={cn("mb-2 sm:mb-3", className)} {...props}>
      <div
        className={cn(
          // Base styles
          "mb-2 flex items-center gap-1 border-b-2 pb-1 text-sm font-bold",

          // Light mode classes
          "border-main-identity/75 text-main-title-dark",

          // Dark mode classes
          "dark:border-main-title-light/75 dark:text-main-title-light",

          // Small screen breakpoint
          "sm:mb-3 sm:gap-2 sm:text-base",
        )}
      >
        <div>
          <InfoCircledIcon
            className={cn(
              // Base styles
              "size-4 text-main-title-dark dark:text-main-title-light sm:size-5",
            )}
          />
        </div>
        <h3>Examples</h3>
      </div>
      <List type="decimal" position="outside" className="mx-7">
        {examples?.map((example) => (
          <ExampleContent key={example.kana} example={example} />
        ))}
      </List>
    </div>
  );
}

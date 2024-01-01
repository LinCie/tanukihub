import { ComponentPropsWithoutRef } from "react";
import ExampleType from "@/components/example/ExampleType";
import List from "@/components//list/List";
import ExampleContent from "./ExampleContent";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface Props extends ComponentPropsWithoutRef<"div"> {
  examples: ExampleType[];
}

export default function Example({ examples, className, ...props }: Props) {
  const customClass = className ? className : "";
  return (
    <div className={`mb-2 sm:mb-3 ${customClass}`.trim()} {...props}>
      <h3 className="mb-2 flex items-center gap-1 text-sm font-bold text-main-title-dark dark:text-main-title-light sm:mb-3 sm:gap-2 sm:text-base">
        <div>
          <InfoCircledIcon className="h-4 w-4 text-main-title-dark dark:text-main-title-light sm:h-5 sm:w-5" />
        </div>
        <div>Examples</div>
      </h3>
      <List type="decimal" position="outside" className="mx-7">
        {examples?.map((example) => (
          <ExampleContent key={example.kana} example={example} />
        ))}
      </List>
    </div>
  );
}

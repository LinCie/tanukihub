import { ComponentPropsWithoutRef } from "react";
import ExampleType from "@/components/example/ExampleType";
import List from "@/components//list/List";
import ExampleContent from "./ExampleContent";

interface Props extends ComponentPropsWithoutRef<"div"> {
  examples: ExampleType[];
}

export default function Example({ examples, className, ...props }: Props) {
  const customClass = className ? className : "";
  return (
    <div className={`mb-2 ${customClass}`.trim()} {...props}>
      <h3 className="mb-2 text-sm font-bold text-black dark:text-white sm:text-base">
        Examples
      </h3>
      <List type="decimal" position="outside" className="mx-7">
        {examples?.map((example) => (
          <ExampleContent key={example.kana} example={example} />
        ))}
      </List>
    </div>
  );
}

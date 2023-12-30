import { ComponentPropsWithoutRef } from "react";
import List from "@/components/list/List";
import VocabularyType from "@/components/vocabulary/VocabularyType";
import VocabularyContent from "@/components/vocabulary/VocabularyContent";

import { InfoCircledIcon } from "@radix-ui/react-icons";

interface Props extends ComponentPropsWithoutRef<"div"> {
  vocabularies: VocabularyType[];
}

export default function Vocabulary({
  vocabularies,
  className,
  ...props
}: Props) {
  const customClass = className ? className : "";

  return (
    <div className={`mb-2 ${customClass}`.trim()} {...props}>
      <h3 className="text-main-title-dark dark:text-main-title-light mb-2 flex items-center gap-1 text-sm font-bold sm:gap-2 sm:text-base">
        <div>
          <InfoCircledIcon className="text-main-title-dark dark:text-main-title-light h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <div>Vocabulary</div>
      </h3>
      <div className="mb-2 text-sm sm:text-base">
        Note: you can click on the kanji to get the full meanings
      </div>
      <List type="decimal" position="outside" className="mx-7">
        {vocabularies?.map((vocabulary) => (
          <VocabularyContent key={vocabulary.meaning} vocabulary={vocabulary} />
        ))}
      </List>
    </div>
  );
}

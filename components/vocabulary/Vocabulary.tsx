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
    <div className={`mb-2 sm:mb-3 ${customClass}`.trim()} {...props}>
      <h3 className="mb-2 flex items-center gap-1 text-sm font-bold text-main-title-dark dark:text-main-title-light sm:mb-3 sm:gap-2 sm:text-base">
        <div>
          <InfoCircledIcon className="size-4 text-main-title-dark dark:text-main-title-light sm:size-5" />
        </div>
        <div>Vocabulary</div>
      </h3>
      <div className="mb-2 text-sm sm:mb-3 sm:text-base">
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

import { ComponentPropsWithoutRef } from "react";
import List from "@/components/list/List";
import VocabularyType from "@/components/vocabulary/VocabularyType";
import VocabularyContent from "./VocabularyContent";

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
      <h3 className="mb-2 text-sm font-bold text-black dark:text-white sm:text-base">
        Vocabulary
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

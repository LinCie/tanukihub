// React imports
import { ComponentPropsWithoutRef } from "react";

// Component imports
import List from "@/components/list/List";
import VocabularyType from "@/components/vocabulary/VocabularyType";
import VocabularyContent from "@/components/vocabulary/VocabularyContent";

// Radix imports
import { InfoCircledIcon } from "@radix-ui/react-icons";

// Utility imports
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"div"> {
  vocabularies: VocabularyType[];
}

export default function Vocabulary({
  vocabularies,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        // base styles
        "mb-2 sm:mb-3",

        // Custom classname
        className,
      )}
      {...props}
    >
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
        <h3>Vocabulary</h3>
      </div>
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

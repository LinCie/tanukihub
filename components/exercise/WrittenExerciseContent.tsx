// React imports
import { ComponentPropsWithoutRef } from "react";

// Utility imports
import { cn } from "@/lib/utils";

// Component imports
import WrittenExerciseType from "@/components/exercise/WrittenExerciseType";
import ListContent from "@/components/list/ListContent";
import Japanese from "@/components/typography/Japanese";

interface Props extends ComponentPropsWithoutRef<"li"> {
  revealed: boolean;
  exercise: WrittenExerciseType;
}

export default function WrittenExerciseContent({
  exercise,
  revealed,
  ...props
}: Props) {
  return (
    <ListContent
      className="mb-2 text-sm last-of-type:mb-3 sm:mb-3 sm:text-base last-of-type:sm:mb-4"
      {...props}
    >
      <div
        className={cn(
          // Base styles
          "flex flex-col gap-0 border-b-2 border-none border-main-identity dark:border-main-title-light",
          // Small screen breakpoint
          "sm:flex-row sm:items-center sm:gap-2 sm:border-solid sm:p-1",
        )}
      >
        <div className="sm:flex-1">{exercise.question}</div>
        <div className="hidden sm:block">=</div>
        <div className="flex items-center sm:flex-1 sm:gap-2">
          <div
            data-state={revealed ? "revealed" : "hidden"}
            className={cn(
              // Base styles
              "flex-1 border-b-2 border-dotted p-1 text-center transition-all",
              // Light mode
              "border-main-identity text-main-dark",
              // Dark mode
              "dark:border-main-title-light dark:text-main-light",
              // Conditional revealed styles
              revealed
                ? // When the answer is revealed
                  "select-text text-opacity-100 dark:text-opacity-100"
                : // When the answer is hidden
                  "select-none text-opacity-0 dark:text-opacity-0",
            )}
          >
            <Japanese>{exercise.answer}</Japanese>
          </div>
        </div>
      </div>
    </ListContent>
  );
}

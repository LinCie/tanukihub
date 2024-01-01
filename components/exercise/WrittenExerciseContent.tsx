import WrittenExerciseType from "@/components/exercise/WrittenExerciseType";
import ListContent from "@/components/list/ListContent";
import Japanese from "@/components/typography/Japanese";

interface Props {
  revealed: boolean;
  exercise: WrittenExerciseType;
}

export default function WrittenExerciseContent({ exercise, revealed }: Props) {
  return (
    <ListContent className="mb-2 text-sm last-of-type:mb-3 sm:mb-3 sm:text-base last-of-type:sm:mb-4">
      <div className="flex flex-col gap-0 border-b-2 border-none border-main-identity dark:border-main-title-light sm:flex-row sm:items-center sm:gap-2 sm:border-solid sm:p-1">
        <div className="sm:flex-1">{exercise.question}</div>
        <div className="hidden sm:block">=</div>
        <div className="flex items-center sm:flex-1 sm:gap-2">
          <div
            data-state={revealed ? "revealed" : "hidden"}
            className="flex-1 border-b-2 border-dotted border-main-identity p-1 text-center text-main-dark transition-all data-[state=hidden]:select-none data-[state=revealed]:select-text data-[state=hidden]:text-opacity-0 data-[state=revealed]:text-opacity-100 dark:border-main-title-light dark:text-main-light data-[state=hidden]:dark:text-opacity-0 data-[state=revealed]:dark:text-opacity-100"
          >
            <Japanese>{exercise.answer}</Japanese>
          </div>
        </div>
      </div>
    </ListContent>
  );
}

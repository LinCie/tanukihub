import ExampleType from "@/components/example/ExampleType";
import ListContent from "@/components/list/ListContent";
import Japanese from "@/components/typography/Japanese";

interface Props {
  example: ExampleType;
}

export default function ExampleContent({ example }: Props) {
  return (
    <ListContent className="mb-1 text-sm last-of-type:mb-0 sm:text-base">
      <div className="flex flex-col">
        <div className="font-medium">
          <Japanese>{example.kana}</Japanese>
        </div>
        <div className="italic  text-main-dark/75 dark:text-main-light/75">
          {example.romaji}
        </div>
        <div className="mt-1 font-medium">{example.translation}</div>
      </div>
    </ListContent>
  );
}

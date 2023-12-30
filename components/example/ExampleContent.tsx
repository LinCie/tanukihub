import ExampleType from "@/components/example/ExampleType";
import ListContent from "@/components/list/ListContent";
import Japanese from "@/components/typography/Japanese";

interface Props {
  example: ExampleType;
}

export default function ExampleContent({ example }: Props) {
  return (
    <ListContent>
      <div className="mb-2 flex flex-col text-base sm:text-lg">
        <div className="font-medium">
          <Japanese>{example.kana}</Japanese>
        </div>
        <div className="text-main-dark/75 dark:text-main-light/75 text-sm italic sm:text-base">
          {example.romaji}
        </div>
        <div className="mt-2 font-medium">{example.translation}</div>
      </div>
    </ListContent>
  );
}
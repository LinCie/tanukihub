import VocabularyType from "@/components/vocabulary/VocabularyType";
import ListContent from "@/components/list/ListContent";
import DictionarySearch from "@/components/hover/DictionarySearch";
import Japanese from "@/components/typography/Japanese";

interface Props {
  vocabulary: VocabularyType;
}

export default function VocabularyContent({ vocabulary }: Props) {
  return (
    <ListContent>
      <div className="flex gap-2 text-lg">
        <div className="font-medium">
          <DictionarySearch
            searchFor={vocabulary.searchFor}
            english={vocabulary.english}
          >
            <Japanese>{vocabulary.kanji}</Japanese>
          </DictionarySearch>
        </div>
        <div>
          (<Japanese>{vocabulary.reading}</Japanese>)
        </div>
        <div>-</div>
        <div className="font-medium">{vocabulary.meaning}</div>
      </div>
    </ListContent>
  );
}

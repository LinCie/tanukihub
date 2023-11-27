import { KanjiCharacter, kanjidic } from "@/components/dictionaries/kanjidic";

// Kanji Hash Table

const kanjiHash = new Map<string, KanjiCharacter>();

kanjidic.characters.forEach((character) => {
  kanjiHash.set(character.literal, character);
});

export const getKanjiHash = () => kanjiHash;

import { Word, jmdict } from "@/services/dictionaries/jmdict"

// Word Hash Table

const wordHash = new Map<string, Word>();

jmdict.words.forEach((word) => {
  wordHash.set(word.id, word);
});

export const getWordHash = () => wordHash;

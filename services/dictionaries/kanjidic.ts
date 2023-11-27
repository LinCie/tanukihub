interface Codepoint {
  type: string;
  value: string;
}

interface Radical {
  type: string;
  value: number;
}

interface Misc {
  grade: number;
  strokeCounts: number[];
  variants: Codepoint[];
  frequency: number;
  radicalNames: string[];
  jlptLevel: number;
}

interface DictionaryReference {
  type: string;
  morohashi: any;
  value: string;
}

interface QueryCode {
  type: string;
  skipMisclassification: any;
  value: string;
}

export interface Readings {
  type: string;
  onType: any;
  status: any;
  value: string;
}

export interface Meanings {
  lang: string;
  value: string;
}

export interface ReadingMeaning {
  groups: {
    readings: Readings[];
    meanings: Meanings[];
  }[];
}

export interface KanjiCharacter {
  literal: string;
  codepoints: Codepoint[];
  radicals: Radical[];
  misc: Misc;
  dictionaryReferences: DictionaryReference[];
  queryCodes: QueryCode[];
  readingMeaning: ReadingMeaning;
  nanori: string[];
}

interface KanjiDictionary {
  version: string;
  languages: string[];
  dictDate: string;
  fileVersion: number;
  databaseVersion: string;
  characters: KanjiCharacter[];
}

export const kanjidic: KanjiDictionary = require("@/services/dictionaries/kanjidic.json");

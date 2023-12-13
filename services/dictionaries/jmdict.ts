interface Kanji {
  common: boolean;
  text: string;
  tags: string[];
}

interface Kana {
  common: boolean;
  text: string;
  tags: string[];
  appliesToKanji: string[];
}

interface Sense {
  partOfSpeech: string[];
  appliesToKanji: string[];
  appliesToKana: string[];
  related: string[][];
  antonym: string[];
  field: string[];
  dialect: string[];
  misc: string[];
  info: string[];
  languageSource: string[];
  gloss: { lang: string; gender: null; type: null; text: string }[];
}

export interface Word {
  id: string;
  kanji: Kanji[];
  kana: Kana[];
  sense: Sense[];
}

interface Tags {
  [tag: string]: string;
}

interface JMdictionary {
  version: string;
  languages: string[];
  commonOnly: boolean;
  dictDate: string;
  dictRevisions: string[];
  tags: Tags;
  words: Word[];
}

export const jmdict: JMdictionary = require("@/services/dictionaries/jmdict.json")
import { kanjidic } from "@/components/dictionaries/kanjidic";

// Create a Trie Node where the children is an object where the key is a letter or kana and the value is another Trie node.
// Each Node will have an array of kanji that represents the kanji that corresponds to the traversed node.

class TrieNode {
  children: { [key: string]: TrieNode };
  kanji: string[];

  constructor() {
    this.children = {};
    this.kanji = [];
  }
}

// A Trie object with insert and search function

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, kanji: string): void {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.kanji.push(kanji);
  }

  search(word: string): string[] | null {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return null;
      }

      node = node.children[char];
    }

    return node.kanji;
  }
}

const meaningTrie = new Trie();

kanjidic.characters.forEach((character) => {
  character.readingMeaning?.groups?.flatMap((group) => {
    group.meanings?.forEach((meaning) => {
      meaningTrie.insert(meaning.value, character.literal);
    });
  });
});

const kanaTrie = new Trie();

kanjidic.characters.forEach((character) => {
  character.readingMeaning?.groups?.flatMap((group) => {
    group.readings?.forEach((reading) => {
      kanaTrie.insert(reading.value, character.literal);
    });
  });
});

export const getMeaningTrie = () => meaningTrie;
export const getKanaTrie = () => kanaTrie;

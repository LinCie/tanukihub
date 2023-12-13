import { jmdict } from "@/services/dictionaries/jmdict";

// Create a Trie Node where the children is an object where the key is word's id and the value is another Trie node.
// Each Node will have an array of wordIds that represents the word that corresponds to the traversed node.

class TrieNode {
  children: { [key: string]: TrieNode };
  wordId: string[];

  constructor() {
    this.children = {};
    this.wordId = [];
  }
}

// A Trie object with insert and search function

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, wordId: string): void {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.wordId.push(wordId);
  }

  search(word: string): string[] | null {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return null;
      }

      node = node.children[char];
    }

    return node.wordId;
  }
}

const readingTrie = new Trie();

jmdict.words.forEach((word) => {
  word.kanji.forEach((kanji) => {
    readingTrie.insert(kanji.text, word.id);
  });
  word.kana.forEach((kana) => {
    readingTrie.insert(kana.text, word.id);
  });
});

const meaningTrie = new Trie();

jmdict.words.forEach((word) => {
  word.sense.forEach((sense) => {
    sense.gloss.forEach((gloss) => {
      meaningTrie.insert(gloss.text, word.id);
    });
  });
});

export const getReadingTrie = () => readingTrie;
export const getMeaningTrie = () => meaningTrie;

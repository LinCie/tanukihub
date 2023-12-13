import { NextResponse } from "next/server";

import { Word } from "@/services/dictionaries/jmdict";
import { getMeaningTrie, getReadingTrie } from "@/services/word/wordTrie";
import { getWordHash } from "@/services/word/wordHash";

class Words {
  words: Word[];

  constructor() {
    this.words = [];
  }

  push(word: Word): void {
    this.words.push(word);
  }

  get(endIndex: number): Word[] {
    return [...this.words].slice(0, endIndex);
  }
}

export async function GET(req: Request) {
  try {
    const requestUrl = new URL(req.url);
    const params = requestUrl.searchParams;

    const search: string | undefined = params.get("search")?.toLowerCase();

    // Returns a bad request error if user doesn't provide search parameter
    if (!search) {
      return NextResponse.json(
        { message: "Please provide 'search' parameter" },
        { status: 400 },
      );
    }

    const words = new Words();

    const language: string | undefined = params.get("lang")?.toLowerCase();

    // Do this if the user search by using english
    if (language === "en") {
      const meaningTrie = getMeaningTrie();
      const wordHash = getWordHash();

      // Meaning lookup based on the search parameter
      const searchResults = meaningTrie.search(search);

      // If the requested word is found, search for it.
      searchResults?.forEach((searchResult) => {
        const word = wordHash.get(searchResult);
        if (word) {
          words.push(word);
        }
      });

      // Do this if user search by using Japanese
    } else if (language === "jp") {
      const readingTrie = getReadingTrie();
      const wordHash = getWordHash();

      // Reading lookup based on the search parameter
      const searchResults = readingTrie.search(search);

      // If the requested word is found, search for it.
      searchResults?.forEach((searchResult) => {
        const word = wordHash.get(searchResult);
        if (word) {
          words.push(word);
        }
      });
    } else if (!language) {
      return NextResponse.json(
        { message: "Please provide 'lang' parameter" },
        { status: 400 },
      );

      // Do this if user's "lang" parameter is invalid
    } else {
      return NextResponse.json(
        { message: "Invalid 'lang' parameter" },
        { status: 400 },
      );
    }

    if (words) {
      return NextResponse.json({ words: words }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Word not found" }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 },
    );
  }
}

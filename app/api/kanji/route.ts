import { NextResponse } from "next/server";

import { KanjiCharacter } from "@/services/dictionaries/kanjidic";
import { getKanaTrie, getMeaningTrie } from "@/services/kanji/kanjiTrie";
import { getKanjiHash } from "@/services/kanji/kanjiHash";

class Characters {
  characters: KanjiCharacter[];

  constructor() {
    this.characters = [];
  }

  push(character: KanjiCharacter): void {
    this.characters.push(character);
  }

  get(endIndex: number): KanjiCharacter[] {
    return [...this.characters].slice(0, endIndex);
  }

  sort(): KanjiCharacter[] {
    return [...this.characters].sort(
      (a, b) => (a.misc?.frequency || 9999) - (b.misc?.frequency || 9999),
    );
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

    const characters = new Characters();

    const language: string | undefined = params.get("lang")?.toLowerCase();

    // Do this if the user search by using english
    if (language === "en") {
      const meaningTrie = getMeaningTrie();
      const kanjiHash = getKanjiHash();

      // Meaning lookup based on the search parameter
      const searchResults = meaningTrie.search(search);

      // If the requested kanji is found, search for it.
      searchResults?.forEach((searchResult) => {
        const kanji = kanjiHash.get(searchResult);
        if (kanji) {
          characters.push(kanji);
        }
      });

      // Do this if user search by using Japanese
    } else if (language === "jp") {
      const searchBy: string | undefined = params.get("by")?.toLowerCase();
      const kanjiHash = getKanjiHash();

      // Do this if the user search by using Kanji
      if (searchBy === "kanji") {
        // Search the requested kanji based on the search parameter
        const searchResult = kanjiHash.get(search);
        if (searchResult) {
          characters.push(searchResult);
        }

        // Do this if the user search by using Kana
      } else if (searchBy === "kana") {
        const kanaTrie = getKanaTrie();

        // Kana lookup based on the search parameter
        const searchResults = kanaTrie.search(search);

        // If the requested kanji is found, search for it.
        searchResults?.forEach((searchResult) => {
          const kanji = kanjiHash.get(searchResult);
          if (kanji) {
            characters.push(kanji);
          }
        });

        // Do this if user doesn't provide "by" parameter
      } else if (!searchBy) {
        return NextResponse.json(
          { message: "Please provide 'by' parameter" },
          { status: 400 },
        );

        // Do this if user's "by" parameter is invalid
      } else {
        return NextResponse.json(
          { message: "Invalid 'by' parameter" },
          { status: 400 },
        );
      }

      // Do this if user doesn't provide "lang" parameter
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

    if (characters) {
      return NextResponse.json(
        { characters: characters.sort() },
        { status: 200 },
      );
    } else {
      return NextResponse.json({ message: "Kanji not found" }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 },
    );
  }
}

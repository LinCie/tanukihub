import { KanjiCharacter, kanjidic } from "@/components/dictionaries/kanjidic";
import { NextResponse } from "next/server";
import { getKanaTrie, getMeaningTrie } from "@/services/kanji/kanjiTrie";
import { getKanjiHash } from "@/services/kanji/kanjiHash";

export async function GET(req: Request) {
  try {
    const requestUrl = new URL(req.url);
    const params = requestUrl.searchParams;

    const search: string | null = params.get("search");

    // Returns a bad request error if user doesn't provide search parameter
    if (!search) {
      return NextResponse.json(
        { message: "Please provide 'search' parameter" },
        { status: 400 },
      );
    }

    const characters: KanjiCharacter[] = [];

    const language: string | null = params.get("lang");

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
      const searchBy: string | null = params.get("by");
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

    return NextResponse.json({ characters: characters }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 },
    );
  }
}

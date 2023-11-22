import { KanjiCharacter, kanjidic } from "@/components/dictionaries/kanjidic";
import { NextResponse } from "next/server";

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
      // The search result
      const searchResult: KanjiCharacter[] = [];

      // Find by Similarity
      const sortSimilar = kanjidic.characters
        // Filter by finding characters that has the same or contains the search result in its meanings
        .filter(
          (character) =>
            character.readingMeaning?.groups?.some(
              (group) =>
                group.meanings?.some(
                  (m) => m.value.toLowerCase() === search.toLowerCase(),
                ),
            ),
        )
        // Sort the search result in ascending order by order of frequency
        .sort(
          (a, b) => (a.misc?.frequency || 9999) - (b.misc?.frequency || 9999),
        );

      // If sortSimilar found similarity, push into characters array
      if (sortSimilar.length > 0) {
        sortSimilar.forEach((character) => searchResult.push(character));
      }

      // Find if it includes the searched meaning
      const sortIncludes = kanjidic.characters
        // Filter by finding characters that has the same or contains the search result in its meanings
        .filter(
          (character) =>
            character.readingMeaning?.groups?.some(
              (group) =>
                group.meanings?.some((m) =>
                  m.value.toLowerCase().includes(search.toLowerCase()),
                ),
            ),
        )
        // Sort the search result in ascending order by order of frequency
        .sort(
          (a, b) => (a.misc?.frequency || 9999) - (b.misc?.frequency || 9999),
        );

      // If sortIncludes found kanji that includes the meaning
      if (sortIncludes.length > 0) {
        // Push if searchResult does not contain the character, dont push otherwise
        sortIncludes.forEach((character) => {
          if (!searchResult.includes(character)) {
            searchResult.push(character);
          }
        });
      }

      // Slice so it contains 5 items only, and then push each character into characters array
      if (searchResult.length > 0) {
        searchResult
          .slice(0, 5)
          .forEach((character) => characters.push(character));
      }

      // Do this if user search by using Japanese
    } else if (language === "jp") {
      const searchBy: string | null = params.get("by");
      // Do this if the user search by using Kanji
      if (searchBy === "kanji") {
        const searchResult = kanjidic.characters.find(
          (character) => character.literal === search,
        );

        if (searchResult) {
          characters.push(searchResult);
        }
        // Do this if the user search by using Kana
      } else if (searchBy === "kana") {
        const searchResult = kanjidic.characters
          // Filter by finding characters that has the same or contains the search result in its reading
          .filter((character) => {
            return character.readingMeaning.groups.some((group) => {
              return group.readings.some((r) => {
                return r.value === search;
              });
            });
          })
          // Sort the search result in ascending order by order of frequency
          .sort(
            (a, b) => (a.misc?.frequency || 9999) - (b.misc?.frequency || 9999),
          )
          // Slice search result to only show 5 most frequently used kanji
          .slice(0, 5);

        // Push each character into characters array
        if (searchResult.length > 0) {
          searchResult.forEach((character) => characters.push(character));
        }
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

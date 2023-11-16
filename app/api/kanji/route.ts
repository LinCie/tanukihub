import { kanjidic } from "@/components/dictionaries/kanjidic";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const requestUrl = new URL(req.url);
    const params = requestUrl.searchParams;

    const kanji: string | null = params.get("kanji");

    const character = kanjidic.characters.find(
      (character) => character.literal === kanji,
    );

    return NextResponse.json({ character: character }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ response: "Invalid Params" }, { status: 500 });
  }
}

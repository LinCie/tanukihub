import { Metadata } from "next";
import KanjiSearch from "./KanjiSearch";

export const metadata: Metadata = {
  title: "TanukiHub | Kanji Search",
};

export default function Page() {
  return <KanjiSearch />;
}

// Custom Component Imports
import PageTitle from "@/components/typography/PageTitle";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import Paragraph from "@/components/typography/Paragraph";

export default function Home() {
  return (
    <div id="home">
      {/* Title */}
      <PageTitle>Introduction to Hiragana</PageTitle>
      <Paragraph>One Of the syllabaries used by the Japanese, mainly for Japanese words and grammatical elements, </Paragraph>
      {/* Sections */}
      {/* Navigations */}
      <BottomNavigation>
        <BottomNavigationLink href="/introductory/intro-to-japanese/">Introduction to Japanese</BottomNavigationLink>
        <BottomNavigationLink right href="/introductory/intro-to-katakana/">
          Introduction to Katakana
        </BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}

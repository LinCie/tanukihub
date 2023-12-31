// Custom Component Imports
import PageTitle from "@/components/typography/PageTitle";
import Paragraph from "@/components/typography/Paragraph";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import Japanese from "@/components/typography/Japanese";
import DictionarySearch from "@/components/hover/DictionarySearch";

export default function Home() {
  return (
    <div id="home">
      <PageTitle>Welcome to TanukiHub</PageTitle>
      <Paragraph>
        Kon'nichiwa (
        <Japanese className="whitespace-nowrap font-bold">
          <DictionarySearch searchFor="こんにちは">こんにちは</DictionarySearch>
        </Japanese>
        )! Are you ready to embark on an exciting journey into the world of the
        Japanese language and culture? Look no further than TanukiHub, your
        ultimate destination for mastering everything Japanese.
      </Paragraph>
      <Paragraph>
        Learning a new language can be a thrilling adventure, and Japanese is no
        exception. Whether you're a complete beginner or already have some
        knowledge of the language, TanukiHub is here to guide you every step of
        the way. Our mission is to make your Japanese learning experience both
        enjoyable and effective.
      </Paragraph>
      <Paragraph>
        So, are you ready to take the first step towards becoming a Japanese
        language master? Dive into the captivating world of TanukiHub and
        discover the beauty of Japanese language and culture. Start your
        learning adventure now! And who knows, you might soon be able to say, "
        <Japanese className="whitespace-nowrap font-bold">
          <DictionarySearch searchFor="日本語">日本語</DictionarySearch>を
          <DictionarySearch searchFor="話す">話せます</DictionarySearch>!
        </Japanese>
        " (I can speak Japanese!)
      </Paragraph>
      <BottomNavigation>
        <div></div>
        <BottomNavigationLink right href="/introductory/intro-to-japanese/">
          Introduction to Japanese
        </BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}

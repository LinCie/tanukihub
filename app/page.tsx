// Custom Component Imports
import PageTitle from "@/components/typography/PageTitle";
import Paragraph from "@/components/typography/Paragraph";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import Bold from "@/components/typography/Bold";
import Japanese from "@/components/typography/Japanese";

export default function Home() {
  return (
    <div id="home">
      <PageTitle>Welcome to TanukiHub</PageTitle>
      <Paragraph>
        Kon'nichiwa (<Japanese className="font-bold">こんにちは</Japanese>)! Are
        you ready to embark on an exciting journey into the world of the
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
        learning adventure now, and who knows, you might soon be able to say, "
        <Japanese className="font-bold">日本語を話せます!</Japanese>" (I can
        speak Japanese!)
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

// Radix UI Imports
import { ArrowRightIcon } from "@radix-ui/react-icons";
// Custom Component Imports
import PageTitle from "@/components/typography/PageTitle";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";

export default function Home() {
  return (
    <div id="home">
      <PageTitle>Welcome to TanukiHub</PageTitle>
      <Paragraph>
        Kon'nichiwa (こんにちは)! Are you ready to embark on an exciting journey
        into the world of the Japanese language and culture? Look no further
        than TanukiHub, your ultimate destination for mastering everything
        Japanese.
      </Paragraph>
      <Paragraph>
        Learning a new language can be a thrilling adventure, and Japanese is no
        exception. Whether you're a complete beginner or already have some
        knowledge of the language, TanukiHub is here to guide you every step of
        the way. Our mission is to make your Japanese learning experience both
        enjoyable and effective.
      </Paragraph>
      <Paragraph>
        Learning a new language can be a thrilling adventure, and Japanese is no
        exception. Whether you're a complete beginner or already have some
        knowledge of the language, TanukiHub is here to guide you every step of
        the way. Our mission is to make your Japanese learning experience both
        enjoyable and effective.
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

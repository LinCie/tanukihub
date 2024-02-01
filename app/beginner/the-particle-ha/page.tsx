// Next imports
import { Metadata } from "next";

// Custom component imports
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import PageTitle from "@/components/typography/PageTitle";

export const metadata: Metadata = {
  title: "TanukiHub | The Particle 「は」",
};

export default function Page() {
  return (
    <div id="the-particle-ha">
      <PageTitle>The Particle 「は」</PageTitle>
      <BottomNavigation>
        <BottomNavigationLink href="/beginner/the-partivle-ga">
          The Particle 「が」
        </BottomNavigationLink>
        <BottomNavigationLink href="/">Lorem Ipsum</BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}

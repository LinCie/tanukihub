// Next imports
import { Metadata } from "next";

// Custom component imports
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import PageTitle from "@/components/typography/PageTitle";
import SectionTitle from "@/components/typography/SectionTitle";
import Paragraph from "@/components/typography/Paragraph";
import Japanese from "@/components/typography/Japanese";

export const metadata: Metadata = {
  title: "TanukiHub | The Particle 「は」",
};

const TopicMarkerSection = () => {
  return (
    <section id="topic-marker-section">
      <SectionTitle>The Topic Marker 「は」</SectionTitle>
      <Paragraph>
        The particle "wa" (<Japanese>は</Japanese>) in Japanese serves as a
        topic marker, indicating the subject or theme of a sentence. The primary
        purpose of it is to introduce the topic of the sentence. The topic is
        what the sentence is about, and it provides the context for the rest of
        the statement.
      </Paragraph>
      <Paragraph>
        Once a topic is established with "wa," it tends to persist in the
        conversation until a new topic is introduced. This stability allows for
        a smoother flow in Japanese discourse, and it contrasts with English,
        where the subject of a sentence can change more frequently.
      </Paragraph>
    </section>
  );
};

export default function Page() {
  return (
    <div id="the-particle-ha">
      <PageTitle>The Particle 「は」</PageTitle>
      <TopicMarkerSection />
      <BottomNavigation>
        <BottomNavigationLink href="/beginner/the-partivle-ga">
          The Particle 「が」
        </BottomNavigationLink>
        <BottomNavigationLink href="/">Lorem Ipsum</BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}

// Custom Component Imports
import PageTitle from "@/components/typography/PageTitle";
import Paragraph from "@/components/typography/Paragraph";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import SectionTitle from "@/components/typography/SectionTitle";
import List from "@/components/list/List";
import ListContent from "@/components/list/ListContent";
import Bold from "@/components/typography/Bold";
import Japanese from "@/components/typography/Japanese";

const WritingSystemSection = () => {
  return (
    <section id="writing-system">
      <SectionTitle>Writing System</SectionTitle>
      <Paragraph>
        One of the most distinctive aspects of Japanese is its writing systems.
        Japanese employs three main scripts, each serving distinct purposes in
        the language.
      </Paragraph>
      <List type="disc" position="outside" className="mx-5">
        <ListContent className="mb-1 text-sm text-black last-of-type:mb-4 dark:text-white sm:text-base last-of-type:sm:mb-5">
          <Bold>Hiragana (<Japanese>平仮名</Japanese>)</Bold>. A syllabary used for native Japanese
          words and grammatical elements. For example,{" "}
          <Bold><Japanese>たべる | た(ta)べ(be)る(ru) | taberu (to eat)</Japanese></Bold> is written
          in Hiragana
        </ListContent>
        <ListContent className="mb-1 text-sm text-black last-of-type:mb-4 dark:text-white sm:text-base last-of-type:sm:mb-5">
          <Bold>Katakana (<Japanese>片仮名</Japanese>)</Bold>. Another syllabary used primarily for
          loanwords, foreign names, and onomatopoeia. For example,{" "}
          <Bold><Japanese>タベル | タ(ta)ベ(be)ル(ru) | taberu (to eat)</Japanese></Bold> is the same
          word written in Katakana. While it's less common to write native
          Japanese words like "to eat" in Katakana, it might be used for
          emphasis or in specific contexts.
        </ListContent>
        <ListContent className="mb-1 text-sm text-black last-of-type:mb-4 dark:text-white sm:text-base last-of-type:sm:mb-5">
          <Bold>Kanji (<Japanese>漢字</Japanese>)</Bold>. Logographic characters borrowed from
          Chinese, representing words and concepts. There are thousands of Kanji
          characters in use, and mastering them is a lifelong endeavor. For
          example, <Bold><Japanese>食べる | 食(ta)べ(be)る(ru) | taberu (to eat)</Japanese></Bold> is
          the Kanji representation of "to eat." The Kanji character 食 (shoku)
          means "food" or "to eat," and it adds depth and meaning to the word.
          Kanji allows for a more precise and nuanced expression of the concept.
        </ListContent>
      </List>
    </section>
  );
};

const GrammarSection = () => {
  return (
    <section id="grammar-section">
      <SectionTitle>Grammar and Sentence Structure</SectionTitle>
      <Paragraph>
        Japanese sentence structure differs from English and many other
        languages. It follows a subject-object-verb (SOV) order, meaning the
        verb typically comes at the end of the sentence. This structure can take
        some getting used to, but it's a key aspect of Japanese grammar.
      </Paragraph>
      <Paragraph>
        Japanese grammar also uses particles, small words that indicate the role
        of a word in a sentence. For example, "<Japanese>は</Japanese>" (wa) is used to mark the
        topic of a sentence, and "<Japanese>を</Japanese>" (o) indicates the direct object of a verb.
      </Paragraph>
    </section>
  );
};

const PronunciationSection = () => {
  return (
    <section id="pronunciation-secttion">
      <SectionTitle>Pronunciation</SectionTitle>
      <Paragraph>
        Japanese pronunciation is generally straightforward once you grasp the
        sounds of the language. There are five vowel sounds: "a," "i," "u," "e,"
        and "o." Consonant sounds are relatively limited compared to English,
        making Japanese phonetics less challenging.
      </Paragraph>
      <Paragraph>
        Accurate pronunciation is crucial in Japanese, as changing the
        intonation or stress pattern of a word can alter its meaning. Politeness
        levels, known as "keigo," also influence pronunciation and word choice,
        emphasizing the importance of context and respect in communication.
      </Paragraph>
    </section>
  );
};

export default function Home() {
  return (
    <div id="home">
      {/* Title */}
      <PageTitle>Introduction to Japanese</PageTitle>
      <Paragraph>
        The Japanese language, with its rich history and unique writing systems,
        is a captivating and rewarding journey for language enthusiasts. In this
        section, we'll delve into the fundamentals of the Japanese language,
        giving you a taste of what awaits on your path to Japanese fluency.
      </Paragraph>
      <Paragraph>
        The Japanese language is believed to have evolved over thousands of
        years. While it is considered a language isolate, meaning it has no
        known relation to any other language, it has been influenced by Chinese,
        Korean, and other neighboring languages over time.
      </Paragraph>
      {/* Sections */}
      <WritingSystemSection />
      <GrammarSection />
      <PronunciationSection />
      {/* Navigations */}
      <BottomNavigation>
        <BottomNavigationLink href="/">Home</BottomNavigationLink>
        <BottomNavigationLink right href="/introductory/intro-to-hiragana/">
          Introduction to Hiragana
        </BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}

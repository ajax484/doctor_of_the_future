import Header from "@/components/ui/header";
import { Bio, Comments, Hero, MailingList, Programs, Section3, Section4, Section6, Section8 } from "@/components/home";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bio />
        <Section3 />
        <Section4 />
        <Programs />
        <Section6 />
        <Comments />
        <Section8  />
        <MailingList />
        <Footer />
      </main>
    </>
  );
}

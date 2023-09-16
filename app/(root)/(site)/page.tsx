import {
  Bio,
  Comments,
  Hero,
  MailingList,
  Programs,
  Section3,
  Section4,
  Section6,
  Section8,
} from "@/components/home";
import Section9 from "@/components/home/Section9";
import {
  Session, createServerComponentClient  
} from "@supabase/auth-helpers-nextjs";


export default async function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Section3 />
      <Section4 />
      <Programs />
      <Section6 />
      <Comments />
      <Section8 />
      <MailingList />
      <Section9 />
    </>
  );
}

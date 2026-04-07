import { SiteNav } from '@/components/SiteNav';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Approach } from '@/components/Approach';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Approach />
        <ExperienceSection />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

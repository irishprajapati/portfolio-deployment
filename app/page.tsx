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
      <Hero />
      <main className="bg-black">
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

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BackedBy from '@/components/BackedBy';
import IpadSection from '@/components/IpadSection';
import ProblemSection from '@/components/ProblemSection';
import TextRevealSection from '@/components/TextRevealSection';
import MechanicsSection from '@/components/MechanicsSection';
import WhyMetricWins from '@/components/WhyMetricWins';
import { CoverageSection } from '@/components/CoverageSection';
import GraphicDivider from '@/components/GraphicDivider';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <BackedBy />
      <IpadSection />
      <ProblemSection />
      <TextRevealSection />
      <MechanicsSection />
      <WhyMetricWins />
      <CoverageSection />
      <GraphicDivider />
      <Footer />
    </main>
  );
}

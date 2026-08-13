import Hero from '@/components/Hero';
import Lineup from '@/components/Lineup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-espresso">
      <Hero />
      <Lineup />
      <Footer />
    </main>
  );
}

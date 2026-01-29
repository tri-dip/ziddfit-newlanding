import Navbar from '../components/nav';
import Hero from '../components/hero';
import ProblemSection from '../components/problems'; // Create this similarly
import Footer from '../components/footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Footer />
    </main>
  );
}
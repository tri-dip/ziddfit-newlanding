// src/app/mission/page.tsx
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import Mission from '../../components/mission'; // This now points to the file you just made!

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-10"> 
        <Mission /> 
      </div>
      <Footer />
    </main>
  );
}
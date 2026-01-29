// src/app/contact/page.tsx
import Navbar from '../../components/nav';
import ContactForm from '../../components/contact';
import Footer from '../../components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  );
}
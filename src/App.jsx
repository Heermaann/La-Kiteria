import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhatsIncluded from "./components/WhatsIncluded.jsx";
import Catalog from "./components/Catalog.jsx";
import ContactBanner from "./components/ContactBanner.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatsIncluded />
        <Catalog />
        <ContactBanner />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

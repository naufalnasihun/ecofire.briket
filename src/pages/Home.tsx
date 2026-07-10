import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WhyChoose } from "../components/WhyChoose";
import { Products } from "../components/Products";
import { ExportCountries } from "../components/ExportCountries";
import { Gallery } from "../components/Gallery";
import { ProductionProcess } from "../components/ProductionProcess";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Products />
      <ProductionProcess />
      <ExportCountries />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
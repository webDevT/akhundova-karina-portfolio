import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CTASection from "./components/sections/CTASection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}

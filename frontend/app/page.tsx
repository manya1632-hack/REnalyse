import CollaborationCTA from "./components/home/CollaborationCTA";
import HeroSection from "./components/home/HeroSection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import TargetUsersSection from "./components/home/TargetUsersSection";
import TestimonialSection from "./components/home/TestimonialSection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar/>
      <HeroSection/>
      {/* A small trust banner highlighting the 2026 tech specs */}
      <div className="bg-renalyse-dark py-4 text-center text-white text-sm font-medium">
        <p>Powered by Microsoft Azure AI Foundry | FHIR Compliant | Sub-100ms Clinical Analysis</p>
      </div>
      <HowItWorksSection/>
      <TargetUsersSection />
      <TestimonialSection />
      <CollaborationCTA/>
      <Footer />
    </main>
  );
}
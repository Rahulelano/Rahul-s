import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningAnimation from "@/components/OpeningAnimation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SystemThinking from "@/components/SystemThinking";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* Opening Animation */}
      <AnimatePresence>
        {showIntro && (
          <OpeningAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background"
        >
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <SystemThinking />
          <WhyHireMe />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;

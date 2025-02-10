import React, { useState } from "react";
import { MemoryRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { Credits } from "./pages/Credits";
import { History } from "./pages/History";
import { Profile } from "./pages/Profile";
import { Results } from "./pages/Results";
import { HeroGeometric } from "./components/ui/shape-landing-hero";
import { FileUpload } from "./components/ui/file-upload";
import { LampContainer } from "./components/ui/lamp";
import { Footer } from "./components/ui/footer-section";
import { motion } from "framer-motion";
import { Privacy } from "./pages/Privacy";
import { Trends } from "./pages/Trends";
import { FloatingActionButton } from "./components/ui/floating-action-button";
import { TestimonialSection } from "./components/ui/testimonial-section";
import { Help } from "./pages/Help";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
function Home() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };
  const handleScan = (files: File[]) => {
    navigate("/results");
  };
  return <>
      <HeroGeometric badge="TrueLove?" title1="Trust AI to Read" title2="What You Missed" />
      <div className="w-full max-w-4xl mx-auto px-4 -mt-20 mb-20 relative z-10">
        <div className="border border-dashed border-neutral-800 rounded-lg bg-[#030303]/50 backdrop-blur-sm">
          <FileUpload onChange={handleFileUpload} onScan={handleScan} />
        </div>
      </div>
      <div className="relative z-0 mb-20">
        <LampContainer>
          <motion.h1 initial={{
          opacity: 0.5,
          y: 100
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }} className="mt-8 bg-gradient-to-br from-rose-100 to-rose-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Detect Red Flags <br /> Before It's Too Late
          </motion.h1>
        </LampContainer>
      </div>
      <TestimonialSection />
      <Footer />
    </>;
}
function AppContent() {
  const location = useLocation();
  const {
    theme
  } = useTheme();
  return <main className={`w-full min-h-screen bg-app-bg ${theme}`}>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
      <FloatingActionButton />
    </main>;
}
export function App() {
  return <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>;
}
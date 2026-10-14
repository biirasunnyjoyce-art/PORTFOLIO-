import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { PlannedProjectsSection } from './components/PlannedProjectsSection';
import { JourneySection } from './components/JourneySection';
import { BusinessAndMarketsSection } from './components/BusinessAndMarketsSection';
import { EducationSection } from './components/EducationSection';
import { GoalsSection } from './components/GoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomizationModal } from './components/CustomizationModal';
import { PhotoProvider } from './context/PhotoContext';
import { PhotoUploadModal } from './components/PhotoUploadModal';

export default function App() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#060B14] text-slate-100 selection:bg-teal-500 selection:text-white">
        {/* Navigation Top Bar */}
        <Navbar onOpenGuide={() => setGuideOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* SECTION B: Hero */}
          <Hero />

          {/* SECTION C: About Me */}
          <AboutSection />

          {/* SECTION D: Skills & Capabilities */}
          <SkillsSection />

          {/* SECTION E: Technical Portfolio in Progress */}
          <PlannedProjectsSection />

          {/* SECTION G: Learning Journey */}
          <JourneySection />

          {/* SECTION H: Where Data Meets Business */}
          <BusinessAndMarketsSection />

          {/* SECTION I: Education (UCU & Namagunga) */}
          <EducationSection />

          {/* SECTION J: Professional Goals */}
          <GoalsSection />

          {/* SECTION K: Contact & Networking */}
          <ContactSection />
        </main>

        {/* SECTION L: Footer */}
        <Footer onOpenGuide={() => setGuideOpen(true)} />

        {/* Practical In-App Customization Guide Modal */}
        <CustomizationModal
          isOpen={guideOpen}
          onClose={() => setGuideOpen(false)}
        />

        {/* Authentic Unedited Photo Upload Modal */}
        <PhotoUploadModal />
      </div>
    </PhotoProvider>
  );
}

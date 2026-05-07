// 

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Hero from './sections/Hero'
import Demographics from './sections/Demographics'
import Retail from './sections/Retail'
import Events from './sections/Events'
import Roadmap from './sections/Roadmap'
import Attractions from './sections/Attractions'

const SECTIONS = {
  hero: Hero,
  demographics: Demographics,
  retail: Retail,
  roadmap: Roadmap,
  events: Events,
  attractions: Attractions,
}

const SECTION_MAP = {
  hero: { label: 'Overview', id: 'hero' },
  demographics: { label: 'Demographics', id: 'demographics' },
  retail: { label: 'Retail Wings', id: 'retail' },
  attractions: { label: 'Iconic Attractions', id: 'attractions' },
  roadmap: { label: 'Expansion Roadmap', id: 'roadmap' },
  events: { label: 'Venue & Events', id: 'events' },
};

const SECTION_ORDER = ['hero', 'demographics', 'retail', 'attractions', 'roadmap', 'events'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  // 1. Sidebar visibility state - Default to hidden for the landing/intro
  const [showSidebar, setShowSidebar] = useState(false);

  const currentIndex = SECTION_ORDER.indexOf(activeSection);
  const nextSectionId = SECTION_ORDER[(currentIndex + 1) % SECTION_ORDER.length];
  const prevSectionId = SECTION_ORDER[(currentIndex - 1 + SECTION_ORDER.length) % SECTION_ORDER.length];

  const nextMetadata = SECTION_MAP[nextSectionId];
  const prevMetadata = SECTION_MAP[prevSectionId];

  const ActiveComponent = SECTIONS[activeSection];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#080808]">
      
      {/* 2. Animated Sidebar: Slides in/out based on showSidebar state */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full z-50"
          >
            <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <ActiveComponent
            key={activeSection}
            // Passing dynamic navigation
            nextPage={{ 
              label: nextMetadata.label, 
              onClick: () => {
                setActiveSection(nextSectionId);
                setShowSidebar(true); // Ensure sidebar is visible when navigating forward
              } 
            }}
            prevPage={{ 
              label: prevMetadata.label, 
              onClick: () => {
                setActiveSection(prevSectionId);
                setShowSidebar(true);
              } 
            }}
            // Landing actions
            onExplore={() => {
              setActiveSection('demographics');
              setShowSidebar(true);
            }}
            // 3. Prop to allow Hero to control Sidebar visibility
            setSidebarVisible={setShowSidebar}
          />
        </AnimatePresence>
      </main>
    </div>
  );
}
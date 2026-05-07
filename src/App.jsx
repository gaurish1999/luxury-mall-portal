import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Hero from './sections/Hero'
import Demographics from './sections/Demographics'
import Retail from './sections/Retail'
import Events from './sections/Events'
import Roadmap from './sections/Roadmap' // 1. Import the new section
import Attractions from './sections/Attractions' // Import it

const SECTIONS = {
  hero: Hero,
  demographics: Demographics,
  retail: Retail,
  roadmap: Roadmap, // 2. Register it here
  events: Events,
  attractions: Attractions, // Register it
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

  // Logic to get the Next and Previous metadata
  const currentIndex = SECTION_ORDER.indexOf(activeSection);
  
  const nextSectionId = SECTION_ORDER[(currentIndex + 1) % SECTION_ORDER.length];
  const prevSectionId = SECTION_ORDER[(currentIndex - 1 + SECTION_ORDER.length) % SECTION_ORDER.length];

  const nextMetadata = SECTION_MAP[nextSectionId];
  const prevMetadata = SECTION_MAP[prevSectionId];

  const ActiveComponent = SECTIONS[activeSection];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#080808]">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <ActiveComponent
            key={activeSection}
            // Now passing dynamic labels and navigation functions
            nextPage={{ label: nextMetadata.label, onClick: () => setActiveSection(nextSectionId) }}
            prevPage={{ label: prevMetadata.label, onClick: () => setActiveSection(prevSectionId) }}
            onExplore={() => setActiveSection('demographics')}
          />
        </AnimatePresence>
      </main>
    </div>
  );
}
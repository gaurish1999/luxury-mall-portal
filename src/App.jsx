import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Hero from './sections/Hero'
import Demographics from './sections/Demographics'
import Retail from './sections/Retail'
import Events from './sections/Events'

const SECTIONS = {
  hero: Hero,
  demographics: Demographics,
  retail: Retail,
  events: Events,
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const ActiveComponent = SECTIONS[activeSection]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#080808]">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <ActiveComponent
            key={activeSection}
            onExplore={() => setActiveSection('demographics')}
          />
        </AnimatePresence>
      </main>
    </div>
  )
}

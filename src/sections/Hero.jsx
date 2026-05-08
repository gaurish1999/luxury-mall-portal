import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowRight, ChevronRight, BarChart3, Landmark } from 'lucide-react'
import SectionFooter from '../components/SectionFooter'

export default function Hero({ onNext, onExplore, setSidebarVisible, nextPage, prevPage }) {
  const [view, setView] = useState('landing')
  const videoRef = useRef(null)

  // Effect to handle Sidebar visibility: Only show it when we reach the 'dashboard' view
  useEffect(() => {
    if (view === 'dashboard') {
      setSidebarVisible(true)
    } else {
      setSidebarVisible(false)
    }
  }, [view, setSidebarVisible])

  const startIntro = () => {
    setView('intro')
    if (videoRef.current) videoRef.current.play()
  }

  const skipToDashboard = () => setView('dashboard')

  return (
    <section className="relative h-full w-full bg-[#050505] overflow-hidden">
      
      {/* Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          playsInline
          muted 
          className={`h-full w-full object-cover transition-all duration-[1500ms] ease-in-out ${
            view === 'dashboard' ? 'brightness-[0.2] grayscale-[0.6] scale-110' : 'brightness-100 scale-100'
          }`}
        >
          <source src="/LIAT.AI - Hero Video v1.2.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Overlay Gradient*/}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          view === 'dashboard' ? 'opacity-90 bg-gradient-to-b from-black via-transparent to-[#080808]' : 'opacity-30 bg-black'
          }`} />
        </div>

      {/* LANDING */}
      <AnimatePresence>
        {view === 'landing' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[4px]"
          >
            <motion.div 
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.8em] text-[#c5a059]">
                The Center of Now
              </span>
              <h1 className="font-display text-7xl md:text-[10rem] uppercase tracking-tighter text-white leading-[0.8] mb-20">
                The Dubai <br /> <span className="text-[#c5a059]">Mall</span>
              </h1>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <button
                  onClick={startIntro}
                  className="group flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/20 px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-500"
                >
                  <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Replay Intro</span>
                </button>

                <button
                  onClick={skipToDashboard}
                  className="group flex items-center gap-6 bg-[#c5a059] px-12 py-6 rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(197,160,89,0.3)]"
                >
                  <span className="text-black text-[10px] font-bold uppercase tracking-[0.3em]">Begin Exploration</span>
                  <ArrowRight size={18} className="text-black group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE INTRO */}
      <AnimatePresence>
        {view === 'intro' && (
          <motion.button
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0 }}
            onClick={skipToDashboard}
            className="absolute bottom-12 right-12 z-50 group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-500"
          >
            <span className="text-white group-hover:text-black text-[10px] font-bold uppercase tracking-[0.3em]">Skip to Data</span>
            <ChevronRight size={18} className="text-white group-hover:text-black" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* THE DASHBOARD */}
      <div className="relative z-10 h-full w-full overflow-y-auto custom-scrollbar">
        {view === 'dashboard' && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full w-full flex flex-col items-center justify-center px-6 py-32"
          >
            <div className="max-w-6xl w-full">
              <div className="text-center mb-32">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8 block text-[10px] font-bold uppercase tracking-[0.6em] text-[#c5a059]"
                >
                  Downtown Dubai Landmark
                </motion.span>
                
                <h2 className="font-display text-7xl md:text-[10rem] uppercase tracking-tighter text-white leading-[0.8] mb-12">
                  The Crown <br /> <span className="text-[#c5a059]">Jewel</span>
                </h2>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/40 text-xs md:text-sm uppercase tracking-[0.4em] font-light max-w-2xl mx-auto leading-loose"
                >
                  Witness the scale and discover the data that <br/>defines the world’s ultimate Crown Jewel.
                </motion.p>
                
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 backdrop-blur-sm">
                  <div>
                    <p className="text-white text-4xl font-display tracking-widest">111M+</p>
                    <p className="text-[#c5a059] text-[8px] uppercase tracking-[0.4em] mt-3 font-bold">Annual Footfall</p>
                  </div>
                  <div>
                    <p className="text-white text-4xl font-display tracking-widest">1,200+</p>
                    <p className="text-[#c5a059] text-[8px] uppercase tracking-[0.4em] mt-3 font-bold">Retail Outlets</p>
                  </div>
                  <div>
                    <p className="text-white text-4xl font-display tracking-widest">AED 45B+</p>
                    <p className="text-[#c5a059] text-[8px] uppercase tracking-[0.4em] mt-3 font-bold">Asset Valuation</p>
                  </div>
                  <div>
                    <p className="text-white text-4xl font-display tracking-widest">No. 1</p>
                    <p className="text-[#c5a059] text-[8px] uppercase tracking-[0.4em] mt-3 font-bold">Global Rank</p>
                  </div>
                </div>
              </div>

              <SectionFooter 
                nextPage={nextPage} 
                prevPage={{ label: 'Watch Intro', onClick: () => setView('landing') }} 
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
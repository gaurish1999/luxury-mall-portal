// import { motion } from 'framer-motion';

// export default function Hero({ onExplore }) {
//   // This makes the button actually "work" by scrolling down
//   const handleEnter = () => {
//     // Scrolls the window down by exactly 100vh (one full screen)
//     window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
//   };

//   return (
//     <motion.section 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative h-screen w-full overflow-hidden bg-obsidian"
//     >
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="h-full w-full object-cover"
//         >
//           {/* Hero Video */}
//           <source src="/LIAT.AI - Hero Video.mp4" type="video/mp4" />
//         </video>
        
//         {/* Luxury Vignette Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-obsidian" />
//       </div>

//       {/* Text Content Container */}
//       <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 text-center md:px-16 lg:px-24">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//           className="max-w-4xl"
//         >
//           <span className="mb-4 block text-xs md:text-sm font-semibold tracking-[0.4em] text-gold-light uppercase">
//             The Dubai Mall
//           </span>
          
//           <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-display leading-tight text-white uppercase">
//             The Heart of<br />
//             <span className="text-gold">Downtown Dubai</span>
//           </h1>
          
//           <p className="mb-10 max-w-xl text-lg font-light text-white/70 leading-relaxed font-sans">
//             Experience the world's most visited retail and entertainment destination, featuring over 1,200 stores and world-class attractions.
//           </p>

//           {/* The Working Button */}
//           <motion.button
//             onClick={onExplore}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative cursor-pointer overflow-hidden border border-gold/50 px-10 py-4 transition-colors hover:bg-gold"
//           >
//             <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase text-white group-hover:text-obsidian transition-colors">
//               Enter the Experience
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>

//     </motion.section>
//   );
// }

// import { useState, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowRight, Play, X, ChevronRight } from 'lucide-react'
// import SectionFooter from '../components/SectionFooter'

// export default function Hero({ onNext, onExplore }) {
//   const [isIntro, setIsIntro] = useState(true)
//   const videoRef = useRef(null)

//   // Function to transition from Intro to Dashboard
//   const handleSkip = () => setIsIntro(false)

//   return (
//     <section className="relative h-full w-full bg-[#050505] overflow-hidden">
      
//       {/* 1. THE VIDEO MEDIUM */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           onEnded={handleSkip} // Optional: auto-skip when video finishes
//           className={`h-full w-full object-cover transition-all duration-1000 ease-in-out ${
//             isIntro ? 'brightness-100 grayscale-0 scale-100' : 'brightness-[0.3] grayscale-[0.4] scale-110'
//           }`}
//         >
//           <source src="/LIAT.AI - Hero Video.mp4" type="video/mp4" />
//         </video>
        
//         {/* Dynamic Overlay Gradient */}
//         <div className={`absolute inset-0 transition-opacity duration-1000 ${
//           isIntro ? 'opacity-20 bg-black' : 'opacity-80 bg-gradient-to-b from-black/40 via-transparent to-[#080808]'
//         }`} />
//       </div>

//       {/* 2. THE SKIP/CLOSE BUTTON (Only visible during Intro) */}
//       <AnimatePresence>
//         {isIntro && (
//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             onClick={handleSkip}
//             className="absolute bottom-12 right-12 z-50 group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-500"
//           >
//             <span className="text-white group-hover:text-black text-[10px] font-bold uppercase tracking-[0.3em]">
//               Skip Intro
//             </span>
//             <div className="bg-white/10 group-hover:bg-black/20 p-1.5 rounded-full">
//               <ChevronRight size={16} className="text-white group-hover:text-black" />
//             </div>
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* 3. THE MAIN DASHBOARD TEXT (Only visible after Intro) */}
//       <div className="relative z-10 h-full w-full overflow-y-auto custom-scrollbar">
//         <AnimatePresence>
//           {!isIntro && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="min-h-full w-full flex flex-col items-center justify-center px-6 py-20"
//             >
//               {/* Content Wrapper */}
//               <div className="max-w-6xl w-full">
//                 <motion.div
//                   initial={{ y: 40, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                   className="text-center mb-24"
//                 >
//                   <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.6em] text-[#c5a059]">
//                     Investor Relations Portal
//                   </span>
//                   <h1 className="font-display text-7xl md:text-9xl lg:text-[11rem] uppercase tracking-tighter text-white leading-[0.8] mb-12">
//                     The Dubai <br /> <span className="text-[#c5a059]">Mall</span>
//                   </h1>
                  
//                   <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
//                     <button
//                       onClick={onExplore}
//                       className="group flex items-center gap-6 bg-[#c5a059] px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,160,89,0.3)]"
//                     >
//                       <span className="text-black text-[10px] font-bold uppercase tracking-[0.3em]">
//                         Begin Exploration
//                       </span>
//                       <ArrowRight size={20} className="text-black" />
//                     </button>
                    
//                     <button 
//                       onClick={() => setIsIntro(true)} // Replay ability
//                       className="flex items-center gap-3 text-white/40 hover:text-[#c5a059] transition-colors uppercase text-[9px] tracking-[0.4em] font-bold"
//                     >
//                       <Play size={14} fill="currentColor" />
//                       Replay Intro
//                     </button>
//                   </div>
//                 </motion.div>

//                 {/* Quick Stats Grid */}
//                 <motion.div 
//                    initial={{ opacity: 0, y: 20 }}
//                    animate={{ opacity: 1, y: 0 }}
//                    transition={{ delay: 0.6 }}
//                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-white/5"
//                 >
//                   {[
//                     { label: 'Annual Footfall', val: '111M+' },
//                     { label: 'Retail Outlets', val: '1,200+' },
//                     { label: 'Asset Value', val: 'AED 60B+' },
//                     { label: 'Expansion Area', val: '1.2M SQFT' }
//                   ].map(stat => (
//                     <div key={stat.label} className="text-center md:text-left">
//                       <p className="text-white text-2xl font-display tracking-wider">{stat.val}</p>
//                       <p className="text-white/30 text-[8px] uppercase tracking-[0.2em] mt-1">{stat.label}</p>
//                     </div>
//                   ))}
//                 </motion.div>

//                 {/* Navigation Footer */}
//                 <div className="mt-12">
//                   <SectionFooter 
//                     nextPage={{ label: 'Market Demographics', onClick: onNext }} 
//                     prevPage={{ label: 'Back to Intro', onClick: () => setIsIntro(true) }}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowRight, ChevronRight, BarChart3, Landmark } from 'lucide-react'
import SectionFooter from '../components/SectionFooter'

export default function Hero({ onNext, onExplore, setSidebarVisible, nextPage, prevPage }) {
  // States: 'landing' (buttons), 'intro' (video playing), 'dashboard' (data view)
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
      
      {/* THE MEDIUM: Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          playsInline
          muted 
          className={`h-full w-full object-cover transition-all duration-[1500ms] ease-in-out ${
            view === 'dashboard' ? 'brightness-[0.2] grayscale-[0.6] scale-110' : 'brightness-100 scale-100'
          }`}
        >
          {/* Using your specific video file name */}
          <source src="/LIAT.AI - Hero Video v1.2.mp4" type="video/mp4" />
        </video>
        {/* Dynamic Overlay Gradient to ensure text legibility on dashboard */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          view === 'dashboard' ? 'opacity-90 bg-gradient-to-b from-black via-transparent to-[#080808]' : 'opacity-30 bg-black'
        }`} />
      </div>

      {/* VIEW 1: THE LANDING (No autoplay, purely attention-seeking) */}
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

      {/* VIEW 2: THE INTRO (Full focus on the video, Sidebar remains hidden) */}
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

      {/* VIEW 3: THE DASHBOARD (The "Crown Jewel" Reveal) */}
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
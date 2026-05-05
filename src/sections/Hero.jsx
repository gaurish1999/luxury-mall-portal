// import { motion } from 'framer-motion'
// import { ArrowDown } from 'lucide-react'

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
// }

// export default function Hero({ onExplore }) {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Video background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="https://videos.pexels.com/video-files/3105318/3105318-uhd_2560_1440_25fps.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* Gradient overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

//       {/* Subtle vignette */}
//       <div className="absolute inset-0" style={{
//         background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
//       }} />

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="max-w-5xl"
//         >
//           <motion.div variants={itemVariants}>
//             <span className="inline-block text-amber-400 text-xs tracking-[0.3em] uppercase mb-6">
//               Investor Presentation &bull; 2025
//             </span>
//           </motion.div>

//           <motion.h1
//             variants={itemVariants}
//             className="font-serif text-white leading-none tracking-tight mb-6"
//             style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 300 }}
//           >
//             The Center
//             <br />
//             <em className="italic text-amber-200/90">of the World</em>
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-12 tracking-wide"
//             style={{ fontWeight: 300 }}
//           >
//             Where 40 million visitors meet the world's most coveted brands.
//             A once-in-a-generation retail and entertainment destination.
//           </motion.p>

//           <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
//             <button
//               onClick={onExplore}
//               className="group relative px-10 py-4 bg-white text-black text-sm tracking-[0.15em] uppercase font-medium overflow-hidden transition-all duration-300 hover:bg-amber-50"
//             >
//               <span className="relative z-10">Explore the Property</span>
//               <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//               <span className="absolute inset-0 flex items-center justify-center text-black z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 tracking-[0.15em] uppercase text-sm font-medium">
//                 Explore the Property
//               </span>
//             </button>

//             <button
//               onClick={onExplore}
//               className="text-white/40 text-sm tracking-[0.15em] uppercase flex items-center gap-2 hover:text-white/70 transition-colors duration-300"
//             >
//               <ArrowDown size={14} />
//               Scroll to discover
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom scroll cue */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//       >
//         <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/30 mx-auto" />
//       </motion.div>
//     </div>
//   )
// }

import { motion } from 'framer-motion';

export default function Hero({ onExplore }) {
  // This makes the button actually "work" by scrolling down
  const handleEnter = () => {
    // Scrolls the window down by exactly 100vh (one full screen)
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen w-full overflow-hidden bg-obsidian"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          {/* Hero Video */}
          <source src="/TourismHero_Final No Fade.mp4" type="video/mp4" />
        </video>
        
        {/* Luxury Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-obsidian" />
      </div>

      {/* Text Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 text-center md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="mb-4 block text-xs md:text-sm font-semibold tracking-[0.4em] text-gold-light uppercase">
            A Global Destination
          </span>
          
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-display leading-tight text-white uppercase">
            The Center <br />
            <span className="text-gold">of Everything</span>
          </h1>
          
          <p className="mb-10 max-w-xl text-lg font-light text-white/70 leading-relaxed font-sans">
            Where luxury meets entertainment. Experience the world's most iconic retail 
            destination, reimagined for the modern era.
          </p>

          {/* The Working Button */}
          <motion.button
            onClick={onExplore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative cursor-pointer overflow-hidden border border-gold/50 px-10 py-4 transition-colors hover:bg-gold"
          >
            <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase text-white group-hover:text-obsidian transition-colors">
              Enter the Experience
            </span>
          </motion.button>
        </motion.div>
      </div>

    </motion.section>
  );
}
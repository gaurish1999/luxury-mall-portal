// import { useRef } from 'react'
// import { motion } from 'framer-motion'
// import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
// import SectionWrapper from '../components/SectionWrapper'
// import { RETAIL_BRANDS } from '../data/constants'

// const containerVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// }

// function BrandCard({ brand, index }) {
//   const heights = ['h-72', 'h-56', 'h-80', 'h-64', 'h-76', 'h-60', 'h-72', 'h-64']
//   return (
//     <motion.div
//       variants={itemVariants}
//       className={`relative group overflow-hidden rounded-xl cursor-pointer flex-shrink-0 w-64 ${heights[index % heights.length]}`}
//     >
//       <img
//         src={brand.image}
//         alt={brand.name}
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//         loading="lazy"
//       />
//       {/* Default overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

//       {/* Category badge */}
//       <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
//         <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">{brand.category}</span>
//       </div>

//       {/* Brand name — always visible at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 p-4">
//         <p className="text-white font-medium text-sm tracking-wide">{brand.name}</p>
//         <motion.div
//           className="flex items-center gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           <ExternalLink size={11} className="text-amber-400" />
//           <span className="text-amber-400 text-[10px] tracking-[0.15em] uppercase">View Brand</span>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }

// export default function Retail() {
//   const scrollRef = useRef(null)

//   const scroll = (dir) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
//     }
//   }

//   return (
//     <SectionWrapper>
//       <div className="min-h-screen bg-[#080808] px-6 lg:px-12 py-16">
//         {/* Header */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="mb-12 flex items-end justify-between"
//         >
//           <div>
//             <motion.span variants={itemVariants} className="text-amber-400 text-xs tracking-[0.3em] uppercase">
//               Tenant Mix
//             </motion.span>
//             <motion.h2
//               variants={itemVariants}
//               className="font-serif text-white mt-3 leading-tight"
//               style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}
//             >
//               Luxury Retail
//             </motion.h2>
//             <motion.p variants={itemVariants} className="text-white/40 mt-3 max-w-lg text-sm leading-relaxed">
//               Over 620 premium and luxury brands across four curated wings — from global maisons to exclusive concept stores found nowhere else in the region.
//             </motion.p>
//           </div>

//           {/* Scroll controls */}
//           <motion.div variants={itemVariants} className="hidden sm:flex gap-2">
//             <button
//               onClick={() => scroll(-1)}
//               className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
//             >
//               <ChevronLeft size={18} />
//             </button>
//             <button
//               onClick={() => scroll(1)}
//               className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Horizontal scroll carousel */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto pb-4"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {RETAIL_BRANDS.map((brand, i) => (
//               <BrandCard key={brand.name} brand={brand} index={i} />
//             ))}
//           </div>
//         </motion.div>

//         {/* Wing info grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
//         >
//           {[
//             { wing: 'The Diamond Wing', speciality: 'Fine Jewelry & Watches', brands: 48 },
//             { wing: 'La Maison', speciality: 'Haute Couture & Fashion', brands: 142 },
//             { wing: 'The Avenue', speciality: 'Contemporary Luxury', brands: 218 },
//             { wing: 'Epicure', speciality: 'Fine Dining & Gastronomy', brands: 64 },
//           ].map((w) => (
//             <motion.div
//               key={w.wing}
//               variants={itemVariants}
//               className="bg-[#0e0e0e] border border-white/[0.06] rounded-xl p-5 group hover:border-amber-400/20 transition-colors duration-300"
//             >
//               <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mb-4" />
//               <h4 className="text-white text-sm font-medium mb-1">{w.wing}</h4>
//               <p className="text-white/30 text-xs mb-4">{w.speciality}</p>
//               <p className="text-amber-400 text-2xl font-light font-serif">{w.brands}</p>
//               <p className="text-white/20 text-[10px] tracking-wider uppercase mt-0.5">Brands</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </SectionWrapper>
//   )
// }

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { RETAIL_BRANDS } from '../data/constants'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function BrandCard({ brand }) {
  return (
    <motion.a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="relative group overflow-hidden rounded-xl border border-white/5 transition-all duration-500 hover:border-gold/40 cursor-pointer flex-shrink-0 w-72 h-80 block"
    >
      <img
        src={brand.image}
        alt={brand.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Premium Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Badge */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-obsidian/80 backdrop-blur-md rounded-sm border border-white/10">
        <span className="text-gold-light text-[9px] font-bold tracking-[0.3em] uppercase">{brand.category}</span>
      </div>

      {/* Brand Label */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white font-display text-xl tracking-widest uppercase">{brand.name}</p>
        <div
          className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
        >
          <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">View Brand</span>
          <ExternalLink size={12} className="text-gold" />
        </div>
      </div>
    </motion.a>
  )
}

export default function Retail() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <SectionWrapper>
      <div className="w-full py-8">
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <motion.span variants={itemVariants} className="text-gold-light text-xs font-semibold tracking-[0.4em] uppercase block mb-4">
              Tenant Mix
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight"
            >
              Luxury Retail
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/60 mt-6 text-base font-light leading-relaxed">
              Over 620 premium and luxury brands across four curated wings — from global maisons 
              to exclusive concept stores found nowhere else in the region.
            </motion.p>
          </div>

          {/* Scroll controls */}
          <motion.div variants={itemVariants} className="hidden md:flex gap-4 z-20">
            <button
              onClick={() => scroll(-1)}
              className="w-12 h-12 rounded-full border border-white/10 bg-surface flex items-center justify-center text-white/40 hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-12 h-12 rounded-full border border-white/10 bg-surface flex items-center justify-center text-white/40 hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Uniform Horizontal Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative w-full"
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 items-center"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)'
            }}
          >
            {RETAIL_BRANDS.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </motion.div>

        {/* Wing Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { wing: 'The Diamond Wing', speciality: 'Fine Jewelry & Watches', brands: 48 },
            { wing: 'La Maison', speciality: 'Haute Couture & Fashion', brands: 142 },
            { wing: 'The Avenue', speciality: 'Contemporary Luxury', brands: 218 },
            { wing: 'Epicure', speciality: 'Fine Dining & Gastronomy', brands: 64 },
          ].map((w) => (
            <motion.div
              key={w.wing}
              variants={itemVariants}
              className="bg-surface border border-white/5 rounded-2xl p-8 group hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-gold/50 mb-6 group-hover:bg-gold group-hover:scale-150 transition-all duration-300" />
              <h4 className="text-white font-display text-sm uppercase tracking-widest mb-2">{w.wing}</h4>
              <p className="text-white/40 text-xs tracking-wider mb-6">{w.speciality}</p>
              <div className="flex items-baseline gap-2 mt-auto">
                <p className="text-gold text-4xl md:text-5xl font-display">{w.brands}</p>
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold">Brands</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
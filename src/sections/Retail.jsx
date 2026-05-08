import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import * as Constants from '../data/constants'
import SectionFooter from '../components/SectionFooter'

const RETAIL_BRANDS = Constants.RETAIL_BRANDS || []
const RETAIL_WINGS = Constants.RETAIL_WINGS || [
  { wing: 'Fashion Avenue', speciality: 'Haute Couture', brands: 150 },
  { wing: 'The Souk', speciality: 'Jewelry & Heritage', brands: 220 },
  { wing: 'The Village', speciality: 'Outdoor Lifestyle', brands: 85 },
  { wing: 'Chinatown', speciality: 'Asian Fashion', brands: 60 },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function BrandCard({ brand }) {
  if (!brand) return null;

  return (
    <motion.a
      href={brand.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      // REFINEMENT: Responsive width (80% of screen on mobile, 72 (288px) on desktop)
      className="relative group overflow-hidden rounded-xl border border-white/5 transition-all duration-500 hover:border-gold/40 cursor-pointer flex-shrink-0 w-[75vw] md:w-72 h-72 md:h-80 block bg-surface"
    >
      {brand.image && (
        <img
          src={brand.image}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out 
                     grayscale-[0.9] brightness-[0.6] sepia-[0.3] contrast-[1.1]
                     md:group-hover:scale-110 md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:sepia-0"
          loading="lazy"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-obsidian/40 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label: Smaller font for mobile */}
      <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2 md:px-3 py-1 md:py-1.5 bg-obsidian/80 backdrop-blur-md rounded-sm border border-white/10">
        <span className="text-gold-light text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase">{brand.category}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <p className="text-white font-display text-lg md:text-xl tracking-widest uppercase">{brand.name}</p>
        <div className="flex items-center gap-2 mt-2 md:mt-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:-translate-x-2 md:group-hover:translate-x-0">
          <span className="text-gold text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Explore</span>
          <ExternalLink size={10} className="text-gold" />
        </div>
      </div>
    </motion.a>
  )
}

export default function Retail({ nextPage, prevPage }) {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
    }
  }

  return (
    <SectionWrapper>
      <div className="w-full py-6 md:py-8">
        
        {/* Header: Scaled text for iPhone 14 Pro Max */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
        >
          <div className="max-w-2xl">
            <motion.span variants={itemVariants} className="text-gold-light text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase block mb-3 md:mb-4">
              Emaar Flagship Curation
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight">
              The Dubai Mall <br/>Retail Wings
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/60 mt-4 md:mt-6 text-sm md:text-base font-light leading-relaxed">
              Featuring over 1,200 retail outlets, The Dubai Mall is a global fashion monolith. 
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="hidden md:flex gap-4">
            <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full border border-white/10 bg-surface flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full border border-white/10 bg-surface flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel: Adjusted mask for mobile edges */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-6 pt-2 items-center"
            style={{ 
              scrollbarWidth: 'none', 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)'
            }}
          >
            {RETAIL_BRANDS.length > 0 ? (
              RETAIL_BRANDS.map((brand) => (
                <BrandCard key={brand.name} brand={brand} />
              ))
            ) : (
              <p className="text-white/20 italic text-xs">No brands found...</p>
            )}
          </div>
        </motion.div>

        {/* Wings Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16"
        >
          {RETAIL_WINGS.map((w) => (
            <motion.div
              key={w.wing}
              variants={itemVariants}
              className="bg-surface border border-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mb-4 md:mb-6 group-hover:bg-gold group-hover:scale-150 transition-all duration-300" />
              <h4 className="text-white font-display text-xs md:text-sm uppercase tracking-widest mb-1.5 md:mb-2">{w.wing}</h4>
              <p className="text-white/40 text-[9px] md:text-[10px] tracking-wider mb-4 md:mb-6 uppercase">{w.speciality}</p>
              <div className="flex items-baseline gap-2 mt-auto">
                <p className="text-gold text-3xl md:text-4xl font-display">{w.brands}</p>
                <p className="text-white/30 text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-bold">Stores</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8">
          <SectionFooter nextPage={nextPage} prevPage={prevPage} />
        </div>
      </div>
    </SectionWrapper>
  )
}
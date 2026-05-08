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
      className="relative group overflow-hidden rounded-xl border border-white/5 transition-all duration-500 hover:border-gold/40 cursor-pointer flex-shrink-0 w-72 h-80 block bg-surface"
    >
      {brand.image && (
        <img
          src={brand.image}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out 
                     grayscale-[0.9] brightness-[0.6] sepia-[0.3] contrast-[1.1]
                     group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:sepia-0"
          loading="lazy"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-4 left-4 px-3 py-1.5 bg-obsidian/80 backdrop-blur-md rounded-sm border border-white/10">
        <span className="text-gold-light text-[9px] font-bold tracking-[0.3em] uppercase">{brand.category}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white font-display text-xl tracking-widest uppercase">{brand.name}</p>
        <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">Explore Brand</span>
          <ExternalLink size={12} className="text-gold" />
        </div>
      </div>
    </motion.a>
  )
}

export default function Retail({ nextPage, prevPage }) {
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
              Emaar Flagship Curation
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight">
              The Dubai Mall <br/>Retail Wings
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/60 mt-6 text-base font-light leading-relaxed">
              Featuring over 1,200 retail outlets, The Dubai Mall is a global fashion monolith. 
              From the high-jewelry of The Souk to the world-class maisons of Fashion Avenue.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="hidden md:flex gap-4">
            <button onClick={() => scroll(-1)} className="w-12 h-12 rounded-full border border-white/10 bg-surface flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll(1)} className="w-12 h-12 rounded-full border border-white/10 bg-surface flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 items-center"
            style={{ 
              scrollbarWidth: 'none', 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)'
            }}
          >
            {RETAIL_BRANDS.length > 0 ? (
              RETAIL_BRANDS.map((brand) => (
                <BrandCard key={brand.name} brand={brand} />
              ))
            ) : (
              <p className="text-white/20 italic">No brands found in data constants...</p>
            )}
          </div>
        </motion.div>

        {/* Wings Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {RETAIL_WINGS.map((w) => (
            <motion.div
              key={w.wing}
              variants={itemVariants}
              className="bg-surface border border-white/5 rounded-2xl p-8 group hover:border-gold/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-2 h-2 rounded-full bg-gold/50 mb-6 group-hover:bg-gold group-hover:scale-150 transition-all duration-300" />
              <h4 className="text-white font-display text-sm uppercase tracking-widest mb-2">{w.wing}</h4>
              <p className="text-white/40 text-[10px] tracking-wider mb-6 uppercase">{w.speciality}</p>
              <div className="flex items-baseline gap-2 mt-auto">
                <p className="text-gold text-4xl font-display">{w.brands}</p>
                <p className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-bold">Stores</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <SectionFooter nextPage={nextPage} prevPage={prevPage} />
      </div>
    </SectionWrapper>
  )
}
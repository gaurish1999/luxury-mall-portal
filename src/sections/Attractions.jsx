import { motion } from 'framer-motion'
import { Anchor, Zap, Star, Map } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { LIFESTYLE_ASSETS } from '../data/constants'
import SectionFooter from '../components/SectionFooter'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Attractions({ nextPage, prevPage }) {
  return (
    <SectionWrapper>
      {/* 1. Responsive Padding: px-4 on mobile, px-12 on desktop */}
      <div className="h-full w-full overflow-y-auto custom-scrollbar px-4 md:px-12 py-12 md:py-20">
        
        {/* Header: Scaled typography */}
        <div className="mb-10 md:mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#c5a059] text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase block mb-3 md:mb-4">
            Entertainment Anchors
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight">
            Iconic Hubs & <br/>Attractions
          </motion.h2>
        </div>

        {/* Feature Grid: Stays 1 column on mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {LIFESTYLE_ASSETS.map((asset, index) => (
            <motion.div
              key={asset.id}
              variants={itemVariants}
              // Lowered min-height for mobile to avoid awkward vertical scrolling
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl group min-h-[320px] md:min-h-[400px] border border-white/5 ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 z-0 grayscale-[0.5] md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000 ease-out"
                style={{ 
                  backgroundImage: `url(${asset.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Content Card */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <Star size={14} className="text-[#c5a059]" />
                      <span className="text-white/60 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">World-Class Destination</span>
                    </div>
                    
                    <h3 className="text-white font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider mb-2 md:mb-4 group-hover:text-[#c5a059] transition-colors">
                      {asset.name}
                    </h3>

                    {/* Description: Always visible on mobile (opacity-100), hover-only on desktop (md:opacity-0) */}
                    <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 md:line-clamp-none">
                      {asset.description}
                    </p>
                  </div>
                  
                  {/* Stats: Visible on all screens, but smaller on mobile */}
                  <div className="text-left md:text-right">
                    <p className="text-[#c5a059] text-3xl md:text-4xl font-display">{asset.stat}</p>
                    <p className="text-white/30 text-[8px] md:text-[9px] uppercase tracking-widest mt-1 font-bold">{asset.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Anchor Strategy: Better stacking for mobile screens */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 md:mt-12 p-6 md:p-8 bg-surface border border-[#c5a059]/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
        >
          <div className="p-3 md:p-4 bg-[#c5a059]/10 rounded-full flex-shrink-0">
            <Anchor className="text-[#c5a059]" size={24} md:size={32} />
          </div>
          <div>
            <h4 className="text-white font-display text-base md:text-lg uppercase tracking-widest mb-2">The "Anchor" Strategy</h4>
            <p className="text-white/40 text-[11px] md:text-xs font-light leading-relaxed max-w-3xl">
              By integrating massive non-retail attractions, The Dubai Mall ensures high dwell times and repeat visits, creating a self-sustaining ecosystem where entertainment drives global retail sales.
            </p>
          </div>
        </motion.div>
        
        {/* Footer Navigation */}
        <div className="mt-8">
          <SectionFooter nextPage={nextPage} prevPage={prevPage} />
        </div>

        <div className="h-20" />
      </div>
    </SectionWrapper>
  )
}
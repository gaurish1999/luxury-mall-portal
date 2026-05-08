import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Calendar, TrendingUp, Landmark } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { EXPANSION_ROADMAP } from '../data/constants'
import SectionFooter from '../components/SectionFooter'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Roadmap({ nextPage, prevPage }) {
  return (
    <SectionWrapper>
      <div className="relative h-full w-full overflow-hidden">
        
        {/* Background Image: Adjusted opacity for better mobile contrast */}
        <div 
          className="absolute inset-0 z-0 opacity-10 md:opacity-15 grayscale pointer-events-none"
          style={{ 
            backgroundImage: 'url(https://i0.wp.com/picjumbo.com/wp-content/uploads/large-chrome-heart-at-dubai-mall-and-dubai-fountain-free-image.jpg?w=2210&quality=70)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' 
          }}
        />

        <div className="relative z-10 h-full w-full overflow-y-auto custom-scrollbar px-4 md:px-12">
          <div className="py-12 md:py-20 max-w-5xl mx-auto">
            
            {/* 1. Header: Scale down fonts and stack the 'TrendingUp' card on mobile */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[#c5a059] text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase block mb-3 md:mb-4"
                >
                  Future Growth
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-display text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight"
                >
                  AED 1.5B <br/>Expansion Roadmap
                </motion.h2>
              </div>
              
              {/* Stat Card: Smaller padding for mobile */}
              <div className="bg-[#080808]/80 backdrop-blur-md border border-[#c5a059]/20 p-4 md:p-6 rounded-xl flex items-center gap-4">
                <div className="p-2 md:p-3 bg-[#c5a059]/10 rounded-full">
                  <TrendingUp className="text-[#c5a059]" size={20} md:size={24} />
                </div>
                <div>
                  <p className="text-white font-display text-lg md:text-xl tracking-wider">+240</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest">New Luxury Outlets</p>
                </div>
              </div>
            </div>

            {/* 2. Timeline Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Vertical Line: Anchor to the left on mobile (15px) */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c5a059]/50 via-[#c5a059]/20 to-transparent" />

              {EXPANSION_ROADMAP.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={item.phase}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row items-start mb-12 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[15px] md:left-1/2 w-7 h-7 md:w-8 md:h-8 -ml-3.5 md:-ml-4 rounded-full bg-[#080808] border-2 border-[#c5a059] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                      {item.status === 'Completed' ? <CheckCircle2 size={12} className="text-[#c5a059]" /> : <Clock size={12} className="text-[#c5a059]" />}
                    </div>

                    {/* 3. Content Card: Fixed margin for mobile stacking */}
                    <div className={`w-full md:w-[45%] ml-10 md:ml-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-[#080808]/60 backdrop-blur-sm border border-white/5 p-5 md:p-8 rounded-2xl hover:border-[#c5a059]/30 transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-3 md:mb-4">
                          <span className="text-[#c5a059] text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">{item.phase}</span>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest font-semibold">
                            <Calendar size={10} />
                            {item.date}
                          </div>
                        </div>
                        
                        {/* Title & Body: Scaled for iPhone 14 Pro Max */}
                        <h3 className="text-white font-display text-lg md:text-xl uppercase tracking-wider mb-2 md:mb-3 group-hover:text-[#c5a059] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-white/40 text-[11px] md:text-xs font-light leading-relaxed mb-5 md:mb-6">
                          {item.details}
                        </p>
                        
                        <div className="flex items-center gap-3 border-t border-white/5 pt-5 md:pt-6">
                          <Landmark size={12} className="text-[#c5a059]/50" />
                          <div>
                            <p className="text-white/80 text-[11px] md:text-xs font-semibold">{item.investment}</p>
                            <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-widest font-medium">CapEx Allocation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="h-20" />
          </div>
        </div>

        {/* Footer: Positioned relatively to handle the scroll layer */}
        <div className="px-4 md:px-12">
          <SectionFooter nextPage={nextPage} prevPage={prevPage} />
        </div>
        
        <div className="h-20 md:hidden" /> {/* Extra safe area for mobile home bar */}
      </div>
    </SectionWrapper>
  )
}
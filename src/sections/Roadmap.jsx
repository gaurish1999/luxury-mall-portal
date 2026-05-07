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
      {/* 1. Main Relative Container */}
      <div className="relative h-full w-full overflow-hidden">
        
        {/* 2. THE BACKGROUND IMAGE (GHOST LAYER)
           We use 'fixed' or 'absolute inset-0' to keep it behind the content.
           Opacity set to 15% for clear visibility without distracting from data.
        */}
        <div 
          className="absolute inset-0 z-0 opacity-15 grayscale pointer-events-none"
          style={{ 
            backgroundImage: 'url(https://i0.wp.com/picjumbo.com/wp-content/uploads/large-chrome-heart-at-dubai-mall-and-dubai-fountain-free-image.jpg?w=2210&quality=70)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' 
          }}
        />

        {/* 3. SCROLLABLE CONTENT LAYER */}
        <div className="relative z-10 h-full w-full overflow-y-auto custom-scrollbar px-6 md:px-12">
          <div className="py-20 max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[#c5a059] text-xs font-semibold tracking-[0.4em] uppercase block mb-4"
                >
                  Future Growth
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight"
                >
                  AED 1.5B <br/>Expansion Roadmap
                </motion.h2>
              </div>
              
              <div className="bg-[#080808]/80 backdrop-blur-md border border-[#c5a059]/20 p-6 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-[#c5a059]/10 rounded-full">
                  <TrendingUp className="text-[#c5a059]" size={24} />
                </div>
                <div>
                  <p className="text-white font-display text-xl tracking-wider">+240</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">New Luxury Outlets</p>
                </div>
              </div>
            </div>

            {/* Timeline Implementation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Vertical Glowing Line */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c5a059]/50 via-[#c5a059]/20 to-transparent" />

              {EXPANSION_ROADMAP.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={item.phase}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[15px] md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-[#080808] border-2 border-[#c5a059] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                      {item.status === 'Completed' ? <CheckCircle2 size={14} className="text-[#c5a059]" /> : <Clock size={14} className="text-[#c5a059]" />}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] ml-10 md:ml-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-[#080808]/60 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#c5a059]/30 transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase">{item.phase}</span>
                          <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[9px] text-white/40 uppercase tracking-widest font-semibold">
                            <Calendar size={10} />
                            {item.date}
                          </div>
                        </div>
                        
                        <h3 className="text-white font-display text-xl uppercase tracking-wider mb-3 group-hover:text-[#c5a059] transition-colors">{item.title}</h3>
                        <p className="text-white/40 text-xs font-light leading-relaxed mb-6">{item.details}</p>
                        
                        <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                          <Landmark size={14} className="text-[#c5a059]/50" />
                          <div>
                            <p className="text-white/80 text-xs font-semibold">{item.investment}</p>
                            <p className="text-[9px] text-white/30 uppercase tracking-widest">CapEx Allocation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Padding for Scroll Clearance */}
            <div className="h-40" />
          </div>
        </div>
        <SectionFooter nextPage={nextPage} prevPage={prevPage} />
      </div>
    </SectionWrapper>
  )
}
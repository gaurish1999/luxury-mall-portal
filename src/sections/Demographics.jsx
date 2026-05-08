import { motion } from 'framer-motion'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { Users, TrendingUp, Store, Star } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedCounter from '../components/AnimatedCounter'
import { FOOTFALL_DATA, STATS } from '../data/constants'
import SectionFooter from '../components/SectionFooter'

const statIcons = [Users, TrendingUp, Store, Star]

const statBgImages = [
  'https://dmassetsprodcdn.azureedge.net/assets/media/fashion-avenue/seemless-shopping.png',
  '/retail-sales-velocity.webp',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
  '/brands.webp',
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-white/10 px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-2xl">
        <p className="text-white/40 text-[9px] md:text-xs tracking-[0.2em] uppercase mb-1">{label}</p>
        <p className="text-white font-medium text-lg md:text-xl">
          {payload[0].value}M <span className="text-gold text-[10px] tracking-widest uppercase">visits</span>
        </p>
      </div>
    )
  }
  return null
}

export default function Demographics({ nextPage, prevPage }) {
  return (
    <SectionWrapper>
      <div className="w-full py-6 md:py-8">
        
        {/* Header: Fluid Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 md:mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold-light text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase block mb-3 md:mb-4">
            Emaar Properties | Investor Overview
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight">
            The World's <br/>Retail Epicenter
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/60 mt-4 md:mt-6 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            Situated at the heart of Downtown Dubai, The Dubai Mall is the most visited retail destination 
            globally, representing the pinnacle of high-net-worth consumer engagement.
          </motion.p>
        </motion.div>

        {/* Main Data Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          {/* 1. Footfall Chart Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-8 bg-surface border border-white/5 rounded-2xl p-5 md:p-8 hover:border-gold/20 transition-colors duration-500"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between mb-6 md:mb-8 gap-4">
              <div>
                <h3 className="text-white text-[11px] md:text-sm tracking-[0.2em] uppercase font-semibold">Historical Footfall Expansion</h3>
                <p className="text-white/40 text-[10px] md:text-xs mt-1 font-light italic">Total annual visits (Official Data)</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-gold text-2xl md:text-3xl font-display tracking-wider">+79%</p>
                <p className="text-white/40 text-[8px] md:text-[10px] mt-0.5 uppercase tracking-widest">Growth Trend</p>
              </div>
            </div>
            
            <div className="h-56 md:h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={FOOTFALL_DATA} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
                  <defs>
                    <linearGradient id="footfallGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c5a059" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#c5a059" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9 }} axisLine={false} tickLine={false} dy={10} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(197, 160, 89, 0.4)', strokeWidth: 1 }} />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#c5a059"
                    strokeWidth={2}
                    fill="url(#footfallGrad)"
                    dot={{ fill: '#050505', stroke: '#c5a059', strokeWidth: 2, r: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* 2. Global Ranking Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-4 bg-surface border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-gold/20 transition-colors duration-500 relative overflow-hidden group"
          >
            <div 
              className="absolute inset-0 z-0 opacity-10 grayscale group-hover:scale-110 group-hover:opacity-20 transition-all duration-1000 ease-out"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="relative z-10">
              <Star size={20} className="text-gold mb-4 md:mb-6" />
              <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-2">Global Ranking</p>
              <div className="font-display text-4xl md:text-5xl text-white tracking-widest uppercase">
                No.1<span className="text-gold text-lg ml-2 tracking-normal">Global</span>
              </div>
            </div>
            <p className="relative z-10 text-white/50 text-[11px] md:text-sm mt-6 leading-relaxed font-light border-t border-white/10 pt-5">
              Confirming Dubai Mall as the most visited destination on Earth, surpassing major airports and theme parks.
            </p>
          </motion.div>

          {/* 3. Mini Stat Cards: 2-column layout on mobile */}
          {STATS.map((stat, i) => {
            const Icon = statIcons[i]
            const bgImage = statBgImages[i]
            
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="relative overflow-hidden col-span-6 lg:col-span-3 bg-surface border border-white/5 rounded-xl p-5 md:p-8 group hover:border-gold/30 transition-all duration-500"
              >
                <div 
                  className="absolute inset-0 z-0 opacity-10 grayscale group-hover:scale-110 transition-all duration-700 ease-out"
                  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="relative z-10">
                  <Icon size={16} className="text-white/30 group-hover:text-gold transition-colors duration-300 mb-4 md:mb-6" />
                  <div className="font-display text-2xl md:text-4xl text-white mb-1 md:mb-2 tracking-wider">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="text-white/40 text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-bold">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}

          {/* 4. Progress Bars: Wealth Segmentation */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-6 bg-surface border border-white/5 rounded-2xl p-6 md:p-8 hover:border-gold/20"
          >
            <h3 className="text-white text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold mb-6 md:mb-8">Wealth Segmentation</h3>
            <div className="space-y-5 md:space-y-6">
              {[
                { label: 'UHNW & Elite', pct: 32 },
                { label: 'High-Spend Tourists', pct: 44 },
                { label: 'Mass-Affluent Residents', pct: 18 },
                { label: 'Other', pct: 6 },
              ].map(({ label, pct }, index) => (
                <div key={label} className="group">
                  <div className="flex justify-between text-[10px] md:text-xs mb-2">
                    <span className="text-white/60 tracking-wider group-hover:text-white transition-colors">{label}</span>
                    <span className="text-gold font-display tracking-widest">{pct}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.5, delay: 0.4 + (index * 0.1) }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Source Markets: Compressed grid for phones */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-6 bg-surface border border-white/5 rounded-2xl p-6 md:p-8 hover:border-gold/20"
          >
            <h3 className="text-white text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold mb-6 md:mb-8">Top Source Markets</h3>
            <div className="grid grid-cols-2 gap-x-6 md:gap-x-8 gap-y-1 md:gap-y-2">
              {[
                { country: 'India', pct: '24%' },
                { country: 'China', pct: '16%' },
                { country: 'UK', pct: '14%' },
                { country: 'Saudi', pct: '11%' },
                { country: 'Oman', pct: '7%' },
                { country: 'USA', pct: '28%' },
              ].map(({ country, pct }) => (
                <div key={country} className="flex justify-between items-center py-2.5 border-b border-white/5 group hover:border-gold/30 transition-colors">
                  <span className="text-white/50 text-[10px] md:text-xs tracking-wider group-hover:text-white transition-colors">{country}</span>
                  <span className="text-gold font-display text-xs md:text-sm">{pct}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Navigation */}
        <div className="mt-8">
          <SectionFooter nextPage={nextPage} prevPage={prevPage} />
        </div>
      </div>
    </SectionWrapper>
  )
}
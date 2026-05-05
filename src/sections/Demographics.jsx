import { motion } from 'framer-motion'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { Users, TrendingUp, Store, Star } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedCounter from '../components/AnimatedCounter'
import { FOOTFALL_DATA, STATS } from '../data/constants'

const statIcons = [Users, TrendingUp, Store, Star]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Sleek, high-contrast custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-white/10 px-4 py-3 rounded-lg shadow-2xl">
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">{label}</p>
        <p className="text-white font-medium text-xl">
          {payload[0].value}M <span className="text-gold text-xs tracking-widest uppercase">visitors</span>
        </p>
      </div>
    )
  }
  return null
}

export default function Demographics() {
  return (
    <SectionWrapper>
      <div className="w-full py-8">
        
        {/* Header section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold-light text-xs font-semibold tracking-[0.4em] uppercase block mb-4">
            By the Numbers
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight">
            Scale &amp; <br/>Demographics
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/60 mt-6 max-w-2xl text-base font-light leading-relaxed">
            The Mall commands the highest footfall per square foot of any retail destination globally, 
            with a visitor demographic skewing heavily towards affluent and ultra-high-net-worth individuals.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-12 gap-6"
        >
          {/* Chart — Large Cell */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-8 bg-surface border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-colors duration-500"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-white text-sm tracking-[0.2em] uppercase font-semibold">Year-over-Year Footfall</h3>
                <p className="text-white/40 text-xs mt-2 font-light">Annual visitor count (millions)</p>
              </div>
              <div className="text-right">
                <p className="text-gold text-3xl font-display tracking-wider">+61%</p>
                <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">5-yr growth</p>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={FOOTFALL_DATA} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="footfallGrad" x1="0" y1="0" x2="0" y2="1">
                      {/* Using the #c5a059 Hex for your Gold Accent */}
                      <stop offset="0%" stopColor="#c5a059" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#c5a059" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} dy={10} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(197, 160, 89, 0.4)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#c5a059"
                    strokeWidth={3}
                    fill="url(#footfallGrad)"
                    dot={{ fill: '#050505', stroke: '#c5a059', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#c5a059', stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Top Right Stat */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-4 bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-gold/20 transition-colors duration-500"
          >
            <div>
              <Star size={24} className="text-gold mb-6" strokeWidth={1.5} />
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Visitor Satisfaction</p>
              <div className="font-display text-6xl text-white tracking-widest">
                4.9<span className="text-gold text-3xl">/5</span>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-8 leading-relaxed font-light border-t border-white/10 pt-6">
              Consistently rated the #1 most enjoyable luxury destination globally by independent research groups.
            </p>
          </motion.div>

          {/* 4 Mini Stat Cards */}
          {STATS.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="col-span-6 lg:col-span-3 bg-surface border border-white/5 rounded-2xl p-8 group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={20} className="text-white/30 group-hover:text-gold transition-colors duration-300 mb-6" strokeWidth={1.5} />
                <div className="font-display text-3xl md:text-4xl text-white mb-3 tracking-wider">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-white/40 text-xs tracking-[0.1em] uppercase font-semibold">{stat.label}</p>
              </motion.div>
            )
          })}

          {/* Demographic Breakdown Progress Bars */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-6 bg-surface border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-colors duration-500"
          >
            <h3 className="text-white text-xs tracking-[0.2em] uppercase font-semibold mb-8">Visitor Demographic Breakdown</h3>
            <div className="space-y-6">
              {[
                { label: 'Ultra High Net Worth', pct: 28 },
                { label: 'Affluent / High Income', pct: 40 },
                { label: 'Upper Middle Class', pct: 22 },
                { label: 'Other', pct: 10 },
              ].map(({ label, pct }, index) => (
                <div key={label} className="group">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/60 tracking-wider group-hover:text-white transition-colors">{label}</span>
                    <span className="text-gold font-display tracking-widest">{pct}%</span>
                  </div>
                  {/* Progress Bar Track */}
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    {/* The Animated Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.5, delay: 0.4 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* International Markets List */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-6 bg-surface border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-colors duration-500"
          >
            <h3 className="text-white text-xs tracking-[0.2em] uppercase font-semibold mb-8">Primary International Markets</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { country: 'United States', pct: '22%' },
                { country: 'China', pct: '18%' },
                { country: 'United Kingdom', pct: '12%' },
                { country: 'Saudi Arabia', pct: '10%' },
                { country: 'France', pct: '8%' },
                { country: 'Rest of World', pct: '30%' },
              ].map(({ country, pct }) => (
                <div key={country} className="flex justify-between items-center py-3 border-b border-white/5 group hover:border-gold/30 transition-colors">
                  <span className="text-white/50 text-xs tracking-wider group-hover:text-white transition-colors">{country}</span>
                  <span className="text-gold font-display text-sm">{pct}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
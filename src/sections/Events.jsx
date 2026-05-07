import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { EVENT_VENUES } from '../data/constants'
import SectionFooter from '../components/SectionFooter'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Events({ nextPage, prevPage }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <SectionWrapper>
      <div className="w-full py-12">
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold-light text-xs font-semibold tracking-[0.4em] uppercase block mb-4">
            Venue & Activations
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight">
            Premier <br/>Activation Spaces
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/60 mt-6 max-w-2xl text-base font-light leading-relaxed">
            From iconic indoor atriums to exclusive outdoor boardwalks with Burj Khalifa views, 
            The Dubai Mall provides unrivaled stages for global brand takeovers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Venue Cards with Hover Description */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="col-span-12 lg:col-span-7 space-y-6"
          >

{EVENT_VENUES.map((venue) => (
  <motion.div
    key={venue.id}
    variants={itemVariants}
    className="group relative overflow-hidden bg-surface border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:border-gold/30 transition-all duration-500 cursor-default min-h-[14rem]"
  >
    {/* FIXED IMAGE CONTAINER: Locked to w-48 and h-48 to prevent stretching */}
    <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-black/20">
      <img 
        src={venue.image} 
        alt={venue.name} 
        // object-cover is the secret sauce—it crops the 4:3 image into our 1:1 box perfectly
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
      />
    </div>
    
    <div className="flex-grow relative mt-2 md:mt-0">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={14} className="text-gold" />
        <span className="text-gold-light text-[10px] font-bold tracking-widest uppercase">
          {venue.id.replace('-', ' ')}
        </span>
      </div>
      
      <h3 className="text-white font-display text-xl uppercase tracking-wider mb-5 group-hover:text-gold-light transition-colors duration-300">
        {venue.name}
      </h3>
      
      <div className="relative">
        {/* Default State: Stats */}
        <div className="space-y-6 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-2 opacity-100 translate-y-0">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-white/30" />
              <span className="text-white/50 text-xs font-light">{venue.capacity} Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-white/30" />
              <span className="text-white/50 text-xs font-light">Status: Available</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {venue.features.map(feat => (
              <span key={feat} className="text-[9px] px-2.5 py-1 rounded-sm border border-white/10 text-white/40 uppercase tracking-tighter">
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Hover State: Description */}
        <div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-white/70 text-xs leading-relaxed font-light italic">
            “{venue.description}”
          </p>
        </div>
      </div>
    </div>
  </motion.div>
))}
          </motion.div>

          {/* Right Side: Activation Request Form (Unchanged, sticky) */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="col-span-12 lg:col-span-5"
          >
            <div className="sticky top-32 bg-surface border border-gold/10 rounded-2xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[80px] -mr-16 -mt-16" />
              
              <h3 className="text-white font-display text-2xl uppercase tracking-widest mb-2">Request Activation</h3>
              <p className="text-white/40 text-xs font-light mb-8">Connect with the Emaar Leasing team for bespoke event solutions.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 ml-1">Company Name</label>
                  <input type="text" required className="w-full bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:border-gold/40 focus:outline-none transition-colors" placeholder="e.g. LVMH Group"/>
                </div>
                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 ml-1">Preferred Venue</label>
                  <select className="w-full bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-white/60 text-sm focus:border-gold/40 focus:outline-none transition-colors appearance-none">
                    {EVENT_VENUES.map(v => <option key={v.id}>{v.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 ml-1">Proposed Date Range</label>
                  <input type="text" className="w-full bg-black/40 border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:border-gold/40 focus:outline-none transition-colors" placeholder="Q3 - Q4 2026"/>
                </div>

                <button type="submit" className="w-full mt-6 bg-gold hover:bg-gold-light text-obsidian font-bold py-4 rounded-lg uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-2 transition-all duration-300 active:scale-95">
                  {submitted ? <CheckCircle2 size={18} /> : <Send size={16} />}
                  {submitted ? 'Request Sent' : 'Submit Inquiry'}
                </button>
              </form>
              <AnimatePresence>
                {submitted && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-surface/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                    <CheckCircle2 size={48} className="text-gold mb-4" />
                    <h4 className="text-white font-display text-xl uppercase mb-2">Inquiry Received</h4>
                    <p className="text-white/50 text-xs leading-relaxed">The Emaar Concierge team will review your proposal and contact you within 48 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        <SectionFooter nextPage={nextPage} prevPage={prevPage} />
      </div>
    </SectionWrapper>
  )
}
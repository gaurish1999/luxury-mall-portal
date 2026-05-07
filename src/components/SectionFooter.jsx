import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function SectionFooter({ nextPage, prevPage }) {
  return (
    <div className="mt-20 py-12 border-t border-white/5 flex justify-between items-center gap-8">
      {/* PREVIOUS PAGE BUTTON */}
      <button 
        onClick={prevPage.onClick}
        className="group flex items-center gap-4 text-white/30 hover:text-white transition-all duration-300"
      >
        <div className="bg-white/5 group-hover:bg-white/10 p-2 rounded-full transition-colors">
          <ArrowLeft size={16} />
        </div>
        <div className="text-left">
          <p className="text-[9px] uppercase tracking-[0.2em] mb-1">Previous</p>
          <h4 className="text-sm font-semibold uppercase tracking-widest">{prevPage.label}</h4>
        </div>
      </button>

      {/* NEXT PAGE BUTTON */}
      <button 
        onClick={nextPage.onClick}
        className="group flex items-center gap-6 bg-white/5 hover:bg-[#c5a059] border border-white/10 hover:border-[#c5a059] px-8 py-5 rounded-2xl transition-all duration-500"
      >
        <div className="text-right">
          <p className="text-white/40 group-hover:text-black/60 text-[9px] uppercase tracking-[0.3em] mb-1">Next Module</p>
          <h4 className="text-white group-hover:text-black font-display text-lg uppercase tracking-widest">{nextPage.label}</h4>
        </div>
        <div className="bg-white/10 group-hover:bg-black/20 p-2 rounded-full transition-colors">
          <ArrowRight size={20} className="text-white group-hover:text-black" />
        </div>
      </button>
    </div>
  )
}
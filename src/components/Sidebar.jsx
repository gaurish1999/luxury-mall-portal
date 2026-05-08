import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  PieChart, 
  ShoppingBag, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp
} from 'lucide-react';
import {BarChart3, Map, Compass } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Overview', icon: Home },
  { id: 'demographics', label: 'Demographics', icon: PieChart },
  { id: 'retail', label: 'Retail Wings', icon: ShoppingBag },
  { id: 'attractions', label: 'Attractions', icon: Compass },
  { id: 'roadmap', label: 'Expansion', icon: TrendingUp }, 
  { id: 'events', label: 'Events', icon: Calendar },
]

export default function Sidebar({ activeSection, onNavigate }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '280px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="relative z-50 flex h-full flex-col border-r border-white/5 bg-[#080808]"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#080808] text-white/50 shadow-lg shadow-black/50 transition-all hover:scale-110 hover:border-[#c5a059] hover:text-[#c5a059]"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo Area */}
      <div 
        onClick={() => onNavigate('hero')}
        className="group flex h-32 cursor-pointer overflow-hidden items-center justify-center border-b border-white/5 transition-colors hover:bg-white/[0.02]"
      >
        {isCollapsed ? (
          <span className="font-display text-2xl text-[#c5a059] transition-all duration-500 group-hover:text-white">M</span>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex flex-col items-center whitespace-nowrap"
          >
            <span className="font-display text-2xl uppercase tracking-[0.2em] text-white transition-colors group-hover:text-[#c5a059]">The Mall</span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.4em] text-[#c5a059]">Dubai</span>
          </motion.div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-1 flex-col gap-2 px-3 py-10">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative flex cursor-pointer items-center rounded-lg px-3 py-4 transition-all duration-300 ease-out ${
                isActive 
                  ? 'bg-[#c5a059]/10 text-[#c5a059]' 
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              {/* Active Golden Line Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 top-1/4 h-1/2 w-[3px] rounded-r-full bg-[#c5a059]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* Icon */}
              <div className="flex min-w-[24px] justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              </div>

              {/* Label */}
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-6 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-2"
                >
                  {item.label}
                </motion.span>
              )}

              {/* Hover Tooltip for Collapsed State */}
              {isCollapsed && (
                <div className="pointer-events-none absolute left-14 z-50 whitespace-nowrap rounded-md border border-white/10 bg-[#080808] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </nav>
    </motion.aside>
  );
}
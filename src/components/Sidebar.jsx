// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Hop as Home, ChartBar as BarChart2, ShoppingBag, Calendar, Menu, X, Gem } from 'lucide-react'
// import { NAV_SECTIONS } from '../data/constants'

// const iconMap = {
//   home: Home,
//   'bar-chart-2': BarChart2,
//   'shopping-bag': ShoppingBag,
//   calendar: Calendar,
// }

// export default function Sidebar({ activeSection, onNavigate }) {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const navContent = (
//     <div className="flex flex-col h-full">
//       {/* Logo */}
//       <div className="px-8 pt-10 pb-8 border-b border-white/[0.06]">
//         <div className="flex items-center gap-2.5">
//           <Gem size={18} className="text-amber-400" />
//           <span className="font-serif text-xl tracking-[0.12em] text-white uppercase">Apex&nbsp;Centre</span>
//         </div>
//         <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mt-1.5 ml-7">Global Flagship Mall</p>
//       </div>

//       {/* Nav */}
//       <nav className="flex-1 px-4 py-8 space-y-1">
//         {NAV_SECTIONS.map((section, i) => {
//           const Icon = iconMap[section.icon]
//           const isActive = activeSection === section.id
//           return (
//             <motion.button
//               key={section.id}
//               initial={{ opacity: 0, x: -16 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
//               onClick={() => {
//                 onNavigate(section.id)
//                 setMobileOpen(false)
//               }}
//               className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer group relative ${
//                 isActive
//                   ? 'text-white bg-white/[0.08]'
//                   : 'text-white/40 hover:text-white/80 hover:bg-white/[0.04]'
//               }`}
//             >
//               {isActive && (
//                 <motion.div
//                   layoutId="activeIndicator"
//                   className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-amber-400 rounded-full"
//                 />
//               )}
//               <Icon size={16} strokeWidth={1.5} className={`transition-colors ${isActive ? 'text-amber-400' : 'text-white/40 group-hover:text-white/60'}`} />
//               <span className="tracking-wide">{section.label}</span>
//             </motion.button>
//           )
//         })}
//       </nav>

//       {/* Footer */}
//       <div className="px-8 pb-8">
//         <div className="border-t border-white/[0.06] pt-6">
//           <p className="text-white/20 text-[10px] tracking-[0.15em] uppercase">Investor Deck 2025</p>
//           <p className="text-white/15 text-[10px] mt-0.5">Confidential</p>
//         </div>
//       </div>
//     </div>
//   )

//   return (
//     <>
//       {/* Desktop sidebar */}
//       <aside className="hidden lg:flex w-[250px] flex-shrink-0 bg-[#0a0a0a] border-r border-white/[0.06] flex-col h-screen sticky top-0">
//         {navContent}
//       </aside>

//       {/* Mobile hamburger */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setMobileOpen(true)}
//           className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white"
//         >
//           <Menu size={18} />
//         </button>
//       </div>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="lg:hidden fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
//             />
//             <motion.aside
//               initial={{ x: -280 }}
//               animate={{ x: 0 }}
//               exit={{ x: -280 }}
//               transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//               className="lg:hidden fixed left-0 top-0 h-full w-[250px] bg-[#0a0a0a] border-r border-white/[0.06] z-50"
//             >
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white"
//               >
//                 <X size={16} />
//               </button>
//               {navContent}
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, PieChart, ShoppingBag, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview', icon: Home },
  { id: 'demographics', label: 'Demographics', icon: PieChart },
  { id: 'retail', label: 'Luxury Retail', icon: ShoppingBag },
  { id: 'events', label: 'Event Venues', icon: Calendar },
];

export default function Sidebar({ activeSection, onNavigate }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '280px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="relative z-50 flex h-full flex-col border-r border-white/5 bg-surface"
    >
      {/* The Sleek Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-surface text-white/50 shadow-lg shadow-black/50 transition-all hover:scale-110 hover:border-gold hover:text-gold"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

  {/* Luxury Logo Area */}
      <div 
        onClick={() => onNavigate('hero')}
        className="group flex h-32 cursor-pointer overflow-hidden items-center justify-center border-b border-white/5 transition-colors hover:bg-white/[0.02]"
      >
        {isCollapsed ? (
          <span className="font-display text-2xl text-gold transition-all duration-500 group-hover:text-white">M</span>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex flex-col items-center whitespace-nowrap"
          >
            <span className="font-display text-2xl uppercase tracking-[0.2em] text-white transition-colors group-hover:text-gold">The Mall</span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.4em] text-gold-light">Dubai</span>
          </motion.div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-1 flex-col gap-2 px-3 py-10">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative flex cursor-pointer items-center rounded-lg px-3 py-4 transition-all duration-300 ease-out ${
                isActive 
                  ? 'bg-gold/10 text-gold' 
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              {/* Active Golden Line Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 top-1/4 h-1/2 w-[3px] rounded-r-full bg-gold"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* The Icon */}
              <div className="flex min-w-[24px] justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              </div>

              {/* The Label */}
              {!isCollapsed && (
                <span className="ml-6 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              )}

              {/* Hover Tooltip for Collapsed State */}
              {isCollapsed && (
                <div className="pointer-events-none absolute left-14 z-50 whitespace-nowrap rounded-md border border-white/10 bg-obsidian px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
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
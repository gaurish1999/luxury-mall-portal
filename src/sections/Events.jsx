// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Users, Maximize2, Tag, X, Send } from 'lucide-react'
// import SectionWrapper from '../components/SectionWrapper'
// import { VENUES } from '../data/constants'

// const containerVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
// }

// function BookingModal({ venue, onClose }) {
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//     >
//       <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.95, opacity: 0, y: 20 }}
//         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//         className="relative bg-[#0e0e0e] border border-white/[0.08] rounded-2xl w-full max-w-md p-8 z-10"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors"
//         >
//           <X size={16} />
//         </button>

//         {submitted ? (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-6"
//           >
//             <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-4">
//               <Send size={18} className="text-amber-400" />
//             </div>
//             <h3 className="text-white text-lg font-medium mb-2">Request Received</h3>
//             <p className="text-white/40 text-sm leading-relaxed">
//               Our events team will be in touch within 24 hours to discuss <span className="text-white/60">{venue.name}</span> for your event.
//             </p>
//             <button
//               onClick={onClose}
//               className="mt-6 px-6 py-2.5 bg-white/[0.06] text-white/60 text-sm rounded-lg hover:bg-white/10 transition-colors"
//             >
//               Close
//             </button>
//           </motion.div>
//         ) : (
//           <>
//             <span className="text-amber-400 text-xs tracking-[0.2em] uppercase">Request Booking</span>
//             <h3 className="text-white text-xl font-serif font-light mt-2 mb-6">{venue.name}</h3>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {[
//                 { label: 'Full Name', type: 'text', placeholder: 'Your name' },
//                 { label: 'Company', type: 'text', placeholder: 'Organisation' },
//                 { label: 'Email', type: 'email', placeholder: 'you@company.com' },
//               ].map(({ label, type, placeholder }) => (
//                 <div key={label}>
//                   <label className="block text-white/30 text-xs mb-1.5 tracking-wide">{label}</label>
//                   <input
//                     type={type}
//                     placeholder={placeholder}
//                     required
//                     className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-amber-400/40 transition-colors"
//                   />
//                 </div>
//               ))}
//               <div>
//                 <label className="block text-white/30 text-xs mb-1.5 tracking-wide">Event Type</label>
//                 <textarea
//                   placeholder="Tell us about your event..."
//                   rows={3}
//                   className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-amber-400/40 transition-colors resize-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3.5 bg-amber-400 text-black text-sm font-medium tracking-[0.1em] uppercase rounded-lg hover:bg-amber-300 transition-colors duration-200 mt-2"
//               >
//                 Submit Request
//               </button>
//             </form>
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   )
// }

// function VenueCard({ venue }) {
//   const [showModal, setShowModal] = useState(false)
//   const [hovered, setHovered] = useState(false)

//   return (
//     <>
//       <motion.div
//         variants={itemVariants}
//         className="relative group overflow-hidden rounded-2xl bg-[#0e0e0e] border border-white/[0.06] hover:border-white/10 transition-colors duration-300 cursor-pointer"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Image */}
//         <div className="relative h-56 overflow-hidden">
//           <img
//             src={venue.image}
//             alt={venue.name}
//             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-black/30 to-transparent" />

//           {/* Capacity badge */}
//           <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
//             <span className="text-white/70 text-xs flex items-center gap-1.5">
//               <Users size={10} strokeWidth={1.5} />
//               {venue.capacity} capacity
//             </span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <h3 className="font-serif text-white text-xl font-light mb-2">{venue.name}</h3>
//           <p className="text-white/40 text-sm leading-relaxed mb-5">{venue.description}</p>

//           {/* Stats row */}
//           <div className="flex items-center gap-5 mb-5 pb-5 border-b border-white/[0.06]">
//             <div className="flex items-center gap-2 text-white/30 text-xs">
//               <Maximize2 size={12} strokeWidth={1.5} />
//               <span>{venue.sqft} sq ft</span>
//             </div>
//             <div className="flex items-center gap-2 text-white/30 text-xs">
//               <Users size={12} strokeWidth={1.5} />
//               <span>Up to {venue.capacity}</span>
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {venue.tags.map((tag) => (
//               <span key={tag} className="flex items-center gap-1 text-[10px] tracking-wide text-white/30 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
//                 <Tag size={9} strokeWidth={1.5} />
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <button
//             onClick={() => setShowModal(true)}
//             className="w-full py-3 border border-white/10 text-white/60 text-sm tracking-[0.12em] uppercase rounded-xl hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 font-medium"
//           >
//             Request Booking
//           </button>
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {showModal && (
//           <BookingModal venue={venue} onClose={() => setShowModal(false)} />
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default function Events() {
//   return (
//     <SectionWrapper>
//       <div className="min-h-screen bg-[#080808] px-6 lg:px-12 py-16">
//         {/* Header */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="mb-12"
//         >
//           <motion.span variants={itemVariants} className="text-amber-400 text-xs tracking-[0.3em] uppercase">
//             Experiences & Activations
//           </motion.span>
//           <motion.h2
//             variants={itemVariants}
//             className="font-serif text-white mt-3 leading-tight"
//             style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}
//           >
//             Events &amp; Platform
//           </motion.h2>
//           <motion.p variants={itemVariants} className="text-white/40 mt-3 max-w-lg text-sm leading-relaxed">
//             Three world-class venues within a single destination — offering unmatched reach, scale, and production infrastructure for luxury brand activations and large-scale events.
//           </motion.p>
//         </motion.div>

//         {/* Stats row */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-3 gap-4 mb-12"
//         >
//           {[
//             { value: '180+', label: 'Events per year' },
//             { value: '2M+', label: 'Event attendees' },
//             { value: '$240M', label: 'Sponsorship value' },
//           ].map(({ value, label }) => (
//             <motion.div
//               key={label}
//               variants={itemVariants}
//               className="bg-[#0e0e0e] border border-white/[0.06] rounded-xl p-5 text-center"
//             >
//               <p className="font-serif text-white text-2xl font-light">{value}</p>
//               <p className="text-white/30 text-xs mt-1 tracking-wide">{label}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Venue cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
//         >
//           {VENUES.map((venue) => (
//             <VenueCard key={venue.id} venue={venue} />
//           ))}
//         </motion.div>
//       </div>
//     </SectionWrapper>
//   )
// }

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Maximize2, Tag, X, Send } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { VENUES } from '../data/constants'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function BookingModal({ venue, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-surface border border-white/10 rounded-2xl w-full max-w-md p-8 z-10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/30 hover:text-gold transition-colors"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-6"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <Send size={18} className="text-gold" />
            </div>
            <h3 className="text-white font-display text-2xl uppercase tracking-widest mb-2">Request Received</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Our concierge team will be in touch within 24 hours to discuss <span className="text-gold">{venue.name}</span> for your event.
            </p>
            <button
              onClick={onClose}
              className="mt-8 w-full py-3 border border-white/10 text-white/60 text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        ) : (
          <>
            <span className="text-gold-light text-[10px] font-bold tracking-[0.3em] uppercase">Private Booking</span>
            <h3 className="text-white text-2xl font-display uppercase tracking-widest mt-2 mb-6">{venue.name}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { label: 'Company', type: 'text', placeholder: 'Organisation' },
                { label: 'Email', type: 'email', placeholder: 'you@company.com' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required
                    className="w-full bg-obsidian/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">Event Details</label>
                <textarea
                  placeholder="Tell us about your event scale and requirements..."
                  rows={3}
                  className="w-full bg-obsidian/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-obsidian text-xs font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-gold-light transition-colors duration-300 mt-4 cursor-pointer"
              >
                Submit Request
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

function VenueCard({ venue }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        variants={itemVariants}
        className="relative group overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

          {/* Capacity badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-obsidian/80 backdrop-blur-md rounded-sm border border-white/10">
            <span className="text-gold-light text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
              <Users size={10} strokeWidth={2} />
              {venue.capacity} CAP
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-display uppercase tracking-widest text-white text-xl mb-3">{venue.name}</h3>
          <p className="text-white/50 text-sm font-light leading-relaxed mb-6 flex-grow">{venue.description}</p>

          {/* Stats row */}
          <div className="flex items-center gap-6 mb-6 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Maximize2 size={14} className="text-gold" strokeWidth={1.5} />
              <span className="tracking-wider">{venue.sqft} SQ FT</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {venue.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-white/50 bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
                <Tag size={10} className="text-gold/70" strokeWidth={2} />
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full mt-auto py-3.5 border border-white/10 text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition-all duration-500"
          >
            Request Booking
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <BookingModal venue={venue} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Events() {
  return (
    <SectionWrapper>
      <div className="w-full py-8">
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.span variants={itemVariants} className="text-gold-light text-xs font-semibold tracking-[0.4em] uppercase block mb-4">
            Experiences & Activations
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-widest leading-tight"
          >
            Events &amp; <br/>Platform
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/60 mt-6 max-w-2xl text-base font-light leading-relaxed">
            Three world-class venues within a single destination — offering unmatched reach, scale, 
            and production infrastructure for luxury brand activations and large-scale events.
          </motion.p>
        </motion.div>

        {/* High-Level Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { value: '180+', label: 'Events per year' },
            { value: '2M+', label: 'Event attendees' },
            { value: '$240M', label: 'Sponsorship value' },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-colors duration-500"
            >
              <p className="font-display text-gold text-4xl md:text-5xl tracking-wider mb-2">{value}</p>
              <p className="text-white/40 text-[10px] tracking-[0.2em] font-bold uppercase">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Venue cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {VENUES.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
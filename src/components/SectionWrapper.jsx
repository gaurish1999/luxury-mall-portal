import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '', noPadding = false }) {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth ${
        noPadding ? '' : 'px-8 py-16 md:px-16 md:py-20 lg:px-24'
      } ${className}`}
    >
 
      <div className={`mx-auto ${noPadding ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>

    </motion.div>
  )
}
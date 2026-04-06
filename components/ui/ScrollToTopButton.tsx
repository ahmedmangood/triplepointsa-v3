'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function ScrollToTopButton() {
  const { isRTL } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 320)
    }

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className={`fixed bottom-8 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 bg-[#0d2a3a]/85 text-gold-500 shadow-lg shadow-black/30 backdrop-blur-md transition-colors hover:bg-[#11354a] ${
            isRTL ? 'right-6' : 'right-6'
          }`}
          aria-label={isRTL ? 'العودة إلى الأعلى' : 'Scroll to top'}
          title={isRTL ? 'العودة إلى الأعلى' : 'Scroll to top'}
        >
          <ChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

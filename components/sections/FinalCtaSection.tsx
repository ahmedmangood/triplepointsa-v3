'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function FinalCtaSection() {
  const { t, isRTL } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Gold line */}
          <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mx-auto mb-8" />

          <h2 className="display-lg text-white mb-5">{t.finalCta.title}</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">{t.finalCta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold rounded-xl transition-colors shadow-lg shadow-gold-500/25 text-base"
              >
                {t.finalCta.cta1}
                <ArrowIcon size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#25D366]/25 text-base"
              >
                <MessageCircle size={20} />
                {t.finalCta.cta2}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

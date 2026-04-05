'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useI18n } from '@/lib/i18n/context'

export default function HowWeWorkSection() {
  const { t } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="py-24 bg-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="badge mb-4 mx-auto">{t.howWeWork.title}</span>
          <h2 className="display-md text-white mt-4">{t.howWeWork.subtitle}</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-12 start-1/3 end-1/3 h-px bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0 pointer-events-none" />

          {t.howWeWork.steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative text-center group"
            >
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 group-hover:border-gold-500/60 transition-colors" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-teal-700 to-teal-900 group-hover:from-teal-600 transition-colors" />
                <span className="relative text-gold-500 font-black text-2xl counter-number">{step.num}</span>
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

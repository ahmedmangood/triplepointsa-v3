'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, ChevronLeft, ChevronRight, User2Icon } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function TestimonialsSection() {
  const { t, isRTL } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [active, setActive] = useState(0)
  const items = t.testimonials.items

  const prev = () => setActive((a) => (a === 0 ? items.length - 1 : a - 1))
  const next = () => setActive((a) => (a === items.length - 1 ? 0 : a + 1))

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="badge mb-4 mx-auto">{t.testimonials.title}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Quote icon */}
          <div className="absolute -top-16 start-4 text-gold-500/20">
            <Quote size={80} fill="currentColor" />
          </div>

          {/* Testimonial card */}
          <div className="relative rounded-3xl dark:bg-teal-800 bg-teal-700 p-10 border border-gold-500/15 min-h-[220px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 30 : -30 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="text-white/80 text-lg leading-relaxed mb-6 relative z-10">
                  "{items[active].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 border-2 border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-500 font-bold text-sm">
                      <User2Icon />
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{items[active].name}</div>
                    <div className="text-white/40 text-xs">{items[active].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? 'w-8 bg-gold-500' : 'w-2 dark:bg-white/20 bg-gold-400 hover:bg-white/40'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={isRTL ? next : prev}
                className="w-10 h-10 rounded-xl border border-gold-400 hover:border-gold-500/40 text-white/40 hover:text-gold-500 transition-all flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronRight size={18} className='text-gold-400' />
              </button>
              <button
                onClick={isRTL ? prev : next}
                className="w-10 h-10 rounded-xl border border-gold-400 hover:border-gold-500/40 text-white/40 hover:text-gold-500 transition-all flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronLeft size={18} className='text-gold-400' />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

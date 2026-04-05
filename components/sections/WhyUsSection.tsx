'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { CheckCircle2, Headphones, Settings, ShieldCheck } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

const pointIcons = [CheckCircle2, Headphones, Settings, ShieldCheck]

export default function WhyUsSection() {
  const { t } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const { ref: countersRef, inView: countersVisible } = useInView({ triggerOnce: true, threshold: 0.3 })

  const counters = Object.values(t.why.counters)

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-teal-950 to-teal-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 mx-auto">{t.why.title}</span>
          <h2 className="display-md text-white mt-4">{t.why.subtitle}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {t.why.points.map((point, i) => {
              const Icon = pointIcons[i]
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 border border-gold-500/10 hover:border-gold-500/25 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/25 flex items-center justify-center mb-4 group-hover:bg-gold-500/25 transition-colors">
                    <Icon size={18} className="text-gold-500" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{point.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Counters */}
          <motion.div
            ref={countersRef}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {counters.map((counter, i) => (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 200 }}
                className="relative border-gold-animated rounded-3xl p-8 text-center"
              >
                {/* Corner accent */}
                <div className="absolute top-2 end-2 w-2 h-2 bg-gold-500 rounded-full" />
                <div className="text-5xl font-black text-gold-500 counter-number mb-2">
                  {countersVisible ? (
                    <CountUp
                      end={counter.value}
                      duration={2.5}
                      delay={0.5 + i * 0.2}
                      suffix={counter.value === 98 ? '' : '+'}
                    />
                  ) : (
                    '0'
                  )}
                  {counter.value !== 98 && ''}
                </div>
                <div className="text-white/60 text-sm font-medium">{counter.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useI18n } from '@/lib/i18n/context'

// Placeholder client names (SVG text logos)
const clients = [
  { name: 'وزارة المالية', nameEn: 'Ministry of Finance', abbr: 'MOF' },
  { name: 'بنك الرياض', nameEn: 'Riyad Bank', abbr: 'RB' },
  { name: 'مجموعة مستشفيات', nameEn: 'Hospital Group', abbr: 'HG' },
  { name: 'أرامكو السعودية', nameEn: 'Saudi Aramco', abbr: 'SA' },
  { name: 'البنك الأهلي', nameEn: 'National Bank', abbr: 'NB' },
  { name: 'الاتصالات السعودية', nameEn: 'STC', abbr: 'STC' },
]

export default function ClientsSection() {
  const { t, isRTL } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-teal-950/95 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-white/90 font-bold text-xl mb-2">{t.clients.title}</h2>
          <p className="text-white/40 text-sm">{t.clients.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.abbr}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 hover:border-gold-500/20 bg-white/3 hover:bg-white/6 transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 border border-gold-500/20 flex items-center justify-center mb-2 group-hover:border-gold-500/40 transition-colors">
                <span className="text-gold-500 font-bold text-xs font-display">{client.abbr}</span>
              </div>
              <span className="text-white/40 text-xs text-center group-hover:text-white/60 transition-colors leading-tight">
                {isRTL ? client.name : client.nameEn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

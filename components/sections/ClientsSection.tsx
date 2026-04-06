'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useI18n } from '@/lib/i18n/context'
import Image from 'next/image'

// Placeholder client names (SVG text logos)
const clients = [

  { name: 'البنك الأهلي السعودي', nameEn: 'National Commercial Bank of Saudi Arabia', img: 'partener03.webp' },
  { name: 'مجموعة القحطاني للسيارات', nameEn: 'Al Qahtani Group', img: 'partener04.webp' },
  { name: 'الجميح للسيارات', nameEn: 'Al Jomaih Group', img: 'partener01.webp' },
  { name: 'شركة الباني المتحدة', nameEn: 'Al Bani United Company', img: 'partener07.webp' },
  { name: 'شركة أمسي', nameEn: 'Amsi Company', img: 'partener05.webp' },
  { name: 'هيئة تنظيم المياة والكهرباء', nameEn: 'Water and Electricity Regulatory Authority', img: 'partener02.webp' },
  { name: 'شركة دي سي بي السعودية', nameEn: 'DCP Saudi Company', img: 'partener06.webp' },

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

        <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.nameEn}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 hover:border-gold-500/20 bg-white/3 hover:bg-white/6 transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-20 h-20 rounded-xl bg-white border border-gold-500/20 flex items-center justify-center mb-2 group-hover:border-gold-500/40 transition-colors">
                <Image src={`/parteners/${client.img}`} className="text-gold-500 font-bold text-xs font-display" alt={client.nameEn} width={100} height={100}/>
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

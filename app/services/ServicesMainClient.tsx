'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Monitor, Users, Shield, Home, ArrowLeft, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

const serviceCards = [
  { key: 'meetingRooms', Icon: Monitor, href: '/services/meeting-rooms', gradient: 'from-teal-700 to-teal-900' },
  { key: 'queue', Icon: Users, href: '/services/queue-management', gradient: 'from-teal-800 to-charcoal-800' },
  { key: 'security', Icon: Shield, href: '/services/security-surveillance', gradient: 'from-charcoal-700 to-teal-900' },
  { key: 'smartHome', Icon: Home, href: '/services/smart-home', gradient: 'from-teal-600 to-charcoal-900' },
]

export default function ServicesMainClient() {
  const { t, isRTL } = useI18n()
  const sp = t.servicesPage
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mx-auto mb-6" />
            <h1 className="display-xl text-white mb-4">{sp.hero.title}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{sp.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCards.map(({ key, Icon, href, gradient }, i) => {
              const data = sp[key as keyof typeof sp] as { title: string; subtitle: string; desc: string; benefits: string[]; industries: string[] }
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={href} className="group block h-full">
                    <div className={`h-full bg-gradient-to-br ${gradient} rounded-3xl p-8 border border-white/10 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}>
                      {/* Background grid */}
                      <div className="absolute inset-0 grid-pattern opacity-10" />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-500/25 flex items-center justify-center mb-6 group-hover:bg-gold-500/25 transition-colors">
                          <Icon size={26} className="text-gold-500" />
                        </div>

                        {/* Text */}
                        <h2 className="text-white font-bold text-2xl mb-2">{data.title}</h2>
                        <p className="text-gold-400/80 text-sm mb-4">{data.subtitle}</p>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">{data.desc}</p>

                        {/* Benefits preview */}
                        <ul className="space-y-2 mb-6">
                          {data.benefits.slice(0, 3).map((b) => (
                            <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>

                        {/* Industries */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {data.industries.map((ind) => (
                            <span key={ind} className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-white/60 border border-white/10">{ind}</span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold group-hover:gap-3 transition-all">
                          <span>{t.common.readMore}</span>
                          <ArrowIcon size={15} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  )
}

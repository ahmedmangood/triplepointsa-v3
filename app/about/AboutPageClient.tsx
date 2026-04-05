'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Heart, ArrowLeft, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mx-auto mb-6" />
          <h1 className="display-xl text-white mb-4">{title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutPageClient() {
  const { t, isRTL } = useI18n()
  const { about } = t
  const { ref: storyRef, inView: storyVisible } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: valuesRef, inView: valuesVisible } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <PageHero title={about.hero.title} subtitle={about.hero.subtitle} />

      {/* Story + Vision + Mission */}
      <section ref={storyRef} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              animate={storyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="badge mb-4">{about.story.title}</span>
              <div className="mt-4 space-y-4">
                {about.story.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-charcoal-600 dark:text-white/60 leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              animate={storyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Vision */}
              <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl p-7 border border-gold-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/25 flex items-center justify-center">
                    <Eye size={18} className="text-gold-500" />
                  </div>
                  <h2 className="text-white font-bold text-lg">{about.vision.title}</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{about.vision.body}</p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-charcoal-800 to-teal-900 rounded-2xl p-7 border border-gold-500/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/25 flex items-center justify-center">
                    <Target size={18} className="text-gold-500" />
                  </div>
                  <h2 className="text-white font-bold text-lg">{about.mission.title}</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{about.mission.body}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-teal-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <span className="badge mb-4 mx-auto">{about.values.title}</span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.items.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-gold-500/10 hover:border-gold-500/30 transition-colors text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <Heart size={20} className="text-gold-500" />
                </div>
                <h3 className="text-white font-bold mb-2">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4 mx-auto">{about.team.title}</span>
          <p className="text-charcoal-500 dark:text-white/50 mt-4 max-w-xl mx-auto">{about.team.subtitle}</p>
          {/* Team grid placeholder */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: isRTL ? 'م. أحمد الشمري' : 'Eng. Ahmed Al-Shamri', role: isRTL ? 'المدير التنفيذي' : 'CEO' },
              { name: isRTL ? 'م. سارة العتيبي' : 'Eng. Sara Al-Otaibi', role: isRTL ? 'مدير المشاريع' : 'Projects Director' },
              { name: isRTL ? 'م. خالد الدوسري' : 'Eng. Khalid Al-Dawsari', role: isRTL ? 'مدير التقنية' : 'CTO' },
              { name: isRTL ? 'م. نورة القحطاني' : 'Eng. Noura Al-Qahtani', role: isRTL ? 'مدير العمليات' : 'Operations Director' },
            ].map((member) => (
              <div key={member.name} className="group bg-white dark:bg-charcoal-800 rounded-2xl p-6 border border-gray-100 dark:border-white/8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-teal-900 border-2 border-gold-500/25 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-500 font-bold text-lg">
                    {member.name.split(' ').map(w => w[0]).filter(c => /[أ-يa-zA-Z]/.test(c)).slice(0, 2).join('')}
                  </span>
                </div>
                <h3 className="text-charcoal-800 dark:text-white font-bold text-sm mb-1">{member.name}</h3>
                <p className="text-charcoal-400 dark:text-white/40 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  )
}

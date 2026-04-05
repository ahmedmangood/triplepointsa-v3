'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, CheckCircle2, Building2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

const sectorColors: Record<string, { bg: string; text: string; border: string }> = {
  health:     { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  government: { bg: 'bg-blue-500/15',    text: 'text-blue-400',    border: 'border-blue-500/30' },
  finance:    { bg: 'bg-gold-500/15',    text: 'text-gold-500',    border: 'border-gold-500/30' },
  corporate:  { bg: 'bg-purple-500/15',  text: 'text-purple-400',  border: 'border-purple-500/30' },
}

const cardGradients = [
  'from-teal-800 to-teal-600',
  'from-charcoal-800 to-teal-800',
  'from-teal-900 to-charcoal-700',
  'from-teal-700 to-charcoal-900',
  'from-charcoal-700 to-teal-700',
  'from-teal-800 to-charcoal-800',
]

export default function ProjectsClient() {
  const { t, isRTL } = useI18n()
  const pp = t.projectsPage
  const [filter, setFilter] = useState('all')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filters = [
    { key: 'all', label: pp.filter.all },
    { key: 'health', label: pp.filter.health },
    { key: 'government', label: pp.filter.government },
    { key: 'finance', label: pp.filter.finance },
    { key: 'corporate', label: pp.filter.corporate },
  ]

  const filtered = filter === 'all' ? pp.items : pp.items.filter(p => p.sector === filter)

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mx-auto mb-6" />
            <h1 className="display-xl text-white mb-4">{pp.hero.title}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{pp.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap gap-2 mb-12"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  filter === f.key
                    ? 'bg-teal-700 text-white border-teal-600 shadow-md'
                    : 'bg-white dark:bg-charcoal-800 text-charcoal-500 dark:text-white/50 border-gray-200 dark:border-white/10 hover:border-teal-500/50 hover:text-teal-700 dark:hover:text-gold-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const colors = sectorColors[project.sector] || sectorColors.corporate
                return (
                  <motion.article
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Visual header */}
                    <div className={`h-44 bg-gradient-to-br ${cardGradients[i % cardGradients.length]} relative overflow-hidden`}>
                      <div className="absolute inset-0 grid-pattern opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 size={52} className="text-white/15" />
                      </div>

                      {/* Top badges */}
                      <div className="absolute top-4 start-4 end-4 flex items-start justify-between">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
                          {project.sectorLabel}
                        </span>
                        <div className="flex items-center gap-1 text-white/60 text-xs">
                          <MapPin size={11} />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Bottom shimmer line */}
                      <div className="absolute bottom-0 start-0 end-0 h-px bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-charcoal-800 dark:text-white font-bold text-base mb-3 leading-snug group-hover:text-teal-700 dark:group-hover:text-gold-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-charcoal-500 dark:text-white/50 text-sm leading-relaxed mb-5">
                        {project.scope}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-white/6">
                        <p className="text-xs font-semibold text-charcoal-400 dark:text-white/30 uppercase tracking-wider mb-3">
                          {isRTL ? 'نطاق التنفيذ' : 'Scope of Work'}
                        </p>
                        {project.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-charcoal-600 dark:text-white/50">
                            <CheckCircle2 size={12} className="text-gold-500 flex-shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-charcoal-400 dark:text-white/30">
              {isRTL ? 'لا توجد مشاريع في هذا القطاع حالياً' : 'No projects in this sector yet'}
            </div>
          )}
        </div>
      </section>

      <FinalCtaSection />
    </>
  )
}

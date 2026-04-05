'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, ArrowRight, MapPin, Building2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

const sectorColors: Record<string, string> = {
  'صحة': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'حكومة': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'مالية': 'bg-gold-500/20 text-gold-500 border-gold-500/30',
  'Healthcare': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Government': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Finance': 'bg-gold-500/20 text-gold-500 border-gold-500/30',
}

// Simple gradient visuals for projects
const projectGradients = [
  'from-teal-800 via-teal-700 to-teal-600',
  'from-charcoal-800 via-teal-800 to-charcoal-700',
  'from-teal-900 via-charcoal-800 to-teal-700',
]

export default function ProjectsSection() {
  const { t, isRTL } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="badge mb-3">{t.projects.title}</span>
            <h2 className="display-md text-charcoal-800 dark:text-white mt-3">{t.projects.subtitle}</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-500 font-semibold hover:gap-3 transition-all text-sm shrink-0"
          >
            {t.projects.viewAll}
            <ArrowIcon size={16} />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Visual */}
              <div className={`h-48 bg-gradient-to-br ${projectGradients[i]} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 size={48} className="text-white/20" />
                </div>
                {/* Sector badge */}
                <div className="absolute top-4 start-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${sectorColors[project.sector] || 'bg-white/20 text-white border-white/20'}`}>
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-charcoal-800 dark:text-white font-bold text-lg mb-3 leading-snug group-hover:text-teal-700 dark:group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-charcoal-500 dark:text-white/50 text-sm leading-relaxed mb-5">{project.desc}</p>

                {/* Scope */}
                <div className="space-y-2">
                  {project.scope.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-charcoal-500 dark:text-white/40">
                      <div className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

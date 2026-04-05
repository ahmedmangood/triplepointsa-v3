'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MessageCircle, Play } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import Image from 'next/image'

const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function HeroSection() {
  const { t, isRTL } = useI18n()
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen  grid-pattern flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#0b4f8a]/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#041a33]/85 via-[#0b5ea8]/55 to-[#06284a]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(86,180,255,0.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(22,122,204,0.2),transparent_36%),radial-gradient(circle_at_50%_85%,rgba(8,45,86,0.4),transparent_42%)] pointer-events-none" />

      {/* Decorative circles */}
      <motion.div
        className="absolute top-1/4 end-1/4 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 start-1/3 w-64 h-64 rounded-full bg-gold-500/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 start-10 w-px h-32 bg-gradient-to-b from-gold-500/0 via-gold-500/40 to-gold-500/0" />
        <div className="absolute bottom-32 end-16 w-px h-48 bg-gradient-to-b from-gold-500/0 via-gold-500/30 to-gold-500/0" />
        <div className="absolute top-40 end-1/3 w-24 h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge mb-6 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              {t.hero.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="display-xl dark:text-white mb-4"
            >
              {t.hero.title}{' '}
              <span className="text-gradient-gold block sm:inline">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="dark:text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5"
              >
                {t.hero.cta1}
                <ArrowIcon size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-black dark:border-white/20 hover:border-gold-500/50 dark:text-white/80 hover:text-white font-medium rounded-xl transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
              >
                <Play size={16} className="text-gold-500" />
                {t.hero.cta2}
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="relative hidden lg:block"
          >
            {/* Central tech graphic */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-gold-500/15 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-teal-500/20 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-gold-500/10 animate-[spin_15s_linear_infinite]" />

              {/* Center card */}
              <div className="absolute inset-16 glass rounded-3xl border border-gold-500/20 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 border border-gold-500/30 flex items-center justify-center mb-4">
                <Image src="/logo.png" width={80} height={80} alt='logo'/>
                </div>
                <p className="text-white font-bold text-sm">{t.meta.co_title}</p>
                <p className="text-gold-500/70 text-xs mt-1">{t.meta.co_headline}</p>
              </div>

              {/* Floating service badges */}
              {[
                { label: isRTL ? 'تجهيز قاعات الاجتماعات' : 'Meeting Systems', pos: 'top-0 start-0', delay: 0 },
                { label: isRTL ? 'أجهزة صفوف الإنتظار' : 'Queue Mgmt', pos: 'top-0 end-0', delay: 0.5 },
                { label: isRTL ? 'مقاولات الكهرباء' : 'Electrical Contracting', pos: 'top-40 -end-18', delay: 0.5 },
                { label: isRTL ? 'الأنظمة الأمنية وكاميرات المراقبة' : 'Security', pos: 'bottom-0 start-0', delay: 1 },
                { label: isRTL ? 'حلول المنزل الذكي' : 'Smart Homes', pos: 'bottom-0 end-0', delay: 1.5 },
                { label: isRTL ? 'خدمات التيار الخفيف' : 'Low Current Services', pos: 'top-40 -start-20', delay: 1.5 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + badge.delay, type: 'spring' }}
                  className={`absolute ${badge.pos} glass rounded-xl px-3 py-2 border border-gold-500/20 text-xs text-white/80 font-medium whitespace-nowrap`}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '200+', label: t.hero.stats.projects },
            { value: '80+', label: t.hero.stats.clients },
            { value: '10+', label: t.hero.stats.years },
            { value: '24/7', label: t.hero.stats.support },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="glass rounded-2xl px-6 py-4 border border-gold-500/10 text-center"
            >
              <div className="text-3xl font-bold text-gold-500 counter-number">{stat.value}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

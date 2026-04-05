'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n/context'

export default function NotFound() {
  const { isRTL } = useI18n()

  return (
    <div className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="text-gold-500 font-black text-9xl counter-number mb-4 opacity-20">404</div>
          <h1 className="text-white font-bold text-2xl mb-4">
            {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>
          <p className="text-white/50 mb-8">
            {isRTL
              ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold rounded-xl transition-colors"
          >
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

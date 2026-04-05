'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function Section({ children, className = '', id, delay = 0 }: SectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function FadeIn({ children, className = '', delay = 0 }: SectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

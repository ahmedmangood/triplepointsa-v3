'use client'
import { Shield } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function SecurityClient() {
  return <ServiceDetailPage Icon={Shield} gradient="from-charcoal-900 via-teal-900 to-charcoal-800" dataKey="security" />
}

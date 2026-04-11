'use client'
import { Zap } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function ElectricalClient() {
  return <ServiceDetailPage Icon={Zap} gradient="from-charcoal-900 via-teal-800 to-charcoal-800" dataKey="electrical" />
}

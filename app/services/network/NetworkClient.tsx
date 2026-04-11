'use client'
import { Network } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function NetworkClient() {
  return <ServiceDetailPage Icon={Network} gradient="from-teal-900 via-charcoal-800 to-teal-800" dataKey="network" />
}

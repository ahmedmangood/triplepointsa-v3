'use client'
import { Code2 } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function SoftwareClient() {
  return <ServiceDetailPage Icon={Code2} gradient="from-teal-800 via-teal-950 to-charcoal-900" dataKey="software" />
}

'use client'
import { Home } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function SmartHomeClient() {
  return <ServiceDetailPage Icon={Home} gradient="from-teal-700 via-teal-900 to-charcoal-900" dataKey="smartHome" />
}

'use client'
import { Users } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function QueueClient() {
  return <ServiceDetailPage Icon={Users} gradient="from-teal-900 via-charcoal-800 to-teal-800" dataKey="queue" />
}

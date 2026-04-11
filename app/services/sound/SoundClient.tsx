'use client'
import { Volume2 } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function SoundClient() {
  return <ServiceDetailPage Icon={Volume2} gradient="from-teal-800 via-charcoal-800 to-teal-900" dataKey="sound" />
}

'use client'

import { Tv } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function VideoWallClient() {
  return <ServiceDetailPage Icon={Tv} gradient="from-charcoal-800 via-teal-800 to-teal-900" dataKey="videoWall" />
}

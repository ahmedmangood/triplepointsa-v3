'use client'
import { Monitor } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function MeetingRoomsClient() {
  return <ServiceDetailPage Icon={Monitor} gradient="from-teal-800 via-teal-700 to-teal-900" dataKey="meetingRooms" />
}

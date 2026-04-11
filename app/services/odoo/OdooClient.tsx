'use client'
import { BarChart3 } from 'lucide-react'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function OdooClient() {
  return <ServiceDetailPage Icon={BarChart3} gradient="from-charcoal-900 via-teal-900 to-teal-700" dataKey="odoo" />
}

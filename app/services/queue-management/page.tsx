import type { Metadata } from 'next'
import QueueClient from './QueueClient'

export const metadata: Metadata = {
  title: 'أنظمة إدارة الطوابير | Triple Point',
  description: 'أنظمة إدارة الطوابير الذكية من Triple Point — تذاكر رقمية، شاشات عرض، وتقارير الأداء للمستشفيات والبنوك والجهات الحكومية.',
  alternates: { canonical: 'https://triplepoint.sa/services/queue-management' },
}

export default function QueuePage() {
  return <QueueClient />
}

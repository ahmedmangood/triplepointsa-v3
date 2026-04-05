import type { Metadata } from 'next'
import ServicesMainClient from './ServicesMainClient'

export const metadata: Metadata = {
  title: 'خدماتنا | Triple Point',
  description: 'حلول تقنية متكاملة: أنظمة قاعات الاجتماعات، إدارة الطوابير، الأمن والمراقبة، المنازل والمباني الذكية.',
  alternates: { canonical: 'https://triplepoint.sa/services' },
}

export default function ServicesPage() {
  return <ServicesMainClient />
}

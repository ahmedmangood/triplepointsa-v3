import type { Metadata } from 'next'
import SoftwareClient from './SoftwareClient'

export const metadata: Metadata = {
  title: 'البرمجيات المتخصصة | Triple Point',
  description: 'تطوير تطبيقات الجوال، المواقع الإلكترونية، وخدمات الخوادم — حلول برمجية مخصصة لمؤسستك في المملكة العربية السعودية.',
  alternates: { canonical: 'https://triplepoint.sa/services/software' },
}

export default function SoftwarePage() {
  return <SoftwareClient />
}

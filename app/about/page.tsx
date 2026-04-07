import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'من نحن | Triple Point',
  description: 'تعرف على شركة Triple Point — شركة سعودية متخصصة في الحلول التقنية المتكاملة للمؤسسات الحكومية والصحية والمالية.',
  alternates: { canonical: 'https://triplepointsa.com/about' },
}

export default function AboutPage() {
  return <AboutPageClient />
}

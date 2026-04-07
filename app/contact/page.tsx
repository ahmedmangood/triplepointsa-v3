import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'تواصل معنا | Triple Point',
  description: 'تواصل مع فريق Triple Point للحصول على عرض سعر أو استشارة مجانية — نحن في الرياض، المملكة العربية السعودية.',
  alternates: { canonical: 'https://triplepointsa.com/contact' },
}

export default function ContactPage() {
  return <ContactClient />
}

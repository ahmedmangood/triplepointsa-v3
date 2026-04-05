import type { Metadata } from 'next'
import SmartHomeClient from './SmartHomeClient'

export const metadata: Metadata = {
  title: 'المنازل والمباني الذكية | Triple Point',
  description: 'حلول المنازل والمباني الذكية من Triple Point — تحكم في الإضاءة والتكييف والأمن والترفيه من مكان واحد.',
  alternates: { canonical: 'https://triplepoint.sa/services/smart-home' },
}

export default function SmartHomePage() {
  return <SmartHomeClient />
}

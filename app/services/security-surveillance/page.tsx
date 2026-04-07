import type { Metadata } from 'next'
import SecurityClient from './SecurityClient'

export const metadata: Metadata = {
  title: 'أنظمة الأمن والمراقبة | Triple Point',
  description: 'أنظمة الأمن والمراقبة من Triple Point — كاميرات IP بدقة 4K، أنظمة إنذار ذكية، وتحكم مركزي للمؤسسات السعودية.',
  alternates: { canonical: 'https://triplepointsa.com/services/security-surveillance' },
}

export default function SecurityPage() {
  return <SecurityClient />
}

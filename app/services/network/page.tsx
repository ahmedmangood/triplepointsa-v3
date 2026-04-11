import type { Metadata } from 'next'
import NetworkClient from './NetworkClient'

export const metadata: Metadata = {
  title: 'البنية التحتية للشبكات | Triple Point',
  description: 'تصميم وتمديد وتركيب شبكات الاتصالات والبيانات — كابلات Cat6 وAlfa وFiber ونقاط Wi-Fi 6 للمؤسسات السعودية.',
  alternates: { canonical: 'https://triplepoint.sa/services/network' },
}

export default function NetworkPage() {
  return <NetworkClient />
}

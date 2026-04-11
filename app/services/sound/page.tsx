import type { Metadata } from 'next'
import SoundClient from './SoundClient'

export const metadata: Metadata = {
  title: 'أنظمة الصوت والصوتيات | Triple Point',
  description: 'توريد وتركيب أنظمة صوت احترافية لقاعات المؤتمرات والمساجد والمراكز التجارية — تصميم صوتي مدروس وتركيب دقيق.',
  alternates: { canonical: 'https://triplepoint.sa/services/sound' },
}

export default function SoundPage() {
  return <SoundClient />
}

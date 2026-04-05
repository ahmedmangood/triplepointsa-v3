import type { Metadata } from 'next'
import MeetingRoomsClient from './MeetingRoomsClient'

export const metadata: Metadata = {
  title: 'أنظمة قاعات الاجتماعات | Triple Point',
  description: 'حلول قاعات الاجتماعات الذكية من Triple Point — نظام حجز ذكي، شاشات تفاعلية، ومؤتمرات فيديو متكاملة للمؤسسات السعودية.',
  alternates: { canonical: 'https://triplepoint.sa/services/meeting-rooms' },
}

export default function MeetingRoomsPage() {
  return <MeetingRoomsClient />
}

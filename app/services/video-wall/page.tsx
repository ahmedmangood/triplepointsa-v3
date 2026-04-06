import type { Metadata } from 'next'
import VideoWallClient from './VideoWallClient'

export const metadata: Metadata = {
  title: 'الشاشات الجدارية | Triple Point',
  description: 'حلول الشاشات الجدارية Video Wall من Triple Point لغرف التحكم والردهات والمعارض مع إدارة محتوى مركزية وتشغيل احترافي مستمر.',
  alternates: { canonical: 'https://triplepoint.sa/services/video-wall' },
}

export default function VideoWallPage() {
  return <VideoWallClient />
}

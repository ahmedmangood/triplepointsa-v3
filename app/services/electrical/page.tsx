import type { Metadata } from 'next'
import ElectricalClient from './ElectricalClient'

export const metadata: Metadata = {
  title: 'أعمال المقاولات الكهربائية | Triple Point',
  description: 'إنشاء وتركيب المنظومات الكهربائية الكاملة للمشاريع التجارية والحكومية والصناعية — تنفيذ متوافق مع معايير السلامة السعودية.',
  alternates: { canonical: 'https://triplepoint.sa/services/electrical' },
}

export default function ElectricalPage() {
  return <ElectricalClient />
}

import type { Metadata } from 'next'
import OdooClient from './OdooClient'

export const metadata: Metadata = {
  title: 'نظام Odoo ERP | Triple Point',
  description: 'تطبيق وتخصيص نظام Odoo ERP للمؤسسات السعودية — محاسبة، مخزون، موارد بشرية، مبيعات، وأكثر في منصة واحدة متكاملة.',
  alternates: { canonical: 'https://triplepoint.sa/services/odoo' },
}

export default function OdooPage() {
  return <OdooClient />
}

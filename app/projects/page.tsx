import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'مشاريعنا | Triple Point',
  description: 'اكتشف مشاريع Triple Point الميدانية في قطاعات الصحة والحكومة والمالية والشركات — أعمال حقيقية ونتائج موثّقة.',
  alternates: { canonical: 'https://triplepoint.sa/projects' },
  openGraph: {
    title: 'مشاريع Triple Point',
    description: 'أعمال حقيقية ونتائج موثّقة في مختلف القطاعات السعودية',
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}

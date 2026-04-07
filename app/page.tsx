import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ClientsSection from '@/components/sections/ClientsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

export const metadata: Metadata = {
  title: 'Triple Point | حلول تقنية متكاملة في المملكة العربية السعودية',
  description: 'شركة Triple Point متخصصة في حلول تقنية متكاملة — أنظمة قاعات الاجتماعات، إدارة الطوابير، الأمن والمراقبة، والمنازل الذكية للمؤسسات السعودية.',
  alternates: { canonical: 'https://triplepointsa.com' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  )
}

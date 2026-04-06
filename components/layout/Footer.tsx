'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const { t, isRTL } = useI18n()
  const brandName = t.meta.co_title

  const serviceLinks = [
    { href: '/services/meeting-rooms', label: isRTL ? 'أنظمة قاعات الاجتماعات' : 'Meeting Room Solutions' },
    { href: '/services/queue-management', label: isRTL ? 'إدارة الطوابير' : 'Queue Management' },
    { href: '/services/security-surveillance', label: isRTL ? 'الأمن والمراقبة' : 'Security & Surveillance' },
    { href: '/services/smart-home', label: isRTL ? 'المنازل الذكية' : 'Smart Homes' },
    { href: '/services/video-wall', label: isRTL ? 'الشاشات الجدارية' : 'Video Wall Solutions' },
  ]

  return (
    <footer className="bg-teal-950 border-t border-gold-500/15 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-teal-900 border border-gold-500/30 flex items-center justify-center">
                <span className="text-gold-500 font-bold text-sm font-display">TP</span>
              </div>
              <span className="text-white font-bold text-lg font-display">{brandName}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{t.footer.tagline}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-gold-500 flex-shrink-0" />
                <span>{t.contactPage.info.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <span dir="ltr">{t.contactPage.info.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <span>{t.contactPage.info.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Clock size={15} className="text-gold-500 flex-shrink-0" />
                <span>{t.contactPage.info.hours}</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider gold-line-before">
              {t.footer.links.company}
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: t.nav.home },
                { href: '/about', label: t.nav.about },
                { href: '/projects', label: t.nav.projects },
                { href: '/contact', label: t.nav.contact },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider gold-line-before">
              {t.footer.links.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider gold-line-before">
              {t.footer.links.contact}
            </h3>
            <p className="text-white/50 text-sm mb-5">
              {isRTL
                ? 'مستعد لتطوير بنيتك التقنية؟ تواصل مع فريقنا الآن.'
                : 'Ready to upgrade your technology? Contact our team now.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-teal-900 font-semibold text-sm rounded-xl transition-colors"
            >
              {t.common.getQuote}
            </Link>
            <div className="mt-4">
              <a
                href="https://wa.me/966XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20c25e] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-gold-500 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-white/30 text-xs hover:text-gold-500 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

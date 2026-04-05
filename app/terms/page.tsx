'use client'
import { useI18n } from '@/lib/i18n/context'

export default function TermsPage() {
  const { isRTL, t } = useI18n()
  const brandName = t.meta.co_title

  return (
    <div className="hero-bg min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="display-lg text-white mb-8">{isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}</h1>
        <div className="glass rounded-2xl p-8 border border-gold-500/15 space-y-6 text-white/60 text-sm leading-relaxed">
          <p>
            {isRTL
              ? `باستخدامك لموقع ${brandName} أو خدماتنا، فأنت توافق على الشروط والأحكام التالية.`
              : `By using the ${brandName} website or our services, you agree to the following terms and conditions.`}
          </p>
          <h2 className="text-white font-bold text-base">{isRTL ? 'استخدام الموقع' : 'Use of Site'}</h2>
          <p>
            {isRTL
              ? 'يُسمح باستخدام هذا الموقع للأغراض المشروعة فقط. يُحظر أي استخدام يُلحق الضرر بالموقع أو مستخدميه.'
              : 'This site may only be used for lawful purposes. Any use that harms the site or its users is prohibited.'}
          </p>
          <h2 className="text-white font-bold text-base">{isRTL ? 'الملكية الفكرية' : 'Intellectual Property'}</h2>
          <p>
            {isRTL
              ? `جميع محتويات الموقع من نصوص وصور وشعارات هي ملك لشركة ${brandName} ومحمية بموجب قوانين الملكية الفكرية.`
              : `All site content including text, images, and logos are the property of ${brandName} and protected by intellectual property laws.`}
          </p>
          <h2 className="text-white font-bold text-base">{isRTL ? 'المسؤولية' : 'Liability'}</h2>
          <p>
            {isRTL
              ? `لا تتحمل ${brandName} المسؤولية عن أي أضرار ناجمة عن استخدام الموقع أو الاعتماد على محتواه.`
              : `${brandName} is not liable for any damages arising from the use of the site or reliance on its content.`}
          </p>
        </div>
      </div>
    </div>
  )
}

'use client'
import { useI18n } from '@/lib/i18n/context'

export default function PrivacyPage() {
  const { isRTL, t } = useI18n()
  const brandName = t.meta.co_title

  return (
    <div className="hero-bg min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="display-lg text-white mb-8">{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
        <div className="glass rounded-2xl p-8 border border-gold-500/15 space-y-6 text-white/60 text-sm leading-relaxed">
          <p>
            {isRTL
              ? `نحن في ${brandName} نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك.`
              : `At ${brandName}, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.`}
          </p>
          <h2 className="text-white font-bold text-base">{isRTL ? 'البيانات التي نجمعها' : 'Data We Collect'}</h2>
          <p>
            {isRTL
              ? 'نجمع فقط البيانات الضرورية لتقديم خدماتنا، مثل الاسم والبريد الإلكتروني ورقم الجوال عند التواصل معنا.'
              : 'We only collect data necessary to provide our services, such as name, email, and phone number when you contact us.'}
          </p>
          <h2 className="text-white font-bold text-base">{isRTL ? 'استخدام البيانات' : 'Use of Data'}</h2>
          <p>
            {isRTL
              ? 'تُستخدم بياناتك حصراً للتواصل معك وتقديم الخدمات المطلوبة. لن نشارك بياناتك مع أطراف ثالثة دون موافقتك.'
              : 'Your data is used exclusively to communicate with you and provide requested services. We will not share your data with third parties without your consent.'}
          </p>
          <h2 className="text-white font-bold text-base">{isRTL ? 'التواصل' : 'Contact'}</h2>
          <p>
            {isRTL ? 'لأي استفسارات متعلقة بالخصوصية: ' : 'For any privacy inquiries: '}
            <a href="mailto:info@triplepoint.sa" className="text-gold-500 hover:underline">info@triplepoint.sa</a>
          </p>
        </div>
      </div>
    </div>
  )
}

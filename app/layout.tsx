import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/context";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandMetadataSync from "@/components/layout/BrandMetadataSync";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://triplepointsa.com"),
  title: {
    default: "Triple Point | حلول تقنية متكاملة في المملكة العربية السعودية",
    template: "%s | Triple Point",
  },
  description:
    "شركة Triple Point متخصصة في حلول تقنية متكاملة للمؤسسات السعودية — أنظمة قاعات الاجتماعات، إدارة الطوابير، الأمن والمراقبة، والمنازل الذكية.",
  keywords: [
    "حلول تقنية",
    "المملكة العربية السعودية",
    "أنظمة مراقبة",
    "إدارة الطوابير",
    "قاعات الاجتماعات",
    "منازل ذكية",
    "Triple Point",
  ],
  authors: [{ name: "Triple Point" }],
  creator: "Triple Point",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: "https://triplepointsa.com",
    siteName: "Triple Point",
    title: "Triple Point | حلول تقنية متكاملة",
    description: "حلول تقنية متكاملة للمؤسسات السعودية",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple Point | حلول تقنية متكاملة",
    description: "حلول تقنية متكاملة للمؤسسات السعودية",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://triplepointsa.com",
    languages: {
      "ar-SA": "https://triplepointsa.com",
      "en-US": "https://triplepointsa.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Triple Point",
              url: "https://triplepointsa.com",
              logo: "https://triplepointsa.com/logo.png",
              description: "حلول تقنية متكاملة للمؤسسات السعودية",
              address: {
                "@type": "PostalAddress",
                addressLocality: "الرياض",
                addressCountry: "SA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+966-11-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: ["Arabic", "English"],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <I18nProvider>
          <ThemeProvider>
            <BrandMetadataSync />
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton />
            <WhatsAppButton />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

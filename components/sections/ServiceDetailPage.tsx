"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

interface ServiceDetailData {
  title: string;
  subtitle: string;
  desc: string;
  benefits: string[];
  useCases: string[];
  industries: string[];
}

interface ServiceDetailPageProps {
  Icon: LucideIcon;
  gradient: string;
  dataKey:
    | "meetingRooms"
    | "queue"
    | "security"
    | "smartHome"
    | "videoWall"
    | "electrical"
    | "network"
    | "sound"
    | "odoo"
    | "software";
}

export default function ServiceDetailPage({
  Icon,
  gradient,
  dataKey,
}: ServiceDetailPageProps) {
  const { t, isRTL } = useI18n();
  const videoWallData: ServiceDetailData = {
    title: isRTL ? "الشاشات الجدارية" : "Video Wall Solutions",
    subtitle: isRTL
      ? "منصات عرض احترافية للمراقبة والعروض التفاعلية"
      : "Professional visual platforms for monitoring and immersive display",
    desc: isRTL
      ? "نصمم وننفذ أنظمة Video Wall متكاملة لعرض البيانات والمحتوى المرئي في غرف التحكم، الردهات، مراكز العمليات، والمعارض. نوفر لك شاشات عالية الاعتمادية مع معالجات عرض احترافية وإدارة محتوى مركزية تناسب بيئات العمل الحرجة."
      : "We design and implement integrated video wall systems for control rooms, lobbies, operations centers, and exhibitions. Our solutions combine high-reliability display panels, professional wall processors, and centralized content control for mission-critical environments.",
    benefits: isRTL
      ? [
          "شاشات متزامنة بإطارات نحيفة ودقة عرض عالية",
          "معالجات Video Wall احترافية لتقسيم وإدارة المحتوى",
          "تشغيل مستمر 24/7 لغرف المراقبة ومراكز العمليات",
          "إدارة مركزية للمصادر والسيناريوهات من واجهة واحدة",
        ]
      : [
          "Synchronized high-resolution panels with ultra-narrow bezels",
          "Professional video wall processors for layout and source control",
          "24/7 operation for monitoring centers and operations rooms",
          "Centralized management for sources, presets, and display scenarios",
        ],
    useCases: isRTL
      ? [
          "غرف التحكم والمراقبة",
          "ردهات الشركات والجهات الحكومية",
          "المعارض ومراكز الزوار",
          "مراكز العمليات والطوارئ",
        ]
      : [
          "Control and surveillance rooms",
          "Corporate and government lobbies",
          "Exhibitions and visitor centers",
          "Operations and emergency centers",
        ],
    industries: isRTL
      ? ["حكومة", "أمن", "شركات", "معارض"]
      : ["Government", "Security", "Corporate", "Exhibitions"],
  };
  const data =
    dataKey === "videoWall"
      ? videoWallData
      : (t.servicesPage[dataKey] as ServiceDetailData);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section
        className={`bg-gradient-to-br ${gradient} pt-36 pb-20 relative overflow-hidden`}
      >
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute top-0 end-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">
                {t.nav.home}
              </Link>
              <span>/</span>
              <Link
                href="/services"
                className="hover:text-white/70 transition-colors"
              >
                {t.nav.services}
              </Link>
              <span>/</span>
              <span className="text-white/70">{data.title}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-gold-500" />
                </div>
                <h1 className="display-lg text-white mb-4">{data.title}</h1>
                <p className="text-gold-400/80 text-lg mb-6">{data.subtitle}</p>
                <p className="text-white/60 leading-relaxed">{data.desc}</p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold rounded-xl transition-colors"
                  >
                    {t.common.getQuote}
                    <ArrowIcon size={16} />
                  </Link>
                  <a
                    href="https://wa.me/966XXXXXXXXX"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold rounded-xl transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <div className="glass rounded-3xl p-8 border border-gold-500/15">
                  <div className="space-y-3">
                    {data.benefits.map((b, i) => (
                      <motion.div
                        key={b}
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold-500 flex-shrink-0"
                        />
                        <span className="text-white/80 text-sm">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0 }}
              className="lg:col-span-2"
            >
              <h2 className="display-md text-charcoal-800 dark:text-white mb-8 gold-line-before">
                {isRTL ? "المزايا الرئيسية" : "Key Benefits"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3 bg-white dark:bg-charcoal-800 rounded-xl p-4 border border-gray-100 dark:border-white/8 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={15} className="text-gold-600" />
                    </div>
                    <p className="text-charcoal-700 dark:text-white/70 text-sm leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Use cases */}
              <div className="bg-teal-950 rounded-2xl p-6 border border-gold-500/15">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider gold-line-before">
                  {isRTL ? "حالات الاستخدام" : "Use Cases"}
                </h3>
                <ul className="space-y-3">
                  {data.useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-center gap-2 text-white/60 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div className="bg-white dark:bg-charcoal-800 rounded-2xl p-6 border border-gray-100 dark:border-white/8">
                <h3 className="text-charcoal-800 dark:text-white font-bold mb-4 text-sm uppercase tracking-wider gold-line-before">
                  {isRTL ? "القطاعات المستفيدة" : "Industries Served"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-medium rounded-full border border-teal-200 dark:border-teal-700/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-6 border border-gold-500/15">
                <h3 className="text-white font-bold mb-3 text-sm">
                  {isRTL ? "جاهز للبدء؟" : "Ready to Start?"}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  {isRTL
                    ? "تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك."
                    : "Contact us for a custom quote tailored to your needs."}
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold text-sm rounded-xl transition-colors"
                >
                  {t.common.getQuote}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}

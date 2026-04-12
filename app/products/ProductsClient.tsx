"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { products } from "@/lib/products";

export default function ProductsClient() {
  const { isRTL } = useI18n();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="hero-bg pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mx-auto mb-6" />
            <h1 className="display-xl text-white mb-4">
              {isRTL ? "منتجاتنا" : "Our Products"}
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              {isRTL
                ? "مجموعة منتجات تقنية احترافية ندعم بها مشاريع البنية التحتية والتحول الرقمي في مختلف القطاعات."
                : "Professional technology products supporting infrastructure and digital transformation projects across sectors."}
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="group bg-white dark:bg-charcoal-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative h-52 bg-gradient-to-br ${product.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <Image
                    src={product.image}
                    alt={isRTL ? product.titleAr : product.titleEn}
                    fill
                    className="object-cover mix-blend-screen opacity-75 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 start-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90">
                      {isRTL ? product.categoryAr : product.categoryEn}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-charcoal-800 dark:text-white font-bold text-xl mb-3 leading-snug group-hover:text-teal-700 dark:group-hover:text-gold-400 transition-colors">
                    {isRTL ? product.titleAr : product.titleEn}
                  </h2>
                  <p className="text-charcoal-500 dark:text-white/60 text-sm leading-relaxed mb-6">
                    {isRTL ? product.shortAr : product.shortEn}
                  </p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 text-sm font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>{isRTL ? "عرض التفاصيل" : "View Details"}</span>
                    <ArrowIcon size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}

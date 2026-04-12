"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import type { Product } from "@/lib/products";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import ProductGallery from "./components/ProductGallery";
import ProductSlidesCarousel from "./components/ProductSlidesCarousel";
import { resolveProductGallery, resolveProductSlides } from "./productMedia";

type ProductDetailsClientProps = {
  product: Product;
};

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const { isRTL } = useI18n();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const title = isRTL ? product.titleAr : product.titleEn;
  const category = isRTL ? product.categoryAr : product.categoryEn;
  const overview = isRTL ? product.overviewAr : product.overviewEn;
  const features = isRTL ? product.featuresAr : product.featuresEn;
  const useCases = isRTL ? product.useCasesAr : product.useCasesEn;

  const gallery = resolveProductGallery(product);
  const slides = resolveProductSlides(product);

  const whatsappMessage = encodeURIComponent(
    isRTL
      ? `مرحبا، اريد الاستفسار عن المنتج: ${product.titleAr}`
      : `Hello, I want to inquire about this product: ${product.titleEn}`
  );
  const whatsappUrl = `https://wa.me/966547341541?text=${whatsappMessage}`;

  return (
    <>
      <section
        className={`bg-gradient-to-br ${product.gradient} pt-36 pb-20 relative overflow-hidden`}
      >
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">
                {isRTL ? "الرئيسية" : "Home"}
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white/70 transition-colors">
                {isRTL ? "المنتجات" : "Products"}
              </Link>
              <span>/</span>
              <span className="text-white/80">{title}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gold-400 mb-5">
                  {category}
                </span>
                <h1 className="display-lg text-white mb-4">{title}</h1>
                <p className="text-white/65 leading-relaxed text-lg">{overview}</p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold rounded-xl transition-colors"
                  >
                    {isRTL ? "اطلب عرض سعر" : "Get a Quote"}
                    <ArrowIcon size={16} />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold rounded-xl transition-colors"
                  >
                    <MessageCircle size={16} />
                    {isRTL ? "تواصل عبر واتساب" : "WhatsApp"}
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-colors border border-white/20"
                  >
                    {isRTL ? "كل المنتجات" : "All Products"}
                  </Link>
                </div>
              </div>

              <ProductGallery images={gallery} title={title} isRTL={isRTL} />
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-2"
            >
              <h2 className="display-md text-charcoal-800 dark:text-white mb-8 gold-line-before">
                {isRTL ? "المواصفات والمزايا" : "Features & Highlights"}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 bg-white dark:bg-charcoal-800 rounded-xl p-4 border border-gray-100 dark:border-white/8 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={15} className="text-gold-600" />
                    </div>
                    <p className="text-charcoal-700 dark:text-white/70 text-sm leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              <div className="bg-teal-950 rounded-2xl p-6 border border-gold-500/15">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider gold-line-before">
                  {isRTL ? "الاستخدامات المثالية" : "Best Use Cases"}
                </h3>
                <ul className="space-y-3">
                  {useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="flex items-center gap-2 text-white/65 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-charcoal-800 rounded-2xl p-6 border border-gray-100 dark:border-white/8">
                <h3 className="text-charcoal-800 dark:text-white font-bold mb-4 text-sm uppercase tracking-wider gold-line-before">
                  {isRTL ? "هل تحتاج استشارة؟" : "Need Help Choosing?"}
                </h3>
                <p className="text-charcoal-500 dark:text-white/60 text-sm leading-relaxed mb-4">
                  {isRTL
                    ? "فريقنا يساعدك باختيار المنتج المناسب حسب طبيعة مشروعك والميزانية."
                    : "Our team can help you choose the right product based on project scope and budget."}
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 bg-gold-500 hover:bg-gold-400 text-teal-900 font-bold text-sm rounded-xl transition-colors"
                >
                  {isRTL ? "تواصل معنا" : "Contact Us"}
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <ProductSlidesCarousel slides={slides} title={title} isRTL={isRTL} />
      <FinalCtaSection />
    </>
  );
}

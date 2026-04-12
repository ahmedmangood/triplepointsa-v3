"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import type { Product } from "@/lib/products";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

type ProductDetailsClientProps = {
  product: Product;
};

function getFallbackGallery(image: string) {
  if (image.startsWith("/services/meetingroom/")) {
    return [image, "/services/meetingroom/08.webp", "/services/meetingroom/011.webp"];
  }
  if (image.startsWith("/services/queuesystem/")) {
    return [image, "/services/queuesystem/02.webp", "/services/queuesystem/03.webp"];
  }
  if (image.startsWith("/services/securitysystem/")) {
    return [image, "/services/securitysystem/02.webp", "/services/securitysystem/04.webp"];
  }
  if (image.startsWith("/services/infrastructure/")) {
    return [
      image,
      "/services/infrastructure/network3-1.webp",
      "/services/infrastructure/network5-1.webp",
    ];
  }
  if (image.startsWith("/services/smarthome/")) {
    return [image, "/services/smarthome/02.webp", "/services/smarthome/03.webp"];
  }
  if (image.startsWith("/products/meeting/")) {
    return [
      image,
      "/products/meeting/SeeUp4H.webp",
      "/products/meeting/SeeUp4c.webp",
      "/products/meeting/TB5KIT.webp",
      "/products/meeting/TB5WKIT.webp",
      "/products/meeting/triplepod.webp",
      "/products/meeting/triple6x.webp",
      "/products/meeting/triple20x.webp",
    ];
  }
  return [image];
}

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

  const optionalGallery = (product as Product & { gallery?: string[] }).gallery;
  const rawGallery =
    optionalGallery && optionalGallery.length > 0
      ? optionalGallery
      : [product.image];
  const gallery = rawGallery.length > 1 ? rawGallery : getFallbackGallery(product.image);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = gallery[activeImageIndex];

  const whatsappMessage = encodeURIComponent(
    isRTL
      ? `مرحبا، اريد الاستفسار عن المنتج: ${product.titleAr}`
      : `Hello, I want to inquire about this product: ${product.titleEn}`
  );
  const whatsappUrl = `https://wa.me/966547341541?text=${whatsappMessage}`;

  const goPrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };
  const goNextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

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

              <div className="space-y-4">
                <div className="relative h-72 lg:h-[26rem] rounded-3xl overflow-hidden border border-white/20">
                  <Image src={activeImage} alt={title} fill className="object-cover" />
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={goPrevImage}
                        className="absolute top-1/2 start-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/20 flex items-center justify-center transition-colors"
                        aria-label={isRTL ? "الصورة السابقة" : "Previous image"}
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={goNextImage}
                        className="absolute top-1/2 end-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/20 flex items-center justify-center transition-colors"
                        aria-label={isRTL ? "الصورة التالية" : "Next image"}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>

                {gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {gallery.map((image, index) => (
                      <button
                        key={`${image}-${index}`}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative h-16 rounded-lg overflow-hidden border transition-colors ${
                          index === activeImageIndex
                            ? "border-gold-400"
                            : "border-white/25 hover:border-white/50"
                        }`}
                        aria-label={
                          isRTL ? `عرض الصورة ${index + 1}` : `Show image ${index + 1}`
                        }
                      >
                        <Image
                          src={image}
                          alt={`${title} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
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

      <FinalCtaSection />
    </>
  );
}

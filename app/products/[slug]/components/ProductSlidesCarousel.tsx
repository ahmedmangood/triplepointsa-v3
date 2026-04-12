"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductSlidesCarouselProps = {
  slides: string[];
  title: string;
  isRTL: boolean;
};

const AUTOPLAY_MS = 4500;

export default function ProductSlidesCarousel({
  slides,
  title,
  isRTL,
}: ProductSlidesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="pb-24 bg-white dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-6">
          <h2 className="display-md text-charcoal-800 dark:text-white mb-2 gold-line-before">
            {isRTL ? "المميزات" : "Highlights"}
          </h2>
        </div> */}

        <div
          className="relative h-44 md:h-56 lg:h-72 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-charcoal-900/95"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSlide}-${activeIndex}`}
              initial={{ opacity: 0, x: isRTL ? -40 : 40, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: isRTL ? 40 : -40, scale: 0.985 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeSlide}
                alt={`${title} slide ${activeIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-contain p-2"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {slides.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute top-1/2 start-4 -translate-y-1/2 w-11 h-11 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label={isRTL ? "الشريحة السابقة" : "Previous slide"}
              >
                {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
              <button
                onClick={goNext}
                className="absolute top-1/2 end-4 -translate-y-1/2 w-11 h-11 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label={isRTL ? "الشريحة التالية" : "Next slide"}
              >
                {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            </>
          )}
        </div>

        {slides.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-gold-500"
                    : "w-2.5 bg-gray-300 dark:bg-white/25"
                }`}
                aria-label={
                  isRTL
                    ? `الانتقال للشريحة ${index + 1}`
                    : `Go to slide ${index + 1}`
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ProductGalleryProps = {
  images: string[];
  title: string;
  isRTL: boolean;
};

export default function ProductGallery({
  images,
  title,
  isRTL,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activeImage = images[activeIndex];
  const lightboxImage = images[lightboxIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNextLightbox = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }
      if (event.key === "ArrowLeft") {
        if (isRTL) {
          goNextLightbox();
        } else {
          goPrevLightbox();
        }
      }
      if (event.key === "ArrowRight") {
        if (isRTL) {
          goPrevLightbox();
        } else {
          goNextLightbox();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRTL, lightboxOpen]);

  return (
    <>
      <div className="space-y-4">
        <div className="relative h-72 lg:h-[26rem] rounded-3xl overflow-hidden border border-white/20 bg-charcoal-900/95">
          <AnimatePresence mode="wait">
            <motion.button
              key={`${activeImage}-${activeIndex}`}
              type="button"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
              onClick={() => openLightbox(activeIndex)}
              aria-label={
                isRTL ? "فتح الصورة بحجم كامل" : "Open image in full size"
              }
            >
              <Image
                src={activeImage}
                alt={`${title} ${activeIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.button>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute top-1/2 start-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label={isRTL ? "الصورة السابقة" : "Previous image"}
              >
                {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>
              <button
                onClick={goNext}
                className="absolute top-1/2 end-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label={isRTL ? "الصورة التالية" : "Next image"}
              >
                {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 rounded-lg overflow-hidden border transition-all ${
                  index === activeIndex
                    ? "border-gold-400 scale-[1.02]"
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
                  sizes="(max-width: 768px) 25vw, 10vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 end-4 z-[120] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center"
              aria-label={isRTL ? "إغلاق" : "Close"}
            >
              <X size={18} />
            </button>

            <div
              className="relative h-full max-w-6xl mx-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${lightboxImage}-${lightboxIndex}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={lightboxImage}
                    alt={`${title} ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrevLightbox}
                    className="absolute top-1/2 start-0 md:start-3 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-500 hover:bg-gray-500/70 text-white border border-white/25 flex items-center justify-center"
                    aria-label={isRTL ? "الصورة السابقة" : "Previous image"}
                  >
                    {isRTL ? (
                      <ChevronRight size={20} />
                    ) : (
                      <ChevronLeft size={20} />
                    )}
                  </button>
                  <button
                    onClick={goNextLightbox}
                    className="absolute top-1/2 end-0 md:end-3 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-500 hover:bg-gray-500/70 text-white border border-white/25 flex items-center justify-center"
                    aria-label={isRTL ? "الصورة التالية" : "Next image"}
                  >
                    {isRTL ? (
                      <ChevronLeft size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

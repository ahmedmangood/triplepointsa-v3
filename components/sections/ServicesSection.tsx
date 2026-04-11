"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Monitor,
  Users,
  Shield,
  Home,
  Tv,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

const icons = {
  meeting: Monitor,
  queue: Users,
  security: Shield,
  smart: Home,
  videoWall: Tv,
};

const images = {
  meeting: "/services/services-hero/opt/meeting.webp",
  queue: "/services/services-hero/opt/queue.webp",
  security: "/services/services-hero/opt/security.webp",
  smart: "/services/services-hero/opt/smart.webp",
  videowall: "/services/services-hero/opt/videowall.webp",
  electric: "/services/services-hero/opt/electric.webp",
  network: "/services/services-hero/opt/network.webp",
  sound: "/services/services-hero/opt/sound.webp",
  odoo: "/services/services-hero/opt/odoo.webp",
  software: "/services/services-hero/opt/software.webp",
};

const serviceLinks = {
  meeting: "/services/meeting-rooms",
  queue: "/services/queue-management",
  security: "/services/security-surveillance",
  smart: "/services/smart-home",
  videowall: "/services/video-wall",
  electric: "/services/electrical",
  network: "/services/network",
  sound: "/services/sound",
  odoo: "/services/odoo",
  software: "/services/software",
};

const gradients = [
  "from-teal-700/80 to-teal-900/80",
  "from-teal-800/80 to-charcoal-800/80",
  "from-charcoal-700/80 to-teal-800/80",
  "from-teal-600/80 to-charcoal-900/80",
  "from-charcoal-800/80 to-teal-700/80",
];

export default function ServicesSection() {
  const { t, isRTL } = useI18n();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    ...Object.entries(t.services.items).map(([key, val]) => ({
      key,
      ...val,
      Icon: icons[key as keyof typeof icons],
      href: serviceLinks[key as keyof typeof serviceLinks],
      gradient: gradients[Object.keys(t.services.items).indexOf(key)],
      image: images[key as keyof typeof images],
    })),
  ];

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-line-center">
            <span className="badge mb-4 mx-auto">{t.services.title}</span>
          </div>
          <h2 className="display-md text-charcoal-800 dark:text-white mt-4">
            {t.services.subtitle}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => {
            const Icon = service.Icon;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`${service.href}`} className="group block h-full">
                  <div
                    className={`relative h-full bg-gradient-to-br ${service.gradient} rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}
                  >
                    {/* Background shimmer on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                    {/* Gold corner accent */}
                    <div className="absolute top-0 end-0 w-20 h-20 bg-gold-500/10 rounded-bl-3xl group-hover:bg-gold-500/20 transition-colors" />

                    {/* Image */}
                    <div className="relative mb-5 w-full border border-gold-500/30 rounded-xl">
                      <Image
                        className="w-full p-2 rounded-lg glass filter"
                        src={
                          service.image ||
                          "/services/infrastructure/dataCables.jpeg.webp"
                        }
                        alt={service.title}
                        width={1000}
                        height={1000}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-gold-500 text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>{t.services.learnMore}</span>
                      <ArrowIcon size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

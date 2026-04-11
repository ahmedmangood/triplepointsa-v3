"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { useTheme } from "@/components/ui/ThemeProvider";

export default function Header() {
  const { t, lang, setLang, isRTL } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const brandName = t.meta.co_title;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      href: "/services/meeting-rooms",
      label: isRTL ? "أنظمة قاعات الاجتماعات" : "Meeting Room Solutions",
    },
    {
      href: "/services/queue-management",
      label: isRTL ? "أنظمة إدارة الطوابير" : "Queue Management",
    },
    {
      href: "/services/security-surveillance",
      label: isRTL ? "الأمن والمراقبة" : "Security & Surveillance",
    },
    {
      href: "/services/smart-home",
      label: isRTL ? "المنازل الذكية" : "Smart Home Systems",
    },
    {
      href: "/services/video-wall",
      label: isRTL ? "الشاشات الجدارية" : "Video Wall Solutions",
    },
    {
      href: "/services/electrical",
      label: isRTL ? "المقاولات الكهربائية" : "Electrical Contracting",
    },
    {
      href: "/services/network",
      label: isRTL ? "البنية التحتية للشبكات" : "Network Infrastructure",
    },
    {
      href: "/services/sound",
      label: isRTL ? "أنظمة الصوت والصوتيات" : "Sound Systems",
    },
    {
      href: "/services/odoo",
      label: isRTL ? "نظام Odoo ERP" : "Odoo ERP System",
    },
    {
      href: "/services/software",
      label: isRTL ? "البرمجيات المتخصصة" : "Specialized Software",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-gold-500/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-gold-500/20 bg-white shadow-lg shadow-black/20">
              <Image
                src="/logo.png"
                alt={`${brandName} logo`}
                width={80}
                height={80}
                className="p-0.5 w-80 flex justify-center items-center"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-white font-bold text-lg leading-none font-display">
                {brandName}
              </span>
              <span className="block text-gold-500/70 text-xs leading-none mt-0.5">
                {isRTL ? "حلول تقنية متكاملة" : "Integrated Tech Solutions"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors rounded-lg hover:bg-white/5"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors rounded-lg hover:bg-white/5"
            >
              {t.nav.about}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors rounded-lg hover:bg-white/5">
                {t.nav.services}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-64 glass rounded-xl border border-gold-500/20 overflow-hidden shadow-xl"
                    style={isRTL ? { right: 0 } : { left: 0 }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-3 text-sm text-white/80 hover:text-gold-500 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/projects"
              className="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors rounded-lg hover:bg-white/5"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/contact"
              className="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-gold-500 transition-colors rounded-lg hover:bg-white/5"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Lang Toggle */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-3 py-1.5 text-xs font-bold text-gold-500 border border-gold-500/30 rounded-lg hover:bg-gold-500/10 transition-colors"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-white/60 hover:text-gold-500 transition-colors rounded-lg hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:flex items-center px-5 py-2 text-sm font-semibold bg-gold-500 hover:bg-gold-400 text-teal-900 rounded-xl transition-all duration-200 shadow-gold/20 shadow-lg hover:shadow-gold"
            >
              {t.nav.getQuote}
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-gold-500 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-gold-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {[
                { href: "/", label: t.nav.home },
                { href: "/about", label: t.nav.about },
                { href: "/services", label: t.nav.services },
                ...services,
                { href: "/projects", label: t.nav.projects },
                { href: "/contact", label: t.nav.contact },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    item.href.includes("services/")
                      ? "ps-8 text-white/60"
                      : "text-white/80"
                  } hover:text-gold-500 hover:bg-white/5`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-3 px-4 py-3 text-center font-semibold bg-gold-500 hover:bg-gold-400 text-teal-900 rounded-xl transition-colors"
              >
                {t.nav.getQuote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

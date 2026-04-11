"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function ContactClient() {
  const { t, isRTL } = useI18n();
  const cp = t.contactPage;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-charcoal-800 dark:text-white placeholder-charcoal-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-teal-500 dark:focus:border-gold-500/60 transition-colors`;

  const infoItems = [
    { Icon: MapPin, label: cp.info.address },
    { Icon: Phone, label: cp.info.phone, dir: "ltr" as const },
    { Icon: Phone, label: cp.info.phone2, dir: "ltr" as const },
    { Icon: Mail, label: cp.info.email },
    { Icon: Clock, label: cp.info.hours },
  ];
  const serviceOptions = [...cp.form.services];

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mx-auto mb-6" />
            <h1 className="display-xl text-white mb-4">{cp.hero.title}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {cp.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section ref={ref} className="py-24 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-charcoal-800 rounded-3xl p-8 border border-gray-100 dark:border-white/8 shadow-card">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={36} className="text-emerald-500" />
                    </div>
                    <h3 className="text-charcoal-800 dark:text-white font-bold text-xl mb-3">
                      {isRTL ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
                    </h3>
                    <p className="text-charcoal-500 dark:text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
                      {cp.form.success}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="mt-6 px-6 py-2.5 bg-teal-700 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                      {isRTL ? "إرسال طلب آخر" : "Send Another Request"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-600 dark:text-white/60 mb-1.5">
                          {cp.form.name} *
                        </label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder={
                            isRTL ? "أحمد الشمري" : "Ahmed Al-Shamri"
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-600 dark:text-white/60 mb-1.5">
                          {cp.form.company} *
                        </label>
                        <input
                          required
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder={
                            isRTL ? "اسم الشركة أو الجهة" : "Company Name"
                          }
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-600 dark:text-white/60 mb-1.5">
                          {cp.form.email} *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="info@company.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal-600 dark:text-white/60 mb-1.5">
                          {cp.form.phone}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="+966 5X XXX XXXX"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-600 dark:text-white/60 mb-1.5">
                        {cp.form.service}
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">
                          {isRTL ? "— اختر الخدمة —" : "— Select a Service —"}
                        </option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-600 dark:text-white/60 mb-1.5">
                        {cp.form.message}
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder={
                          isRTL
                            ? "اكتب تفاصيل إضافية عن احتياجاتك..."
                            : "Tell us more about your needs..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-teal-900 font-bold rounded-xl transition-colors text-base"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-teal-900/40 border-t-teal-900 rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          {cp.form.submit}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact info card */}
              <div className="bg-teal-950 rounded-3xl p-7 border border-gold-500/15">
                <h2 className="text-white font-bold text-lg mb-6 gold-line-before">
                  {cp.info.title}
                </h2>
                <div className="space-y-5">
                  {infoItems.map(({ Icon, label, dir }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-gold-500" />
                      </div>
                      <span
                        className="text-white/60 text-sm leading-relaxed"
                        dir={dir}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/966547341541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl transition-colors text-sm"
                >
                  <MessageCircle size={18} />
                  {cp.info.whatsapp}
                </a>
              </div>

              {/* Map placeholder */}
              <div className="bg-white dark:bg-charcoal-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/8 shadow-card h-64 relative">
                {/* Embedded Google Map or placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      size={32}
                      className="text-teal-600 dark:text-teal-400 mx-auto mb-2"
                    />
                    <p className="text-teal-700 dark:text-teal-300 text-sm font-medium">
                      {isRTL
                        ? "الرياض، المملكة العربية السعودية"
                        : "Riyadh, Saudi Arabia"}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/ZoJ7NsJTTDgpa8Yw5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs text-teal-600 dark:text-gold-500 underline"
                    >
                      {isRTL ? "افتح في خرائط Google" : "Open in Google Maps"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

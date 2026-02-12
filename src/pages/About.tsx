import { motion } from 'framer-motion';
import {
  Award,
  Target,
  Shield,
  Users,
  Briefcase,
  MapPin,
  Landmark
} from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

/* ================= CURSOR LUXE ================= */
function LuxuryCursor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference">
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-white rounded-full"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </div>
  );
}

/* ================= MAGNETIC PRIVATE CTA ================= */
function MagneticPrivateCTA({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      onMouseMove={move}
      onMouseLeave={reset}
      className="
        inline-flex items-center justify-center
        px-20 py-5
        border border-blue-950
        text-blue-950
        tracking-[0.25em] text-sm
        relative overflow-hidden
        transition
        hover:text-white
      "
    >
      <span className="
        absolute inset-0
        bg-blue-950
        translate-y-full
        hover:translate-y-0
        transition-transform duration-500
      " />
      <span className="relative z-10">{children}</span>
    </a>
  );
}

/* ================= PAGE ================= */
export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-white overflow-hidden">
      <LuxuryCursor />

      {/* ================= HERO ================= */}
      <section className="relative h-screen text-white">
        <img
          src="https://images.homify.com/v1489567562/p/photo/image/1905363/Render_new_final_General.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/75 to-blue-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="uppercase tracking-[0.4em] text-blue-200 text-xs">
              {t('about.hero.kicker')}
            </span>

            <h1 className="text-5xl md:text-7xl font-semibold mt-8 leading-tight max-w-4xl">
              {t('about.hero.title')}
            </h1>

            <p className="text-xl text-blue-100 mt-8 max-w-2xl">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= POSITIONNEMENT ================= */}
      <section className="py-36">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-28">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="uppercase tracking-widest text-gray-400 text-sm">
              {t('about.positioning.kicker')}
            </span>

            <h2 className="text-4xl text-blue-950 mt-6 mb-12 leading-snug">
              {t('about.positioning.title')}
            </h2>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>{t('about.positioning.p1')}</p>
              <p>{t('about.positioning.p2')}</p>
              <p>{t('about.positioning.p3')}</p>
            </div>
          </motion.div>

          {/* ================= INDICATEURS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 gap-10"
          >
            {[
              { icon: Briefcase, label: t('about.stats.years'), value: '10+' },
              { icon: Landmark, label: t('about.stats.assets'), value: '300+' },
              { icon: Users, label: t('about.stats.clients'), value: '500+' },
              { icon: MapPin, label: t('about.stats.zone'), value: t('about.stats.zoneValue') }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-gray-50 border border-gray-100 p-12 text-center shadow-sm"
              >
                <item.icon className="mx-auto w-9 h-9 text-blue-950 mb-6" />
                <div className="text-4xl font-semibold text-blue-950">
                  {item.value}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= VALEURS ================= */}
      <section className="py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-blue-950 text-center mb-24">
            {t('about.values.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
            {[
              { icon: Award, title: t('about.values.v1.title'), text: t('about.values.v1.text') },
              { icon: Shield, title: t('about.values.v2.title'), text: t('about.values.v2.text') },
              { icon: Target, title: t('about.values.v3.title'), text: t('about.values.v3.text') },
              { icon: Users, title: t('about.values.v4.title'), text: t('about.values.v4.text') }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-12 shadow-lg"
              >
                <item.icon className="w-10 h-10 text-blue-950 mb-8" />
                <h3 className="text-2xl text-blue-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA PRIVATE ================= */}
      <section className="py-40 bg-[#f7f7f5]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl text-blue-950 mb-6"
          >
            {t('about.cta.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-20"
          >
            {t('about.cta.text')}
          </motion.p>

          <MagneticPrivateCTA href="https://wa.me/221774308344">
            {t('about.cta.button')}
          </MagneticPrivateCTA>

          <p className="mt-16 text-xs tracking-widest text-gray-400">
            {t('about.cta.signature')}
          </p>
        </div>
      </section>
    </div>
  );
}

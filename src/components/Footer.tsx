import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import image1 from '../assets/absimmo.jpeg'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white overflow-hidden">

      {/* Glow Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[160px] opacity-30 pointer-events-none" />

      {/* Ligne luxe animée */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-20">

        {/* GRID */}
        <div className="grid gap-16 lg:grid-cols-4">

          {/* ===== BRAND ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src={image1}
                  alt={t('footer.brand.name')}
                  className="w-9 h-9 object-contain"
                  draggable={false}
                />
              </div>

              <div>
                <div className="text-xl font-semibold tracking-tight">
                  {t('footer.brand.name')}
                </div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-blue-300">
                  {t('footer.brand.tagline')}
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-blue-200 max-w-sm">
              {t('footer.brand.description')}
            </p>

            <div className="text-[11px] uppercase tracking-[0.4em] text-blue-400">
              {t('footer.brand.region')}
            </div>
          </motion.div>

          {/* ===== POSITIONNEMENT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-blue-300 mb-6">
              {t('footer.positioning.title')}
            </h4>

            <p className="text-sm leading-relaxed text-blue-200">
              {t('footer.positioning.text')}
            </p>
          </motion.div>

          {/* ===== DISPONIBILITÉ ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-blue-300 mb-6">
              {t('footer.availability.title')}
            </h4>

            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex justify-between">
                <span>{t('footer.availability.week')}</span>
                <span>{t('footer.availability.weekHours')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('footer.availability.saturday')}</span>
                <span>{t('footer.availability.saturdayHours')}</span>
              </div>
              <div className="flex justify-between opacity-50">
                <span>{t('footer.availability.sunday')}</span>
                <span>{t('footer.availability.closed')}</span>
              </div>
            </div>
          </motion.div>

          {/* ===== CONTACT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-blue-300 mb-6">
              {t('footer.contact.title')}
            </h4>

            {/* ===== BOUTON APPEL PREMIUM ===== */}
            <a
              href="tel:774308344"
              className="group relative overflow-hidden flex items-center justify-between px-6 py-5 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 shadow-[0_15px_50px_rgba(0,0,0,0.4)] hover:shadow-red-600/50 transition-all duration-500"
            >
              {/* Light sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 ease-out" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>

                <div>
                  <div className="text-sm font-semibold tracking-wide">
                    {t('footer.contact.call')}
                  </div>
                  <div className="text-xs text-red-100">
                    +221 77 430 83 44
                  </div>
                </div>
              </div>

              <ArrowUpRight className="relative z-10 w-4 h-4 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            {/* CONTACT SECONDAIRE */}
            <div className="mt-6 space-y-4 text-sm text-blue-200">
              <a
                href="mailto:contact@absimmo.sn"
                className="flex items-center gap-3 hover:text-white transition duration-300"
              >
                <Mail className="w-4 h-4" />
                contact@absimmo.sn
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                {t('footer.contact.location')}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== FOOTER BOTTOM ===== */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300">

          <div>
            © {new Date().getFullYear()} ABS Immo Services — {t('footer.bottom.rights')}
          </div>

          <div className="uppercase tracking-[0.4em] text-blue-400">
            {t('footer.bottom.signature')}
          </div>

        </div>
      </div>
    </footer>
  )
}

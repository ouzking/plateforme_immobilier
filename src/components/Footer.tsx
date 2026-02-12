import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/absimmo.jpeg';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-blue-950 text-white overflow-hidden">
      {/* Ligne luxe */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* GRID */}
        <div className="grid gap-14 lg:grid-cols-4">

          {/* ===== BRAND ===== */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={image1}
                  alt={t('footer.brand.name')}
                  className="w-8 h-8 object-contain"
                  loading="eager"
                  draggable={false}
                />
              </div>

              <div>
                <div className="text-lg font-semibold tracking-tight">
                  {t('footer.brand.name')}
                </div>
                <div className="text-[11px] uppercase tracking-[0.35em] text-blue-300">
                  {t('footer.brand.tagline')}
                </div>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed text-blue-200 max-w-sm">
              {t('footer.brand.description')}
            </p>

            <div className="text-[11px] uppercase tracking-[0.4em] text-blue-400">
              {t('footer.brand.region')}
            </div>
          </div>

          {/* ===== POSITIONNEMENT ===== */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-blue-300 mb-5">
              {t('footer.positioning.title')}
            </h4>

            <p className="text-[13px] leading-relaxed text-blue-200">
              {t('footer.positioning.text')}
            </p>
          </div>

          {/* ===== DISPONIBILITÉ ===== */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-blue-300 mb-5">
              {t('footer.availability.title')}
            </h4>

            <div className="space-y-2 text-[13px] text-blue-200">
              <div className="flex justify-between">
                <span>{t('footer.availability.week')}</span>
                <span>{t('footer.availability.weekHours')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('footer.availability.saturday')}</span>
                <span>{t('footer.availability.saturdayHours')}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>{t('footer.availability.sunday')}</span>
                <span>{t('footer.availability.closed')}</span>
              </div>
            </div>
          </div>

          {/* ===== CONTACT ===== */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-blue-300 mb-5">
              {t('footer.contact.title')}
            </h4>

            {/* BOUTON APPEL */}
            <a
              href="tel:774308344"
              className="
                group relative flex items-center justify-between
                px-5 py-4 rounded-2xl
                bg-gradient-to-br from-red-600 to-red-700
                hover:from-red-500 hover:to-red-600
                transition-all duration-300
                shadow-lg hover:shadow-red-600/40
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
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

              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* CONTACT SECONDAIRE */}
            <div className="mt-5 space-y-3 text-[13px] text-blue-200">
              <a
                href="mailto:contact@absimmo.sn"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
                contact@absimmo.sn
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                {t('footer.contact.location')}
              </div>
            </div>
          </div>
        </div>

        {/* ===== FOOTER BOTTOM ===== */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-blue-300">
          <div>
            © {new Date().getFullYear()} ABS Immo Services — {t('footer.bottom.rights')}
          </div>

          <div className="uppercase tracking-[0.4em]">
            {t('footer.bottom.signature')}
          </div>
        </div>
      </div>
    </footer>
  );
}

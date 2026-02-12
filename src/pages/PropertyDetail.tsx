import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Check,
  MessageCircle,
  Phone,
  Lock
} from 'lucide-react';

import Button from '../components/Button';
import { properties } from '../data/properties';

interface PropertyDetailProps {
  propertyId: string;
  onNavigate: (page: string) => void;
}

export default function PropertyDetail({
  propertyId,
  onNavigate
}: PropertyDetailProps) {
  const { t } = useTranslation();
  const property = properties.find(p => p.id === propertyId);
  const [imageIndex, setImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Button onClick={() => onNavigate('properties')}>
          {t('propertyDetail.backToList')}
        </Button>
      </div>
    );
  }

  const whatsappMessage = t('propertyDetail.whatsappMessage', {
    title: property.title,
    price: (property.price / 1_000_000).toFixed(0)
  });

  const whatsappUrl = `https://wa.me/221774308344?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-[#f6f7f5] text-blue-950 pt-20">

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] overflow-hidden bg-black">
        <img
          src={property.images[imageIndex]}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <button
          onClick={() => onNavigate('properties')}
          className="absolute top-6 left-6 z-10 flex items-center gap-2 text-white text-xs tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('propertyDetail.back')}
        </button>

        <div className="absolute bottom-10 left-6 max-w-3xl text-white">
          <h1 className="text-5xl font-light">
            {property.title}
          </h1>
          <div className="flex items-center gap-2 mt-3 text-blue-200">
            <MapPin className="w-4 h-4" />
            {property.location}
          </div>
        </div>
      </section>

      {/* ================= MINI GALERIE ================= */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {property.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setImageIndex(i)}
              className={`w-28 h-18 rounded-md overflow-hidden border ${
                imageIndex === i
                  ? 'border-blue-950'
                  : 'border-gray-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENU ================= */}
      <section className="py-14">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[2fr_1fr] gap-10">

          {/* ===== MAIN ===== */}
          <div>
            <div className="grid grid-cols-3 gap-8 pb-8 border-b">
              {property.bedrooms && (
                <Metric icon={Bed} label={t('propertyDetail.metrics.bedrooms')} value={property.bedrooms} />
              )}
              {property.bathrooms && (
                <Metric icon={Bath} label={t('propertyDetail.metrics.bathrooms')} value={property.bathrooms} />
              )}
              <Metric icon={Maximize} label={t('propertyDetail.metrics.surface')} value={`${property.surface} m²`} />
            </div>

            <div className="pt-8">
              <SectionTitle>
                {t('propertyDetail.presentation')}
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
                {property.description}
              </p>
            </div>

            <div className="pt-10">
              <SectionTitle>
                {t('propertyDetail.features')}
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-4 h-4 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <motion.aside
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 border shadow-lg sticky top-24 h-fit"
          >
            <div className="pb-5 border-b">
              <div className="text-xs tracking-widest text-gray-400 uppercase">
                {t('propertyDetail.price')}
              </div>
              <div className="text-4xl font-semibold mt-3">
                {(property.price / 1_000_000).toFixed(0)} M FCFA
              </div>
            </div>

            <div className="pt-5 space-y-4">
              <a href={whatsappUrl} target="_blank" className="block">
                <Button full>
                  <MessageCircle className="w-5 h-5" />
                  {t('propertyDetail.whatsapp')}
                </Button>
              </a>

              <a href="tel:774308344">
                <Button variant="dark" full>
                  <Phone className="w-5 h-5" />
                  {t('propertyDetail.call')}
                </Button>
              </a>

              <Button
                variant="outline"
                full
                onClick={() => onNavigate('contact')}
              >
                <Lock className="w-5 h-5" />
                {t('propertyDetail.requestInfo')}
              </Button>
            </div>
          </motion.aside>

        </div>
      </section>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function Metric({ icon: Icon, label, value }: any) {
  return (
    <div>
      <Icon className="w-5 h-5 mb-2" />
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-2xl font-light mb-5">{children}</h2>;
}

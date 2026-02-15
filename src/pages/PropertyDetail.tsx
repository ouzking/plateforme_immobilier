import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
} from 'lucide-react'

import { properties } from '../data/properties'

interface PropertyDetailProps {
  propertyId: string
  onNavigate: (page: string) => void
}

export default function PropertyDetail({
  propertyId,
  onNavigate
}: PropertyDetailProps) {
  const { t } = useTranslation()
  const property = properties.find(p => p.id === propertyId)
  const [imageIndex, setImageIndex] = useState(0)

  if (!property) return null

  const whatsappMessage = t('propertyDetail.whatsappMessage', {
    title: property.title,
    price: (property.price / 1_000_000).toFixed(0)
  })

  const whatsappUrl = `https://wa.me/221774308344?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="bg-white text-blue-950 pt-20">

      {/* ================= HERO GALLERY ================= */}
      <section className="relative h-[90vh] overflow-hidden bg-black">

        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={property.images[imageIndex]}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* NAV BUTTONS */}
        <button
          onClick={prevImage}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition"
        >
          ←
        </button>

        <button
          onClick={nextImage}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition"
        >
          →
        </button>

        {/* THUMBNAILS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {property.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              onClick={() => setImageIndex(i)}
              whileHover={{ scale: 1.05 }}
              className={`w-24 h-16 object-cover rounded-lg cursor-pointer transition border-2 ${
                i === imageIndex
                  ? 'border-white'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            />
          ))}
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => onNavigate('properties')}
          className="absolute top-10 left-10 z-40 flex items-center gap-3 text-white text-xs tracking-[0.4em] uppercase hover:opacity-80 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('propertyDetail.back')}
        </button>

        {/* TITLE */}
        <div className="absolute bottom-24 left-16 text-white max-w-4xl z-20">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl xl:text-[90px] font-bold leading-[0.95] tracking-tight"
          >
            {property.title}
          </motion.h1>

          <div className="flex items-center gap-3 mt-6 text-white/80">
            <MapPin className="w-5 h-5" />
            {property.location}
          </div>
        </div>

      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-12 grid lg:grid-cols-[2fr_1fr] gap-24">

          {/* MAIN CONTENT */}
          <div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-20 pb-16 border-b border-blue-950/10">
              <LuxuryMetric icon={Bed} value={property.bedrooms} label="Suites" />
              <LuxuryMetric icon={Bath} value={property.bathrooms} label="Salles d'eau" />
              <LuxuryMetric icon={Maximize} value={property.surface} label="M²" />
            </div>

            {/* DESCRIPTION */}
            <div className="pt-20">
              <LuxuryTitle>
                {t('propertyDetail.presentation')}
              </LuxuryTitle>

              <p className="text-blue-950/70 text-xl leading-relaxed max-w-3xl">
                {property.description}
              </p>
            </div>

            {/* FEATURES */}
            <div className="pt-24">
              <LuxuryTitle>
                {t('propertyDetail.features')}
              </LuxuryTitle>

              <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                {property.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 items-start"
                  >
                    <Check className="w-5 h-5 text-blue-950/50 mt-1" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= SIDEBAR ================= */}
          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-12 sticky top-32 h-fit rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <div className="pb-10 border-b border-white/20">
              <div className="text-xs tracking-[0.5em] uppercase text-white/60">
                {t('propertyDetail.price')}
              </div>

              <div className="text-6xl font-bold mt-6 tracking-tight">
                {(property.price / 1_000_000).toFixed(0)} M FCFA
              </div>
            </div>

            <div className="pt-12 space-y-6">
              <PremiumActionButton
                icon={MessageCircle}
                label={t('propertyDetail.whatsapp')}
                href={whatsappUrl}
                variant="light"
              />

              <PremiumActionButton
                icon={Phone}
                label={t('propertyDetail.call')}
                href="tel:774308344"
                variant="outline"
              />

              <PremiumActionButton
                icon={Lock}
                label={t('propertyDetail.requestInfo')}
                onClick={() => onNavigate('contact')}
                variant="glass"
              />
            </div>
          </motion.aside>

        </div>
      </section>
    </div>
  )
}

/* ================= COMPONENTS ================= */

function LuxuryMetric({ icon: Icon, value, label }: any) {
  return (
    <div>
      <Icon className="w-8 h-8 text-blue-950/40 mb-6" />
      <div className="text-4xl font-semibold tracking-tight">
        {value}
      </div>
      <div className="text-xs uppercase tracking-[0.4em] text-blue-950/50 mt-2">
        {label}
      </div>
    </div>
  )
}

function LuxuryTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold tracking-tight mb-10">
      {children}
    </h2>
  )
}

function PremiumActionButton({
  icon: Icon,
  label,
  href,
  onClick,
  variant
}: any) {

  const base =
    "w-full flex items-center justify-between px-6 py-5 rounded-xl text-sm tracking-widest uppercase transition-all duration-300"

  const styles: any = {
    light:
      "bg-white text-blue-950 hover:scale-[1.03] hover:shadow-xl",
    outline:
      "border border-white/40 hover:bg-white hover:text-blue-950",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
  }

  const content = (
    <motion.div whileHover={{ x: 5 }} className={`${base} ${styles[variant]}`}>
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        {label}
      </div>
      <span>→</span>
    </motion.div>
  )

  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )

  return <button onClick={onClick}>{content}</button>
}

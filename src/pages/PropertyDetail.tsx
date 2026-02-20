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

/* ================= PRICE FORMATTER ================= */

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(price)

export default function PropertyDetail({
  propertyId,
  onNavigate
}: PropertyDetailProps) {

  const { t } = useTranslation()
  const property = properties.find(p => p.id === propertyId)
  const [imageIndex, setImageIndex] = useState(0)

  if (!property) return null

  const images = property.images ?? []
  const features = property.features ?? []

  const whatsappMessage = t('propertyDetail.whatsappMessage', {
    title: property.title,
    price: formatPrice(property.price)
  })

  const whatsappUrl = `https://wa.me/221774308344?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const nextImage = () => {
    if (!images.length) return
    setImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
  }

  const prevImage = () => {
    if (!images.length) return
    setImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
  }

  return (
    <div className="bg-white text-blue-950 pt-16 md:pt-20">

    {/* ================= HERO ================= */}
<section className="relative h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-black">

  {images.length > 0 && (
    <AnimatePresence mode="wait">
      <motion.img
  key={imageIndex}
  src={images[imageIndex]}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-110"
/>

    </AnimatePresence>
  )}

  {/* OVERLAY PLUS LÉGER */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

  {/* NAV BUTTONS */}
  {images.length > 1 && (
    <>
      <button
        onClick={prevImage}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition"
      >
        ←
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition"
      >
        →
      </button>
    </>
  )}

  {/* BACK BUTTON */}
  <button
    onClick={() => onNavigate('properties')}
    className="absolute top-6 md:top-10 left-4 md:left-10 z-40 flex items-center gap-2 md:gap-3 text-white text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase hover:opacity-80 transition"
  >
    <ArrowLeft className="w-4 h-4" />
    {t('propertyDetail.back')}
  </button>

  {/* TITLE */}
  <div className="absolute bottom-12 md:bottom-24 left-4 md:left-16 right-4 text-white z-20">

    <motion.h1
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-[1.05] tracking-tight max-w-4xl"
    >
      {property.title}
    </motion.h1>

    <div className="flex items-center gap-2 mt-4 text-white/90 text-sm md:text-base">
      <MapPin className="w-4 h-4 md:w-5 md:h-5" />
      {property.location}
    </div>

  </div>

  {/* THUMBNAILS */}
  {images.length > 0 && (
    <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 overflow-x-auto px-4 max-w-full">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={() => setImageIndex(i)}
          className={`w-16 h-12 md:w-24 md:h-16 object-cover rounded-md cursor-pointer transition border-2 flex-shrink-0 ${
            i === imageIndex
              ? 'border-white scale-105'
              : 'border-transparent opacity-70 hover:opacity-100'
          }`}
        />
      ))}
    </div>
  )}

</section>


      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-24">

          {/* MAIN */}
          <div>

            {/* METRICS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pb-12 border-b border-blue-950/10">
              <LuxuryMetric icon={Bed} value={property.bedrooms} label="Suites" />
              <LuxuryMetric icon={Bath} value={property.bathrooms} label="Salles d'eau" />
              <LuxuryMetric icon={Maximize} value={property.surface} label="M²" />
            </div>

            {/* PRESENTATION */}
            <div className="pt-12 md:pt-20">
              <LuxuryTitle>{t('propertyDetail.presentation')}</LuxuryTitle>

              <p className="text-blue-950/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
                {property.description}
              </p>
            </div>

            {/* FEATURES */}
            <div className="pt-16 md:pt-24">
              <LuxuryTitle>{t('propertyDetail.features')}</LuxuryTitle>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
                {features.map((feature, i) => (
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

          {/* SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-6 md:p-10 lg:p-12 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] lg:sticky lg:top-32 h-fit"
          >
            <div className="pb-8 border-b border-white/20">
              <div className="text-xs tracking-[0.4em] uppercase text-white/60">
                {t('propertyDetail.price')}
              </div>

              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
                {formatPrice(property.price)}
              </div>
            </div>

            <div className="pt-8 space-y-4">
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
      <Icon className="w-6 md:w-8 h-6 md:h-8 text-blue-950/40 mb-4 md:mb-6" />
      <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        {value}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-950/50 mt-2">
        {label}
      </div>
    </div>
  )
}

function LuxuryTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight mb-6 md:mb-10">
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
    "w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 rounded-xl text-xs md:text-sm tracking-widest uppercase transition-all duration-300"

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
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
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

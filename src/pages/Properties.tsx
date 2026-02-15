import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Bed, Bath, Maximize, MapPin } from 'lucide-react'
import Button from '../components/Button'
import { properties } from '../data/properties'
import type { PropertyType } from '../types'

interface PropertiesProps {
  onNavigate: (page: string, propertyId?: string) => void
}

/* ================= ULTRA PREMIUM BOLD TITLE ================= */

function PremiumTitle({ text }: { text: string }) {
  const letters = text.split('')

  return (
    <h1 className="text-8xl xl:text-[130px] font-bold leading-[0.95] tracking-tight overflow-hidden">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: '120%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.02,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h1>
  )
}

export default function Properties({ onNavigate }: PropertiesProps) {
  const { t } = useTranslation()

  const [selectedType, setSelectedType] =
    useState<PropertyType>('all')

  const [priceRange, setPriceRange] =
    useState<'all' | 'low' | 'medium' | 'high'>('all')

  const filteredProperties = properties.filter((property) => {
    const typeMatch =
      selectedType === 'all' || property.type === selectedType

    let priceMatch = true
    if (priceRange === 'low') priceMatch = property.price < 300_000_000
    if (priceRange === 'medium')
      priceMatch =
        property.price >= 300_000_000 &&
        property.price < 600_000_000
    if (priceRange === 'high')
      priceMatch = property.price >= 600_000_000

    return typeMatch && priceMatch
  })

  return (
    <div className="bg-gradient-to-b from-blue-950 via-blue-950 to-black min-h-screen text-white">

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-44 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-12">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.9em] text-white/30 text-xs"
          >
            {t('properties.hero.label')}
          </motion.span>

          <div className="mt-24">
            <PremiumTitle text={t('properties.hero.titleLine1')} />
            <div className="mt-10">
              <PremiumTitle text={t('properties.hero.titleLine2')} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-white/50 mt-24 max-w-2xl text-xl leading-relaxed"
          >
            {t('properties.hero.description')}
          </motion.p>

        </div>
      </section>

      {/* ================= FILTRES ================= */}
      <section className="sticky top-0 z-40 backdrop-blur-xl bg-blue-950/80 border-y border-white/10">
        <div className="max-w-[1600px] mx-auto px-12 py-8 flex flex-wrap gap-6 items-center">

          {/* TYPES */}
          <div className="flex gap-4 flex-wrap">
            {(['all', 'villa', 'appartement', 'terrain', 'hangar'] as PropertyType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-7 py-3 text-xs tracking-[0.3em] uppercase border transition-all duration-300
                ${
                  selectedType === type
                    ? 'bg-white text-blue-950 border-white'
                    : 'border-white/20 text-white/50 hover:border-white hover:text-white'
                }`}
              >
                {t(`properties.filters.${type}`)}
              </button>
            ))}
          </div>

          {/* PRIX */}
          <div className="flex gap-4 ml-auto flex-wrap">
            {[
              { key: 'all', label: 'budgetAll' },
              { key: 'low', label: 'budgetLow' },
              { key: 'medium', label: 'budgetMedium' },
              { key: 'high', label: 'budgetHigh' }
            ].map((range) => (
              <button
                key={range.key}
                onClick={() => setPriceRange(range.key as any)}
                className={`px-7 py-3 text-xs tracking-[0.3em] border transition-all duration-300
                ${
                  priceRange === range.key
                    ? 'bg-white text-blue-950 border-white'
                    : 'border-white/20 text-white/50 hover:border-white hover:text-white'
                }`}
              >
                {t(`properties.filters.${range.label}`)}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LISTE ================= */}
      <section className="py-36">
        <div className="max-w-[1600px] mx-auto px-12 space-y-44">

          <AnimatePresence>
            {filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-28"
              >
                <p className="text-2xl text-white/60 mb-10">
                  {t('properties.empty.title')}
                </p>

                <Button
                  onClick={() => {
                    setSelectedType('all')
                    setPriceRange('all')
                  }}
                >
                  {t('properties.empty.reset')}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              onClick={() => onNavigate('property', property.id)}
              className="cursor-pointer group"
            >
              <div className="grid lg:grid-cols-2 gap-24 items-center">

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-[700px] object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* CONTENT */}
                <div>

                  <div className="flex justify-between items-center mb-10 text-xs tracking-[0.5em] text-white/40 uppercase">
                    <span>{t(`properties.filters.${property.type}`)}</span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </span>
                  </div>

                  <h3 className="text-6xl font-semibold mb-24 leading-[1.05] tracking-tight">
                    {property.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-20 mb-24">

                    {property.bedrooms && (
                      <div>
                        <Bed className="w-7 h-7 text-white/30 mb-5" />
                        <div className="text-4xl font-medium">
                          {property.bedrooms}
                        </div>
                        <div className="text-xs text-white/30 uppercase tracking-wider">
                          Suites
                        </div>
                      </div>
                    )}

                    {property.bathrooms && (
                      <div>
                        <Bath className="w-7 h-7 text-white/30 mb-5" />
                        <div className="text-4xl font-medium">
                          {property.bathrooms}
                        </div>
                        <div className="text-xs text-white/30 uppercase tracking-wider">
                          Salles d'eau
                        </div>
                      </div>
                    )}

                    <div>
                      <Maximize className="w-7 h-7 text-white/30 mb-5" />
                      <div className="text-4xl font-medium">
                        {property.surface}
                      </div>
                      <div className="text-xs text-white/30 uppercase tracking-wider">
                        M²
                      </div>
                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-12 flex justify-between items-end">

                    <div>
                      <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4">
                        {t('properties.card.estimatedValue')}
                      </p>

                      <div className="text-6xl font-bold tracking-tight">
                        {(property.price / 1_000_000).toFixed(0)} M FCFA
                      </div>
                    </div>

                    <span className="text-xs tracking-[0.6em] text-white/40 group-hover:text-white transition duration-300">
                      {t('properties.card.seeFile')}
                    </span>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  )
}

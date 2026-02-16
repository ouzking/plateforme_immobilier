import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Bed, Bath, Maximize, MapPin, Building2 } from "lucide-react"
import Button from "../components/Button"
import { properties } from "../data/properties"
import type { PropertyType } from "../types"

interface PropertiesProps {
  onNavigate: (page: string, propertyId?: string) => void
}

/* ================= FORMATTER PRIX FCFA ================= */

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(price)
}

/* ================= PREMIUM TITLE ================= */

function PremiumTitle({ text }: { text: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-7xl md:text-8xl xl:text-[120px] font-semibold leading-[0.95] tracking-tight
      bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {text}
    </motion.h1>
  )
}

export default function Properties({ onNavigate }: PropertiesProps) {
  const { t } = useTranslation()

  const [selectedType, setSelectedType] =
    useState<PropertyType>("all")

  const [priceRange, setPriceRange] =
    useState<"all" | "low" | "medium" | "high">("all")

  const filteredProperties = properties.filter((property) => {
    const typeMatch =
      selectedType === "all" || property.type === selectedType

    let priceMatch = true
    if (priceRange === "low") priceMatch = property.price < 300_000_000
    if (priceRange === "medium")
      priceMatch =
        property.price >= 300_000_000 &&
        property.price < 600_000_000
    if (priceRange === "high")
      priceMatch = property.price >= 600_000_000

    return typeMatch && priceMatch
  })

  return (
    <div className="relative bg-gradient-to-b from-blue-950 via-black to-black min-h-screen text-white overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-700/20 blur-[180px] opacity-30 pointer-events-none" />

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-36 relative z-10">
        <div className="max-w-[1600px] mx-auto px-12">

          <span className="uppercase tracking-[0.9em] text-white/30 text-xs">
            {t("properties.hero.label")}
          </span>

          <div className="mt-16 space-y-6">
            <PremiumTitle text={t("properties.hero.titleLine1")} />
            <PremiumTitle text={t("properties.hero.titleLine2")} />
          </div>

          <p className="text-white/50 mt-16 max-w-2xl text-xl leading-relaxed">
            {t("properties.hero.description")}
          </p>

        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="sticky top-0 z-40 backdrop-blur-2xl bg-black/40 border-y border-white/10">
        <div className="max-w-[1600px] mx-auto px-12 py-8 flex flex-wrap gap-6 items-center">

          <div className="flex gap-4 flex-wrap">
            {(["all", "villa", "appartement", "terrain", "hangar", "commerce"] as PropertyType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-8 py-3 text-xs tracking-[0.35em] uppercase rounded-full border transition-all duration-500
                ${
                  selectedType === type
                    ? "bg-white text-black border-white shadow-lg"
                    : "border-white/20 text-white/50 hover:border-white hover:text-white"
                }`}
              >
                {t(`properties.filters.${type}`)}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= COMMERCE HIGHLIGHT ================= */}
      {selectedType === "commerce" && (
        <section className="py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <Building2 className="mx-auto w-12 h-12 text-white/40 mb-8" />
            <h2 className="text-4xl font-semibold mb-6">
              Investissement & Immobilier Commercial
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Boutiques, immeubles professionnels, centres d'affaires et actifs
              à fort rendement situés dans les zones stratégiques de Dakar.
            </p>
          </motion.div>
        </section>
      )}

      {/* ================= PROPERTY LIST ================= */}
      <section className="py-32 relative z-10">
        <div className="max-w-[1600px] mx-auto px-12 space-y-36">

          <AnimatePresence>
            {filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-28"
              >
                <p className="text-2xl text-white/60 mb-10">
                  {t("properties.empty.title")}
                </p>

                <Button
                  onClick={() => {
                    setSelectedType("all")
                    setPriceRange("all")
                  }}
                >
                  {t("properties.empty.reset")}
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
              transition={{ duration: 1 }}
              onClick={() => onNavigate("property", property.id)}
              className="group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2 gap-24 items-center">

                <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    loading="lazy"
                    className="w-full h-[750px] object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 border border-white/10 group-hover:border-white/40 transition duration-700 rounded-2xl" />
                </div>

                <div>

                  <div className="flex justify-between items-center mb-8 text-xs tracking-[0.5em] text-white/40 uppercase">
                    <span>{t(`properties.filters.${property.type}`)}</span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </span>
                  </div>

                  <h3 className="text-5xl xl:text-6xl font-semibold mb-16 leading-[1.1] tracking-tight">
                    {property.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-16 mb-16">

                    {property.type !== "commerce" && property.bedrooms && (
                      <Metric icon={Bed} value={property.bedrooms} label="Suites" />
                    )}

                    {property.type !== "commerce" && property.bathrooms && (
                      <Metric icon={Bath} value={property.bathrooms} label="Salles d'eau" />
                    )}

                    <Metric icon={Maximize} value={property.surface} label="M²" />

                  </div>

                  <div className="border-t border-white/10 pt-10 flex justify-between items-end">
                    <div>
                      <div className="text-5xl font-bold tracking-tight">
                        {formatPrice(property.price)}
                      </div>
                    </div>

                    <span className="text-xs tracking-[0.6em] text-white/40 group-hover:text-white transition duration-500">
                      {t("properties.card.seeFile")}
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

/* ================= METRIC COMPONENT ================= */

function Metric({ icon: Icon, value, label }: any) {
  return (
    <div>
      <Icon className="w-6 h-6 text-white/30 mb-4" />
      <div className="text-3xl font-medium">{value}</div>
      <div className="text-xs text-white/30 uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  )
}

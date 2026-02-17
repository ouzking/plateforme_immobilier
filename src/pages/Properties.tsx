import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { properties } from "../data/properties"
import type { PropertyType } from "../types"

/* ================= FORMAT PRIX ================= */

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(price)

/* ================= PAGE ================= */

export default function Properties({ onNavigate }: any) {
  const { t } = useTranslation()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  const [selectedType, setSelectedType] =
    useState<PropertyType>("all")

  const filteredProperties = properties.filter((property) => {
    return selectedType === "all" || property.type === selectedType
  })

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white overflow-hidden"
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/20 blur-[160px] opacity-30 pointer-events-none" />

      {/* ================= HERO ULTRA ================= */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6"
        >

          {/* LABEL */}
          <div className="uppercase tracking-[0.8em] text-xs text-blue-300 mb-8">
            Collection Immobilière
          </div>

          {/* TITRE SIGNATURE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[120px] font-semibold leading-[0.95] tracking-tight bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            Propriétés
          </h1>

          {/* LIGNE LUMINEUSE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 1.4 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-10"
          />

          {/* SOUS TEXTE LUXE */}
          <p className="text-blue-200/70 mt-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Des résidences d’exception soigneusement sélectionnées dans les zones
            les plus stratégiques et prestigieuses.
          </p>

        </motion.div>

      </section>

      {/* ================= FILTRES ================= */}
      <section className="sticky top-0 z-50 backdrop-blur-xl bg-blue-950/70 border-y border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 py-8">

          <div className="flex gap-4 overflow-x-auto pb-2">
            {(["all", "villa", "appartement", "terrain", "commerce"] as PropertyType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.3em] rounded-full border transition-all duration-500 whitespace-nowrap
                ${
                  selectedType === type
                    ? "bg-white text-blue-950 border-white shadow-xl"
                    : "border-white/20 text-white/50 hover:border-white hover:text-white"
                }`}
              >
                {t(`properties.filters.${type}`)}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section className="py-24 md:py-32">

        <div className="max-w-[1500px] mx-auto px-6 space-y-28">

          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2 }}
                onClick={() => onNavigate("property", property.id)}
                className="group cursor-pointer"
              >

                <div className="relative overflow-hidden rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

                  <motion.img
                    src={property.images?.[0]}
                    alt={property.title}
                    className="w-full h-[400px] sm:h-[500px] md:h-[650px] xl:h-[750px] object-cover transition duration-[2000ms] ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 p-6 md:p-12 w-full">

                    <div className="flex justify-between items-center text-xs tracking-[0.4em] text-white/50 uppercase mb-6">
                      <span>{t(`properties.filters.${property.type}`)}</span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {property.location}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-6">
                      {property.title}
                    </h3>

                    <div className="flex flex-wrap gap-8 mb-8">

                      {property.bedrooms && (
                        <Metric icon={Bed} value={property.bedrooms} label="Suites" />
                      )}

                      {property.bathrooms && (
                        <Metric icon={Bath} value={property.bathrooms} label="SDB" />
                      )}

                      <Metric icon={Maximize} value={property.surface} label="M²" />

                    </div>

                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {formatPrice(property.price)}
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </div>

      </section>
    </div>
  )
}

/* ================= METRIC ================= */

function Metric({ icon: Icon, value, label }: any) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <Icon className="w-5 h-5 text-blue-400" />
      <div className="flex gap-1 items-baseline">
        <span className="font-semibold">{value}</span>
        <span className="text-xs text-white/50">{label}</span>
      </div>
    </div>
  )
}

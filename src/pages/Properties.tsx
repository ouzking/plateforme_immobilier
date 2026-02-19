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
  <section className="py-24 md:py-32 bg-blue-950">

  <div className="max-w-[1600px] mx-auto px-6">

    <div className="grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4 
                    gap-10">

      {filteredProperties.map((property) => (

        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => onNavigate("property", property.id)}
          className="group cursor-pointer"
        >

          <div className="
            bg-blue-900/40
            backdrop-blur-xl
            rounded-2xl
            overflow-hidden
            border border-white/10
            transition-all duration-500
            shadow-[0_15px_50px_rgba(0,0,0,0.6)]
            group-hover:-translate-y-3
            group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.8)]
            group-hover:border-red-600/40
          ">

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={property.images?.[0]}
                alt={property.title}
                className="w-full h-[260px] object-cover 
                           transition duration-700 
                           group-hover:scale-110"
              />

              {/* PRICE BADGE */}
              <div className="absolute top-4 right-4 
                              bg-gradient-to-r from-red-700 via-red-600 to-red-700
                              text-white text-sm font-semibold
                              px-4 py-2 rounded-full
                              shadow-[0_10px_30px_rgba(220,38,38,0.6)]
                              transition duration-500
                              group-hover:scale-110">
                {formatPrice(property.price)}
              </div>

              {/* STATUS */}
              <div className="absolute top-4 left-4 
                              backdrop-blur-xl bg-white/10 border border-white/20
                              text-white text-[10px] tracking-[0.3em]
                              uppercase px-4 py-2 rounded-full">
                À louer
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-4 text-white">

              <div className="text-xs tracking-[0.3em] text-white/40 uppercase">
                {t(`properties.filters.${property.type}`)}
              </div>

              <h3 className="text-lg font-semibold 
                             transition duration-300 
                             group-hover:text-red-500">
                {property.title}
              </h3>

              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                {property.location}
              </div>

              <div className="flex justify-between pt-4 border-t border-white/10 text-white/70 text-sm">

                {(property.type === "villa" || property.type === "appartement") && (
                  <>
                    {property.bedrooms && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {property.bedrooms}
                      </div>
                    )}

                    {property.bathrooms && (
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {property.bathrooms}
                      </div>
                    )}
                  </>
                )}

                <div className="flex items-center gap-1">
                  <Maximize className="w-4 h-4" />
                  {property.surface} m²
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

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

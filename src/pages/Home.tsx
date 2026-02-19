import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Landmark,
  ShieldCheck,
  Briefcase,
  MapPin,  Bed, Bath,
} from 'lucide-react'
//import Button from '../components/Button'
import { properties } from '../data/properties'

interface HomeProps {
  onNavigate: (page: string, propertyId?: string) => void
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useTranslation()
  const featuredProperties = properties.slice(0, 4)

  return (
    <div className="bg-[#f6f7f5] text-blue-950 overflow-hidden">

      {/* ================= HERO CINEMATIC ================= */}
     <section className="relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden">

  {/* IMAGE */}
  <motion.img
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 6 }}
    src="https://www.mysweetimmo.com/uy7i_73zhnb/uploads/2020/08/Capture-decran-2020-08-31-a-14.08.47.png"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/85 to-[#0b1d3a]" />

  <div className="relative z-10 w-full max-w-[1600px] mx-auto
                  px-5 sm:px-8 md:px-12 lg:px-16
                  grid grid-cols-1 lg:grid-cols-2
                  gap-14 lg:gap-24 xl:gap-32
                  items-center
                  pt-28 sm:pt-36 lg:pt-40 pb-20">

    {/* ================= LEFT ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-center lg:text-left"
    >

      <span className="uppercase tracking-[0.35em] sm:tracking-[0.5em] 
                       text-blue-300 text-[9px] sm:text-xs">
        {t('home.hero.tagline')}
      </span>

      <h1 className="text-3xl sm:text-5xl md:text-6xl 
                     lg:text-6xl xl:text-[78px] 2xl:text-[92px]
                     font-light leading-[1.1]
                     mt-6 sm:mt-10 lg:mt-12
                     tracking-tight">
        {t('home.hero.title1')}
        <br />
        <span className="font-semibold bg-gradient-to-r 
                         from-white to-blue-300 
                         bg-clip-text text-transparent">
          {t('home.hero.title2')}
        </span>
      </h1>

      <p className="text-blue-200 mt-6 sm:mt-8 lg:mt-10
                    max-w-md sm:max-w-xl lg:max-w-lg
                    mx-auto lg:mx-0
                    text-sm sm:text-base lg:text-lg
                    leading-relaxed">
        {t('home.hero.description')}
      </p>

      {/* BUTTONS */}
      <div className="mt-10 sm:mt-12 lg:mt-16
                      flex flex-col sm:flex-row
                      justify-center lg:justify-start
                      gap-5 sm:gap-6">

        {/* ===== EXPLORER ===== */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate('properties')}
          className="relative group overflow-hidden
                     px-8 sm:px-10 lg:px-12
                     py-4 sm:py-5
                     rounded-xl sm:rounded-2xl
                     bg-gradient-to-r from-red-600 via-red-700 to-red-800
                     text-white uppercase tracking-[0.25em] sm:tracking-[0.35em]
                     text-[10px] sm:text-xs
                     shadow-[0_20px_60px_rgba(220,38,38,0.45)]
                     transition-all duration-500"
        >
          <span className="absolute inset-0 bg-red-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />

          <span className="absolute -left-40 top-0 w-56 h-full
                           bg-gradient-to-r from-transparent via-red-500/90 to-transparent
                           blur-lg skew-x-12
                           group-hover:left-[140%]
                           transition-all duration-[1300ms] ease-out" />

          <span className="relative z-10 flex items-center justify-center gap-3">
            Explorer
            <span className="text-lg transition-all duration-500 group-hover:translate-x-2">
              →
            </span>
          </span>
        </motion.button>

        {/* ===== CONTACT ===== */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate('contact')}
          className="relative group overflow-hidden
                     px-8 sm:px-10 lg:px-12
                     py-4 sm:py-5
                     rounded-xl sm:rounded-2xl
                     border border-white/30
                     bg-white/10 backdrop-blur-xl
                     text-white uppercase tracking-[0.25em] sm:tracking-[0.35em]
                     text-[10px] sm:text-xs
                     shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                     transition-all duration-500"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-500" />

          <span className="relative z-10 flex items-center justify-center gap-3
                           group-hover:text-blue-950 transition duration-500">
            Contact
            <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </span>
        </motion.button>

      </div>
    </motion.div>

    {/* ================= RIGHT STATS ================= */}
    <div className="grid grid-cols-2 gap-4 sm:gap-6
                    mt-14 lg:mt-0">

      {[
        { key: 'assets', value: '50+' },
        { key: 'clients', value: '90+' },
        { key: 'experience', value: '10+' },
        { key: 'zone', value: t('home.stats.zoneValue') }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="bg-white/5 backdrop-blur-xl
                     border border-white/10
                     p-5 sm:p-6 lg:p-8
                     text-white rounded-xl sm:rounded-2xl
                     shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                     hover:bg-white/10
                     transition duration-500"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            {item.value}
          </div>
          <p className="text-[9px] sm:text-xs tracking-[0.3em]
                        text-blue-300 mt-2 sm:mt-3 uppercase">
            {t(`home.stats.${item.key}`)}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>


      {/* ================= MÉTHODE PREMIUM ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-12 grid md:grid-cols-3 gap-20">
          {[
            { icon: Landmark, key: 'analysis' },
            { icon: ShieldCheck, key: 'security' },
            { icon: Briefcase, key: 'execution' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-950/5 flex items-center justify-center mb-8 group-hover:bg-blue-950 group-hover:text-white transition duration-500">
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {t(`home.method.${item.key}.title`)}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {t(`home.method.${item.key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OPPORTUNITÉS LUXE ================= */}
      {/* ================= OPPORTUNITÉS SIGNATURE ================= */}
{/* ================= COLLECTION SIGNATURE ================= */}
<section className="py-24 md:py-36 bg-[#f6f7f5] overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16 md:mb-24 px-4">
      <span className="uppercase tracking-[0.5em] md:tracking-[0.6em] text-gray-400 text-[10px]">
        {t('home.opportunities.label')}
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-6xl font-light mt-6 tracking-tight text-blue-950 leading-tight">
        {t('home.opportunities.title')}
      </h2>

      <div className="w-16 md:w-24 h-[2px] bg-red-600 mx-auto mt-6 md:mt-8" />
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16">
      {featuredProperties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          onClick={() => onNavigate('property', property.id)}
          className="group relative cursor-pointer rounded-3xl md:rounded-[40px] overflow-hidden
                     shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                     hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                     transition duration-700"
        >

          {/* IMAGE */}
          <div className="relative h-[380px] sm:h-[420px] md:h-[520px] overflow-hidden">

            <img
              src={property.images?.[0]}
              className="w-full h-full object-cover
                         transition duration-[1200ms] ease-out
                         group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t 
                            from-black/85 via-black/40 to-transparent" />

            {/* BADGE */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8
                            bg-white/10 backdrop-blur-xl
                            border border-white/20
                            text-white text-[9px] md:text-[10px]
                            tracking-[0.3em] uppercase
                            px-4 md:px-6 py-2 rounded-full">
              À louer
            </div>

            {/* PRICE */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8
                            bg-red-600 text-white
                            text-xs md:text-sm font-semibold
                            px-4 md:px-6 py-2 rounded-full
                            shadow-xl">
              {new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "XOF",
                maximumFractionDigits: 0
              }).format(property.price)} / mois
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12">

              {/* LOCATION + SURFACE */}
              <div className="flex justify-between items-center text-white/80 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-6">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  {property.location}
                </span>
                <span>{property.surface} m²</span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl md:text-4xl font-light text-white tracking-tight leading-tight
                             group-hover:translate-y-[-6px]
                             transition duration-700">
                {property.title}
              </h3>

              {/* CONDITIONNEL : UNIQUEMENT VILLA / APPARTEMENT */}
              {(property.type === "villa" || property.type === "appartement") && (
                <div className="flex items-center gap-6 mt-4 text-white/80 text-xs md:text-sm">

                  <span className="flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    {property.bedrooms}
                  </span>

                  <span className="flex items-center gap-2">
                    <Bath className="w-4 h-4" />
                    {property.bathrooms}
                  </span>

                </div>
              )}

              {/* CTA */}
              <div className="mt-6 flex items-center gap-3 text-white/70
                              group-hover:text-white transition duration-500">
                <span className="uppercase tracking-[0.35em] text-[10px] md:text-xs">
                  Voir le bien
                </span>
                <span className="text-lg group-hover:translate-x-3 transition duration-500">
                  →
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-20 md:mt-28">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onNavigate('properties')}
        className="relative group overflow-hidden
                   px-10 md:px-16 py-4 md:py-6
                   rounded-full
                   bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950
                   text-white uppercase tracking-[0.4em] text-[10px] md:text-xs
                   shadow-[0_25px_80px_rgba(0,0,0,0.25)]
                   transition-all duration-500"
      >

        <span className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />

        <span className="absolute -left-40 top-0 w-56 h-full
                         bg-gradient-to-r from-transparent via-white/40 to-transparent
                         blur-lg skew-x-12
                         group-hover:left-[140%]
                         transition-all duration-[1300ms] ease-out" />

        <span className="relative z-10 flex items-center gap-4">
          Voir tous les biens
          <span className="text-lg transition-all duration-500 group-hover:translate-x-3">
            →
          </span>
        </span>

      </motion.button>
    </div>

  </div>
</section>





      {/* ================= CTA SIGNATURE ================= */}
     <section className="relative py-24 sm:py-32 md:py-40 
                    bg-gradient-to-b from-blue-950 to-black 
                    text-white text-center overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] 
                  bg-blue-600/20 rounded-full blur-[120px] sm:blur-[160px] 
                  top-[-120px] left-[-120px]" />

  <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] 
                  bg-blue-400/20 rounded-full blur-[120px] sm:blur-[160px] 
                  bottom-[-120px] right-[-120px]" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 md:px-12">

    {/* TITLE */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                   font-light mb-8 sm:mb-10 
                   tracking-tight leading-tight">
      {t('home.cta.title')}
    </h2>

    {/* TEXT */}
    <p className="text-blue-200 mb-12 sm:mb-16 
                  leading-relaxed 
                  text-base sm:text-lg 
                  max-w-2xl mx-auto">
      {t('home.cta.text')}
    </p>

    {/* ===== ULTRA PREMIUM CONTACT BUTTON ===== */}
    <div className="flex justify-center">

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={() => onNavigate('contact')}
    className="relative group overflow-hidden
               px-10 sm:px-14 md:px-16
               py-4 sm:py-5 md:py-6
               rounded-full
               bg-gradient-to-r from-red-600 via-red-700 to-red-800
               text-white
               uppercase tracking-[0.35em] sm:tracking-[0.4em]
               text-[10px] sm:text-xs
               font-semibold
               shadow-[0_25px_80px_rgba(220,38,38,0.45)]
               transition-all duration-500"
  >

    {/* Hover overlay */}
    <span className="absolute inset-0 
                     bg-gradient-to-r from-red-700 via-red-800 to-red-900
                     opacity-0 group-hover:opacity-100
                     transition duration-500" />

    {/* Shine effect rouge intense */}
    <span className="absolute -left-40 top-0 w-56 h-full
                     bg-gradient-to-r from-transparent via-red-400/80 to-transparent
                     blur-lg skew-x-12
                     group-hover:left-[140%]
                     transition-all duration-[1300ms] ease-out" />

    <span className="relative z-10 flex items-center gap-4">
      {t('home.cta.button')}
      <span className="text-lg transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110">
        →
      </span>
    </span>

  </motion.button>

</div>


    {/* FOOTER */}
    <p className="mt-14 sm:mt-20 
                  text-[10px] sm:text-xs 
                  tracking-[0.4em] sm:tracking-[0.5em] 
                  text-blue-300 uppercase">
      {t('home.cta.footer')}
    </p>

  </div>
</section>

    </div>
  )
}

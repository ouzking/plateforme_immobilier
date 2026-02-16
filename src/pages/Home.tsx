import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Landmark,
  ShieldCheck,
  Briefcase,
  MapPin
} from 'lucide-react'
import Button from '../components/Button'
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
      <section className="relative min-h-screen flex items-center">

        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          src="https://www.mysweetimmo.com/uy7i_73zhnb/uploads/2020/08/Capture-decran-2020-08-31-a-14.08.47.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/85 to-[#0b1d3a]" />

        <div className="relative z-10 max-w-[1500px] mx-auto px-12 grid lg:grid-cols-2 gap-28 items-center pt-40">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <span className="uppercase tracking-[0.6em] text-blue-300 text-xs">
              {t('home.hero.tagline')}
            </span>

            <h1 className="text-6xl xl:text-[82px] font-light leading-[1.02] mt-12 tracking-tight">
              {t('home.hero.title1')}
              <br />
              <span className="font-semibold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                {t('home.hero.title2')}
              </span>
            </h1>

            <p className="text-blue-200 mt-12 max-w-xl text-lg leading-relaxed">
              {t('home.hero.description')}
            </p>

            <div className="mt-20 flex flex-wrap gap-8">

  {/* ===== EXPLORER PREMIUM ===== */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={() => onNavigate('properties')}
    className="relative group overflow-hidden px-12 py-6 rounded-2xl 
           bg-gradient-to-r from-red-600 via-red-700 to-red-800
           text-white uppercase tracking-[0.35em] text-xs
           shadow-[0_20px_60px_rgba(220,38,38,0.45)]
           transition-all duration-500"

  >

    {/* Glow animation */}
    <span className="absolute inset-0 bg-red-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* Shine effect */}
    {/* Shine ultra rouge premium */}
<span className="absolute -left-40 top-0 w-56 h-full
                 bg-gradient-to-r 
                 from-transparent 
                 via-red-500/90 
                 to-transparent
                 blur-lg
                 skew-x-12
                 group-hover:left-[140%]
                 transition-all duration-[1300ms] ease-out" />

<span className="relative z-10 flex items-center gap-4">
  Explorer
  <span className="text-lg transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110">
    →
  </span>
</span>

  </motion.button>

  {/* ===== CONTACT LUXURY GLASS ===== */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={() => onNavigate('contact')}
    className="relative group overflow-hidden px-12 py-6 rounded-2xl 
               border border-white/30
               bg-white/10 backdrop-blur-xl
               text-white uppercase tracking-[0.35em] text-xs
               shadow-[0_20px_60px_rgba(0,0,0,0.25)]
               transition-all duration-500"
  >

    {/* Hover background */}
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-500" />

    <span className="relative z-10 flex items-center gap-4 
                     group-hover:text-blue-950 transition duration-500">
      Contact
      <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
        →
      </span>
    </span>
  </motion.button>

</div>

          </motion.div>

          {/* RIGHT STATS GLASS */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { key: 'assets', value: '300+' },
              { key: 'clients', value: '500+' },
              { key: 'experience', value: '10+' },
              { key: 'zone', value: t('home.stats.zoneValue') }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="text-4xl font-semibold tracking-tight">
                  {item.value}
                </div>
                <p className="text-xs tracking-[0.4em] text-blue-300 mt-3 uppercase">
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
<section className="py-32 bg-[#f6f7f5]">
  <div className="max-w-[1500px] mx-auto px-12">

    <div className="flex justify-between items-end mb-16">
      <div>
        <span className="uppercase tracking-[0.55em] text-gray-400 text-[10px]">
          {t('home.opportunities.label')}
        </span>

        {/* Titre réduit + plus élégant */}
        <h2 className="text-[38px] font-light mt-4 tracking-tight text-blue-950">
          {t('home.opportunities.title')}
        </h2>
      </div>

      <Button
        variant="outline"
        onClick={() => onNavigate('properties')}
        className="tracking-[0.35em] text-xs"
      >
        {t('home.opportunities.cta')}
      </Button>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {featuredProperties.map((property) => (
        <motion.div
          key={property.id}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          onClick={() => onNavigate('property', property.id)}
          className="group cursor-pointer bg-white rounded-3xl overflow-hidden
                     shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                     transition duration-500"
        >
          {/* IMAGE PLUS RAFFINÉE */}
          <div className="relative h-[300px] overflow-hidden">
            <img
              src={property.images?.[0]}
              className="w-full h-full object-cover transition duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          <div className="p-10">

            <div className="flex justify-between text-[10px] tracking-[0.4em] text-gray-400 uppercase mb-6">
              <span>{property.type}</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {property.location}
              </span>
            </div>

            <h3 className="text-[22px] font-medium mb-8 tracking-tight text-blue-950 group-hover:text-black transition">
              {property.title}
            </h3>

            <div className="flex justify-between items-end">

              {/* PRIX NON ARRONDI – FORMAT BANCAIRE */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.35em] mb-3">
                  {t('home.opportunities.price')}
                </p>

                <div className="text-[26px] font-semibold tracking-tight text-blue-950">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "XOF",
                    maximumFractionDigits: 0
                  }).format(property.price)}
                </div>
              </div>

              <div className="text-sm text-gray-500 tracking-wide">
                {property.surface} m²
              </div>

            </div>

          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* ================= CTA SIGNATURE ================= */}
      <section className="py-40 bg-gradient-to-b from-blue-950 to-black text-white text-center relative overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[160px] bottom-[-150px] right-[-150px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-12">

          <h2 className="text-5xl font-light mb-10 tracking-tight">
            {t('home.cta.title')}
          </h2>

          <p className="text-blue-200 mb-16 leading-relaxed">
            {t('home.cta.text')}
          </p>

          <Button
            size="lg"
            onClick={() => onNavigate('contact')}
            className="tracking-[0.4em]"
          >
            {t('home.cta.button')}
          </Button>

          <p className="mt-20 text-xs tracking-[0.5em] text-blue-300 uppercase">
            {t('home.cta.footer')}
          </p>

        </div>
      </section>

    </div>
  )
}

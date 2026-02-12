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

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen">
        <img
          src="https://www.mysweetimmo.com/uy7i_73zhnb/uploads/2020/08/Capture-decran-2020-08-31-a-14.08.47.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/90 to-[#0b1d3a]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 pt-40 pb-24 grid lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <span className="uppercase tracking-[0.45em] text-blue-300 text-xs">
              {t('home.hero.tagline')}
            </span>

            <h1 className="text-6xl xl:text-7xl font-light leading-[1.05] mt-10">
              {t('home.hero.title1')}
              <br />
              <span className="font-semibold">
                {t('home.hero.title2')}
              </span>
            </h1>

            <p className="text-lg text-blue-200 mt-10 max-w-xl leading-relaxed">
              {t('home.hero.description')}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6 self-end">
            {[
              { key: 'assets', value: '300+' },
              { key: 'clients', value: '500+' },
              { key: 'experience', value: '10+' },
              { key: 'zone', value: t('home.stats.zoneValue') }
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/20 p-6 backdrop-blur-sm text-white"
              >
                <div className="text-3xl font-medium">{item.value}</div>
                <p className="text-xs tracking-widest text-blue-300 mt-2">
                  {t(`home.stats.${item.key}`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MÉTHODE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-3 gap-14">
          {[
            { icon: Landmark, key: 'analysis' },
            { icon: ShieldCheck, key: 'security' },
            { icon: Briefcase, key: 'execution' }
          ].map((item, i) => (
            <div key={i} className="flex gap-5">
              <item.icon className="w-7 h-7 text-blue-950 mt-1" />
              <div>
                <h3 className="font-medium text-lg">
                  {t(`home.method.${item.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {t(`home.method.${item.key}.text`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPPORTUNITÉS ================= */}
      <section className="py-28 bg-[#f6f7f5]">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="uppercase tracking-[0.4em] text-gray-400 text-xs">
                {t('home.opportunities.label')}
              </span>
              <h2 className="text-4xl font-light mt-4">
                {t('home.opportunities.title')}
              </h2>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('properties')}
              className="tracking-widest"
            >
              {t('home.opportunities.cta')}
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProperties.map((property) => (
              <motion.div
                key={property.id}
                whileHover={{ x: 6 }}
                onClick={() => onNavigate('property', property.id)}
                className="cursor-pointer bg-white border shadow-sm hover:shadow-xl transition"
              >
                <div className="grid grid-cols-[220px_1fr]">
                  <div className="relative">
                    <img
                      src={property.images[0]}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between mb-4 text-xs text-gray-400">
                        <span className="tracking-widest">
                          {property.type.toUpperCase()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {property.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-6">
                        {property.title}
                      </h3>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-400">
                          {t('home.opportunities.price')}
                        </p>
                        <div className="text-2xl font-semibold">
                          {(property.price / 1_000_000).toFixed(0)} M FCFA
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
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

      {/* ================= CTA ================= */}
      <section className="py-32 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-4xl font-light mb-8">
            {t('home.cta.title')}
          </h2>

          <p className="text-blue-200 max-w-2xl mx-auto mb-14">
            {t('home.cta.text')}
          </p>

          <Button
            size="lg"
            onClick={() => onNavigate('contact')}
            className="tracking-[0.35em]"
          >
            {t('home.cta.button')}
          </Button>

          <p className="mt-20 text-xs tracking-[0.4em] text-blue-300">
            {t('home.cta.footer')}
          </p>

        </div>
      </section>

    </div>
  )
}

import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'

/* ================= ANIMATED TITLE ================= */

function AnimatedTitle({
  children,
  red = false
}: {
  children: React.ReactNode
  red?: boolean
}) {
  return (
    <div className="inline-block text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`font-serif text-5xl md:text-7xl leading-[1.15] tracking-wide font-semibold ${
          red ? 'text-red-600' : 'text-white'
        }`}
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {children}
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '60%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="h-[2px] bg-red-600 mt-6 mx-auto"
      />
    </div>
  )
}

/* ================= PAGE ================= */

export default function About() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const fadeVideo = useTransform(scrollYProgress, [0, 0.3], [1, 0.5])

  return (
    <div
      ref={containerRef}
      className="bg-blue-950 text-white overflow-hidden pt-24 md:pt-28"
    >

      {/* ================= HERO VIDEO ================= */}

      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <motion.div
          style={{ scale: scaleVideo, opacity: fadeVideo }}
          className="absolute inset-0"
        >
          <iframe
            className="absolute top-1/2 left-1/2 
                       w-[120vw] h-[120vh] 
                       -translate-x-1/2 -translate-y-1/2 
                       pointer-events-none"
            src="https://www.youtube.com/embed/KiCD13jXwY8?autoplay=1&mute=1&loop=1&playlist=KiCD13jXwY8&controls=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; fullscreen"
            loading="lazy"
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 px-6 max-w-5xl"
        >
          <span className="uppercase tracking-[0.8em] text-xs text-red-600 font-light">
            {t('about.hero.kicker')}
          </span>

          <h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl
            leading-[1.1] mt-12 tracking-wide font-semibold
            bg-gradient-to-b from-white to-gray-300
            bg-clip-text text-transparent"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('about.hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mt-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('about.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* ================= STORY SECTION 1 ================= */}

      <section className="h-screen flex items-center justify-center px-6 text-center bg-blue-900">
        <AnimatedTitle>
          {t('about.story.s1')}
        </AnimatedTitle>
      </section>

      {/* ================= STORY SECTION 2 ================= */}

      <section className="h-screen flex items-center justify-center bg-blue-950 px-6 text-center">
        <AnimatedTitle red>
          {t('about.story.s2')}
        </AnimatedTitle>
      </section>

      {/* ================= GLOBAL PRESENCE ================= */}

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-blue-950 text-white">

        {/* Background depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-950" />

        {/* Red glow aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[1200px] h-[600px] bg-red-700/20 blur-[200px]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Globe Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20 flex justify-center"
          >
            <div className="w-24 h-24 rounded-full 
                            bg-white/5 backdrop-blur-xl
                            border border-white/10
                            flex items-center justify-center">
              <Globe className="w-10 h-10 text-red-500" />
            </div>
          </motion.div>

          <AnimatedTitle>
            {t('about.global.title')}
          </AnimatedTitle>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto 
                       text-lg md:text-xl 
                       leading-relaxed font-light 
                       text-gray-300"
          >
            {t('about.global.text')}
          </motion.p>

          {/* Cities */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 grid md:grid-cols-3 gap-16 uppercase tracking-[0.5em] text-xs"
          >
            {['Dubaï', 'Paris', 'Dakar'].map((city) => (
              <div key={city} className="flex flex-col items-center">
                <span className="text-white/60">{city}</span>
                <div className="w-12 h-px bg-red-600/40 mt-6" />
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-28"
          >
            <a
              href="https://wa.me/221774308344"
              className="group relative inline-flex items-center justify-center
                         px-14 py-5 rounded-full
                         bg-gradient-to-r from-red-600 to-red-700
                         text-white text-xs uppercase tracking-[0.5em]
                         overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 
                               bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               translate-x-[-120%] 
                               group-hover:translate-x-[130%] 
                               transition duration-1000" />

              <span className="relative z-10">
                {t('about.global.button')}
              </span>
            </a>
          </motion.div>

          <div className="mt-32 text-[10px] uppercase tracking-[0.6em] text-gray-600">
            {t('about.global.signature')}
          </div>

        </div>
      </section>

    </div>
  )
}

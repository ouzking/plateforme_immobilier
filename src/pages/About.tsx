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
    <div className="inline-block text-center px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] tracking-wide font-semibold ${
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
        className="h-[2px] bg-red-600 mt-4 mx-auto"
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
      className="bg-blue-950 text-white overflow-hidden pt-20 sm:pt-24 md:pt-28"
    >

      {/* ================= HERO VIDEO ================= */}
      <section className="relative h-[80vh] sm:h-[90vh] md:h-screen flex items-center justify-center text-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <motion.div
          style={{ scale: scaleVideo, opacity: fadeVideo }}
          className="absolute inset-0"
        >
          <iframe
            className="absolute top-1/2 left-1/2 
                       w-[120vw] sm:w-[110vw] md:w-[100vw] 
                       h-[120vh] sm:h-[110vh] md:h-[100vh]
                       -translate-x-1/2 -translate-y-1/2 
                       pointer-events-none"
            src="https://www.youtube.com/embed/KiCD13jXwY8?autoplay=1&mute=1&loop=1&playlist=KiCD13jXwY8&controls=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; fullscreen"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 px-4 sm:px-6 max-w-5xl"
        >
          <span className="uppercase tracking-[0.8em] text-[10px] sm:text-xs text-red-600 font-light">
            {t('about.hero.kicker')}
          </span>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                       leading-[1.1] mt-6 sm:mt-8 md:mt-12 tracking-wide font-semibold
                       bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('about.hero.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 md:mt-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('about.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* ================= STORY SECTION 1 ================= */}
      <section className="h-auto sm:h-[80vh] flex items-center justify-center px-4 sm:px-6 text-center bg-blue-900 py-16 sm:py-20">
        <AnimatedTitle>
          {t('about.story.s1')}
        </AnimatedTitle>
      </section>

      {/* ================= STORY SECTION 2 ================= */}
      <section className="h-auto sm:h-[80vh] flex items-center justify-center bg-blue-950 px-4 sm:px-6 text-center py-16 sm:py-20">
        <AnimatedTitle red>
          {t('about.story.s2')}
        </AnimatedTitle>
      </section>

      {/* ================= GLOBAL PRESENCE ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-blue-950 text-white">

        {/* Background depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-950" />

        {/* Red glow aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[300px] sm:w-[600px] md:w-[900px] lg:w-[1200px] 
                        h-[150px] sm:h-[300px] md:h-[450px] lg:h-[600px] 
                        bg-red-700/20 blur-[100px] sm:blur-[150px] md:blur-[200px]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Globe Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 flex justify-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full 
                            bg-white/5 backdrop-blur-xl
                            border border-white/10
                            flex items-center justify-center">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
            </div>
          </motion.div>

          <AnimatedTitle>
            {t('about.global.title')}
          </AnimatedTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 max-w-4xl mx-auto 
                       text-base sm:text-lg md:text-xl 
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
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 uppercase tracking-[0.5em] text-xs"
          >
            {['Dubaï', 'Paris', 'Dakar'].map((city) => (
              <div key={city} className="flex flex-col items-center">
                <span className="text-white/60">{city}</span>
                <div className="w-8 sm:w-12 h-px bg-red-600/40 mt-4 sm:mt-6" />
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-28"
          >
            <a
              href="https://wa.me/221774308344"
              className="group relative inline-flex items-center justify-center
                         px-10 sm:px-14 py-3 sm:py-5 rounded-full
                         bg-gradient-to-r from-red-600 to-red-700
                         text-white text-xs sm:text-sm uppercase tracking-[0.5em]
                         overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 
                               bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               -translate-x-[120%] 
                               group-hover:translate-x-[130%] 
                               transition duration-1000" />

              <span className="relative z-10">
                {t('about.global.button')}
              </span>
            </a>
          </motion.div>

          <div className="mt-16 sm:mt-32 text-[10px] sm:text-xs uppercase tracking-[0.6em] text-gray-600">
            {t('about.global.signature')}
          </div>

        </div>
      </section>

    </div>
  )
}

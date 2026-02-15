import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'

/* ================= MAGNETIC CTA ================= */

function MagneticCTA({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
  }

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      onMouseMove={move}
      onMouseLeave={() => (ref.current!.style.transform = 'translate(0,0)')}
      className="relative inline-flex items-center justify-center px-16 py-5
      border border-red-600 text-white tracking-[0.35em] text-xs uppercase
      overflow-hidden transition duration-500 hover:text-white"
    >
      <span className="absolute inset-0 bg-red-600 translate-y-full hover:translate-y-0 transition-transform duration-500" />
      <span className="relative z-10">{children}</span>
    </a>
  )
}

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
        transition={{ duration: 1, ease: 'easeOut' }}
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
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
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

  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const fadeVideo = useTransform(scrollYProgress, [0, 0.3], [1, 0.4])

  return (
    <div
      ref={containerRef}
      className="bg-blue-950 text-white overflow-hidden pt-24 md:pt-28"
    >

      {/* ================= HERO VIDEO ================= */}

      <section className="relative h-screen flex items-center justify-center text-center">

    <motion.div
  style={{ scale: scaleVideo, opacity: fadeVideo }}
  className="absolute inset-0 w-full h-full overflow-hidden"
>
  {/* VIDEO */}
  <iframe
    className="absolute top-1/2 left-1/2 
               w-[120vw] h-[120vh] 
               -translate-x-1/2 -translate-y-1/2 
               pointer-events-none"
    src="https://www.youtube.com/embed/KiCD13jXwY8?autoplay=1&mute=1&loop=1&playlist=KiCD13jXwY8&controls=0&rel=0&modestbranding=1&playsinline=1"
    frameBorder="0"
    allow="autoplay; fullscreen"
  />

  {/* OVERLAY LUXE */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
</motion.div>




        {/* Overlay harmonisé */}
        <div className="absolute inset-0 bg-blue-950/80" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
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

          <p className="text-xl md:text-2xl text-gray-300 mt-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
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

      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-blue-900">

        <Globe className="w-10 h-10 mb-10 text-red-600 opacity-80" />

        <AnimatedTitle>
          {t('about.global.title')}
        </AnimatedTitle>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 max-w-3xl mt-14 mb-16 text-lg leading-relaxed font-light tracking-wide"
        >
          {t('about.global.text')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-12 text-sm tracking-[0.5em] uppercase text-gray-300 mb-20"
        >
          <span>Dubaï</span>
          <span>Paris</span>
          <span>Dakar</span>
        </motion.div>

        <MagneticCTA href="https://wa.me/221774308344">
          {t('about.global.button')}
        </MagneticCTA>

        <p className="mt-20 text-xs tracking-[0.4em] text-gray-500">
          {t('about.global.signature')}
        </p>

      </section>

    </div>
  )
}

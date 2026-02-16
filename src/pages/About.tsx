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

   {/* ================= GLOBAL PRESENCE – BILLIONAIRE LEVEL ================= */}

<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-blue-950 text-white">

  {/* ===== DEPTH BACKGROUND ===== */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-950" />

  {/* Luxury red aura */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[1400px] h-[700px] bg-red-700/20 blur-[220px] opacity-40" />

  {/* Subtle gold light */}
  <div className="absolute bottom-0 left-0 w-full h-1/2 
                  bg-gradient-to-t from-black via-transparent to-transparent" />

  {/* Premium top divider */}
  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto text-center">

    {/* ===== CORPORATE BADGE ===== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4 }}
      viewport={{ once: true }}
      className="mb-20 flex justify-center"
    >
      <div className="relative">

        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full 
                        bg-red-600/30 blur-3xl scale-125" />

        <div className="relative w-28 h-28 rounded-full 
                        bg-white/[0.04] backdrop-blur-2xl
                        border border-white/20
                        flex items-center justify-center
                        shadow-[0_40px_120px_rgba(0,0,0,0.9)]">

          <Globe className="w-12 h-12 text-red-500" />

        </div>
      </div>
    </motion.div>

    {/* ===== TITLE BLOCK ===== */}
    <div className="space-y-8">

      <AnimatedTitle>
        {t('about.global.title')}
      </AnimatedTitle>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-[11px] uppercase tracking-[0.7em] text-red-500"
      >
        Billionaire Real Estate Group • Global Strategic Expansion
      </motion.div>

    </div>

    {/* ===== DESCRIPTION ===== */}
    <motion.p
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-24 max-w-4xl mx-auto 
                 text-lg md:text-xl 
                 leading-relaxed font-light 
                 text-gray-300 tracking-wide"
    >
      {t('about.global.text')}
    </motion.p>

    {/* ===== WORLD PRESENCE GRID ===== */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true }}
      className="mt-32 grid md:grid-cols-3 gap-16 uppercase tracking-[0.6em] text-xs"
    >
      {["Dubaï", "Paris", "Dakar"].map((city) => (
        <div key={city} className="group relative flex flex-col items-center">

          <span className="text-white/60 group-hover:text-white transition duration-700">
            {city}
          </span>

          <div className="w-12 h-px bg-red-600/40 mt-6 
                          group-hover:w-20 transition-all duration-700" />

        </div>
      ))}
    </motion.div>

    {/* ===== LUXURY CTA ===== */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1 }}
      viewport={{ once: true }}
      className="mt-36"
    >
      <a
        href="https://wa.me/221774308344"
        className="group relative inline-flex items-center justify-center
                   px-16 py-6 rounded-full
                   bg-gradient-to-r from-red-600 to-red-700
                   text-white text-xs uppercase tracking-[0.6em]
                   shadow-[0_30px_100px_rgba(0,0,0,0.9)]
                   overflow-hidden transition-all duration-700"
      >
        {/* Billionaire light sweep */}
        <span className="absolute inset-0 
                         bg-gradient-to-r from-transparent via-white/30 to-transparent 
                         translate-x-[-120%] 
                         group-hover:translate-x-[130%] 
                         transition duration-1000 ease-out" />

        <span className="relative z-10">
          {t('about.global.button')}
        </span>
      </a>
    </motion.div>

    {/* ===== SIGNATURE ===== */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      viewport={{ once: true }}
      className="mt-40 text-[10px] uppercase tracking-[0.7em] text-gray-600"
    >
      {t('about.global.signature')}
    </motion.div>

  </div>
</section>



    </div>
  )
}

import { useState, FormEvent, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles
} from 'lucide-react'

/* ================= PREMIUM BUTTON ================= */

function LuxuryButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current!.style.transform = 'translate(0,0)')}
      className="relative overflow-hidden rounded-2xl px-14 py-5 
      font-semibold tracking-widest uppercase text-sm
      bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900
      border border-blue-700 shadow-2xl
      transition-all duration-300 hover:scale-[1.03]"
    >
      <span className="relative z-10 flex items-center gap-3 text-white">
        {children}
      </span>

      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-40 transition duration-500 blur-xl" />
    </button>
  )
}

/* ================= PAGE ================= */

export default function Contact() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [projectType, setProjectType] = useState<'buy' | 'sell' | 'invest'>('buy')

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 600], [0, 120])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2500)
  }

  return (
    <div className="relative min-h-screen bg-blue-950 text-white overflow-hidden">

      {/* BACKGROUND LIGHT */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-3xl"
      />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="uppercase tracking-[0.4em] text-xs text-blue-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t('contact.hero.tagline')}
          </span>

          <h1 className="text-5xl md:text-6xl font-serif mt-8 leading-tight">
            {t('contact.hero.title1')}
            <span className="block text-blue-400">
              {t('contact.hero.title2')}
            </span>
          </h1>

          <p className="mt-8 text-blue-200/70 max-w-2xl mx-auto">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-blue-900/40
            backdrop-blur-2xl border border-blue-800
            rounded-3xl p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)]
            space-y-12"
          >

            {/* PROJECT TYPE */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { id: 'buy', label: t('contact.form.buy') },
                { id: 'sell', label: t('contact.form.sell') },
                { id: 'invest', label: t('contact.form.invest') }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`rounded-2xl py-6 border transition-all duration-300
                  ${
                    projectType === item.id
                      ? 'border-blue-400 bg-blue-800/60 shadow-lg scale-105'
                      : 'border-blue-800 bg-blue-950/50 hover:bg-blue-900/50'
                  }`}
                >
                  <p className="tracking-widest uppercase text-sm">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>

            {/* INPUTS */}
            <LuxuryInput label={t('contact.form.name')} />
            <LuxuryInput label={t('contact.form.email')} type="email" />
            <LuxuryInput label={t('contact.form.phone')} type="tel" />

            {projectType === 'buy' && (
              <>
                <LuxuryInput label="Budget estimé (FCFA)" />
                <LuxuryInput label="Zone recherchée" />
              </>
            )}

            {projectType === 'sell' && (
              <>
                <LuxuryInput label="Type de bien à vendre" />
                <LuxuryInput label="Localisation du bien" />
              </>
            )}

            {projectType === 'invest' && (
              <>
                <LuxuryInput label="Montant d'investissement" />
                <LuxuryInput label="Durée d'investissement souhaitée" />
              </>
            )}

            <LuxuryTextarea label={t('contact.form.message')} />

            <LuxuryButton>
              <Send className="w-4 h-4" />
              {loading ? 'Envoi...' : t('contact.form.button')}
            </LuxuryButton>

            <div className="flex items-center gap-3 text-xs tracking-wider text-blue-300/60 uppercase">
              <ShieldCheck className="w-4 h-4" />
              {t('contact.form.security')}
            </div>

          </form>

          {/* SIDEBAR */}
          <div className="space-y-10">

            <div className="bg-blue-900/40 backdrop-blur-xl border border-blue-800 rounded-3xl p-10">
              <h3 className="text-lg font-serif mb-8 tracking-wide">
                {t('contact.sidebar.direct')}
              </h3>

              <p className="flex items-center gap-4 text-blue-300 mb-5">
                <Phone /> +221 77 430 83 44
              </p>

              <p className="flex items-center gap-4 text-blue-300 mb-5">
                <Mail /> contact@absimmo.sn
              </p>

              <p className="flex items-center gap-4 text-blue-300">
                <MapPin /> Dakar – Sénégal
              </p>
            </div>

            <a
              href="https://wa.me/221774308344"
              target="_blank"
              className="block text-center py-5 rounded-2xl font-semibold tracking-widest uppercase text-sm
              bg-green-600 hover:bg-green-500 transition"
            >
              <MessageCircle className="inline mr-2 w-4 h-4" />
              WhatsApp Business
            </a>

          </div>

        </div>
      </section>
    </div>
  )
}

/* ================= LUXURY INPUT ================= */

function LuxuryInput({ label, type = 'text' }: { label: string, type?: string }) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        placeholder=" "
        className="peer w-full bg-transparent 
        border-b border-white/30
        py-5 text-white tracking-wide
        placeholder-transparent
        focus:border-white focus:outline-none
        transition-all duration-500"
      />

      <label
        className="absolute left-0 top-5 text-white/60 text-sm tracking-wider
        transition-all duration-300
        peer-placeholder-shown:top-5
        peer-focus:-top-3
        peer-focus:text-xs
        peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  )
}


function LuxuryTextarea({ label }: { label: string }) {
  return (
    <div className="relative">
      <textarea
        rows={4}
        required
        placeholder=" "
        className="peer w-full bg-transparent 
        border-b border-white/30
        py-5 text-white tracking-wide
        placeholder-transparent resize-none
        focus:border-white focus:outline-none
        transition-all duration-500"
      />

      <label
        className="absolute left-0 top-5 text-white/60 text-sm tracking-wider
        transition-all duration-300
        peer-placeholder-shown:top-5
        peer-focus:-top-3
        peer-focus:text-xs
        peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  )
}


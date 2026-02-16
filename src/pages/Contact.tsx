import { useState, useRef } from 'react'
import type { FormEvent } from 'react'
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
    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
  }

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current!.style.transform = 'translate(0,0)')}
      className="relative overflow-hidden rounded-2xl px-14 py-5 
      font-semibold tracking-[0.35em] uppercase text-xs
      bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900
      border border-blue-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      transition-all duration-300 hover:scale-[1.03]"
    >
      <span className="relative z-10 flex items-center gap-3 text-white">
        {children}
      </span>
    </button>
  )
}

/* ================= PAGE ================= */

export default function Contact() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [projectType, setProjectType] =
    useState<'buy' | 'sell' | 'invest' | 'rent'>('buy')

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 600], [0, 140])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2500)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-950 via-[#08152c] to-black text-white overflow-hidden">

      {/* LIGHT EFFECTS */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[200px]"
      />

      {/* HERO */}
      <section className="pt-44 pb-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <span className="uppercase tracking-[0.6em] text-[11px] text-blue-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t('contact.hero.tagline')}
          </span>

          <h1 className="text-5xl md:text-7xl font-light mt-10 leading-[1.1] tracking-tight">
            Discutons de votre
            <span className="block font-semibold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              projet immobilier d’exception
            </span>
          </h1>

          <p className="mt-10 text-blue-200/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Nous vous accompagnons dans chaque décision stratégique :
            acquisition, vente, location ou investissement haut rendement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-36 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white/5
            backdrop-blur-3xl border border-white/10
            rounded-3xl p-14 shadow-[0_0_100px_rgba(0,0,0,0.6)]
            space-y-14"
          >

            {/* PROJECT TYPE */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { id: 'buy', label: 'Acheter' },
                { id: 'sell', label: 'Vendre' },
                { id: 'rent', label: 'Location' },
                { id: 'invest', label: 'Investir' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`rounded-2xl py-6 border transition-all duration-300
                  ${
                    projectType === item.id
                      ? 'border-blue-400 bg-blue-800/60 shadow-lg scale-105'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <p className="tracking-[0.35em] uppercase text-xs">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>

            {/* INPUTS */}
            <LuxuryInput label="Nom complet" />
            <LuxuryInput label="Adresse email" type="email" />
            <LuxuryInput label="Téléphone" type="tel" />

            {projectType === 'buy' && (
              <>
                <LuxuryInput label="Budget estimé (FCFA)" />
                <LuxuryInput label="Zone recherchée" />
              </>
            )}

            {projectType === 'sell' && (
              <>
                <LuxuryInput label="Type de bien" />
                <LuxuryInput label="Localisation du bien" />
              </>
            )}

            {projectType === 'rent' && (
              <>
                <LuxuryInput label="Budget mensuel (FCFA)" />
                <LuxuryInput label="Durée souhaitée" />
              </>
            )}

            {projectType === 'invest' && (
              <>
                <LuxuryInput label="Montant d'investissement" />
                <LuxuryInput label="Objectif de rendement" />
              </>
            )}

            <LuxuryTextarea label="Décrivez votre projet" />

            <LuxuryButton>
              <Send className="w-4 h-4" />
              {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
            </LuxuryButton>

            <div className="flex items-center gap-3 text-[10px] tracking-[0.35em] text-blue-300/60 uppercase">
              <ShieldCheck className="w-4 h-4" />
              Données strictement confidentielles
            </div>

          </form>

          {/* SIDEBAR */}
          <div className="space-y-10">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h3 className="text-xl font-light mb-10 tracking-wide">
                Contact direct
              </h3>

              <p className="flex items-center gap-4 text-blue-300 mb-6">
                <Phone /> +221 77 430 83 44
              </p>

              <p className="flex items-center gap-4 text-blue-300 mb-6">
                <Mail /> contact@absimmo.sn
              </p>

              <p className="flex items-center gap-4 text-blue-300">
                <MapPin /> Dakar – Sénégal
              </p>
            </div>

            <a
              href="https://wa.me/221774308344"
              target="_blank"
              className="block text-center py-5 rounded-2xl font-semibold tracking-[0.35em] uppercase text-xs
              bg-green-600 hover:bg-green-500 transition shadow-xl"
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

/* ================= INPUTS ================= */

function LuxuryInput({ label, type = 'text' }: { label: string, type?: string }) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        placeholder=" "
        className="peer w-full bg-transparent 
        border-b border-white/20
        py-6 text-white tracking-wide
        placeholder-transparent
        focus:border-blue-400 focus:outline-none
        transition-all duration-500"
      />

      <label
        className="absolute left-0 top-6 text-white/50 text-xs tracking-[0.25em]
        transition-all duration-300
        peer-placeholder-shown:top-6
        peer-focus:-top-3
        peer-focus:text-[10px]
        peer-focus:text-blue-400"
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
        border-b border-white/20
        py-6 text-white tracking-wide
        placeholder-transparent resize-none
        focus:border-blue-400 focus:outline-none
        transition-all duration-500"
      />

      <label
        className="absolute left-0 top-6 text-white/50 text-xs tracking-[0.25em]
        transition-all duration-300
        peer-placeholder-shown:top-6
        peer-focus:-top-3
        peer-focus:text-[10px]
        peer-focus:text-blue-400"
      >
        {label}
      </label>
    </div>
  )
}

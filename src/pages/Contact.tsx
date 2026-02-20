import { useState, useRef, useEffect } from 'react'
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

function LuxuryButton({
  children,
  loading
}: {
  children: React.ReactNode
  loading?: boolean
}) {
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
      type="submit"
      disabled={loading}
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() =>
        ref.current && (ref.current.style.transform = 'translate(0,0)')
      }
      className="relative overflow-hidden rounded-2xl px-10 sm:px-14 py-4 sm:py-5 
      font-semibold tracking-[0.35em] uppercase text-xs sm:text-sm
      bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900
      border border-blue-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      transition-all duration-300 hover:scale-[1.03]
      disabled:opacity-60 disabled:cursor-not-allowed"
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
    useState<'buy' | 'sell' | 'rent' | 'commerce'>('buy')

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [field1, setField1] = useState('')
  const [field2, setField2] = useState('')

  // Reset automatique quand on change de type
  useEffect(() => {
    setField1('')
    setField2('')
  }, [projectType])

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 600], [0, 140])

  const projectLabels = {
    buy: 'Achat',
    sell: 'Vente',
    rent: 'Location',
    commerce: 'Commerce'
  }

  const dynamicLabels = {
    buy: ['Budget estimé (FCFA)', 'Zone recherchée'],
    sell: ['Type de bien', 'Localisation du bien'],
    rent: ['Budget mensuel (FCFA)', 'Durée souhaitée'],
    commerce: ['Type de commerce', 'Zone d’implantation']
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const message = `
NOUVELLE DEMANDE IMMOBILIÈRE

Type de projet: ${projectLabels[projectType]}

Nom: ${fullName}
Email: ${email}
Téléphone: ${phone}

${dynamicLabels[projectType][0]}: ${field1}
${dynamicLabels[projectType][1]}: ${field2}

Message:
${details}
`

    const whatsappURL =
      `https://wa.me/221774308344?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(whatsappURL, '_blank')
      setLoading(false)
    }, 600)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-950 via-[#08152c] to-black text-white overflow-hidden">

      {/* Parallax background */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[200px]"
      />

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 lg:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="uppercase tracking-[0.5em] text-[11px] text-blue-400 flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4" />
            {t('contact.hero.tagline')}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mt-10 leading-tight">
            Discutons de votre
            <span className="block font-semibold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              projet immobilier d’exception
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-36 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-14 shadow-[0_0_100px_rgba(0,0,0,0.6)] space-y-12"
          >

            {/* PROJECT TYPE */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { id: 'buy', label: 'Acheter' },
                { id: 'sell', label: 'Vendre' },
                { id: 'rent', label: 'Location' },
                { id: 'commerce', label: 'Commerce' }
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

            {/* INFOS COMMUNES */}
            <LuxuryInput label="Nom complet" value={fullName} onChange={setFullName} />
            <LuxuryInput label="Adresse email" type="email" value={email} onChange={setEmail} />
            <LuxuryInput label="Téléphone" type="tel" value={phone} onChange={setPhone} />

            {/* CHAMPS DYNAMIQUES */}
            <LuxuryInput
              label={dynamicLabels[projectType][0]}
              value={field1}
              onChange={setField1}
            />

            <LuxuryInput
              label={dynamicLabels[projectType][1]}
              value={field2}
              onChange={setField2}
            />

            <LuxuryTextarea
              label="Décrivez votre projet"
              value={details}
              onChange={setDetails}
            />

            <LuxuryButton loading={loading}>
              <Send className="w-4 h-4" />
              {loading ? 'Redirection...' : 'Envoyer la demande'}
            </LuxuryButton>

            <div className="flex items-center gap-3 text-[10px] tracking-[0.35em] text-blue-300/60 uppercase">
              <ShieldCheck className="w-4 h-4" />
              Données strictement confidentielles
            </div>

          </form>

          {/* SIDEBAR */}
          <div className="space-y-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h3 className="text-xl font-light mb-10">
                Contact direct
              </h3>

              <p className="flex items-center gap-4 text-blue-300 mb-6">
                <Phone className="w-4 h-4" /> +221 77 430 83 44
              </p>

              <p className="flex items-center gap-4 text-blue-300 mb-6">
                <Mail className="w-4 h-4" /> elhadjisane1990@gmail.com
              </p>

              <p className="flex items-center gap-4 text-blue-300">
                <MapPin className="w-4 h-4" /> Dakar – Sénégal
              </p>
            </div>

            <a
              href="https://wa.me/221774308344"
              target="_blank"
              className="block text-center py-4 rounded-2xl font-semibold tracking-[0.35em] text-sm
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

/* ================= INPUT ================= */

function LuxuryInput({
  label,
  type = 'text',
  value,
  onChange
}: {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-transparent border-b border-white/20 py-6 text-white tracking-wide placeholder-transparent focus:border-blue-400 focus:outline-none transition-all duration-500"
      />

      <label className="absolute left-0 top-6 text-white/50 text-sm tracking-[0.25em] transition-all duration-300 peer-placeholder-shown:top-6 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400">
        {label}
      </label>
    </div>
  )
}

function LuxuryTextarea({
  label,
  value,
  onChange
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative">
      <textarea
        rows={4}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-transparent border-b border-white/20 py-6 text-white tracking-wide placeholder-transparent resize-none focus:border-blue-400 focus:outline-none transition-all duration-500"
      />

      <label className="absolute left-0 top-6 text-white/50 text-sm tracking-[0.25em] transition-all duration-300 peer-placeholder-shown:top-6 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400">
        {label}
      </label>
    </div>
  )
}

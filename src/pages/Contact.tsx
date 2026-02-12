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

/* ================= ANIMATIONS ================= */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

/* ================= MAGNETIC BUTTON ================= */

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current!.style.transform = 'translate(0,0)')}
      className="relative overflow-hidden rounded-2xl px-12 py-4 font-semibold text-white
      bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900
      shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>

      <span className="absolute inset-0 bg-white/10 blur-2xl opacity-0 hover:opacity-40 transition duration-500" />
    </button>
  )
}

/* ================= PAGE ================= */

export default function Contact() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [projectType, setProjectType] = useState<'buy' | 'sell' | 'invest'>('buy')

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 600], [0, 150])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#111827] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-blue-300 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            {t('contact.hero.tagline')}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mt-6 mb-8 leading-tight"
          >
            {t('contact.hero.title1')}
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t('contact.hero.title2')}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-100/80"
          >
            {t('contact.hero.description')}
          </motion.p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl space-y-10"
          >

            {/* CHOIX PREMIUM */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { id: 'buy', label: t('contact.form.buy') },
                { id: 'sell', label: t('contact.form.sell') },
                { id: 'invest', label: t('contact.form.invest') }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`rounded-2xl p-6 text-center transition-all duration-300 border
                  ${
                    projectType === item.id
                      ? 'bg-blue-600/20 border-blue-400 shadow-lg shadow-blue-500/20 scale-105'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <p className="font-semibold">{item.label}</p>
                </button>
              ))}
            </div>

            {/* CHAMPS COMMUNS */}
            <Input label={t('contact.form.name')} />
            <Input label={t('contact.form.email')} type="email" />
            <Input label={t('contact.form.phone')} type="tel" />

            {/* CHAMPS DYNAMIQUES */}
            {projectType === 'buy' && (
              <>
                <Input label="Budget estimé (FCFA)" />
                <Input label="Zone recherchée" />
              </>
            )}

            {projectType === 'sell' && (
              <>
                <Input label="Type de bien à vendre" />
                <Input label="Localisation du bien" />
              </>
            )}

            {projectType === 'invest' && (
              <>
                <Input label="Montant d'investissement" />
                <Input label="Durée d'investissement souhaitée" />
              </>
            )}

            <Textarea label={t('contact.form.message')} />

            <MagneticButton>
              <Send className="w-5 h-5" />
              {loading ? 'Envoi...' : t('contact.form.button')}
            </MagneticButton>

            <div className="flex items-center gap-3 text-sm text-blue-200/70">
              <ShieldCheck className="w-5 h-5" />
              {t('contact.form.security')}
            </div>

          </motion.form>

          {/* SIDEBAR */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">
                {t('contact.sidebar.direct')}
              </h3>
              <p className="flex items-center gap-3 mb-4 text-blue-200">
                <Phone /> +221 77 430 83 44
              </p>
              <p className="flex items-center gap-3 mb-4 text-blue-200">
                <Mail /> contact@absimmo.sn
              </p>
              <p className="flex items-center gap-3 text-blue-200">
                <MapPin /> Dakar – Sénégal
              </p>
            </div>

            <a
              href="https://wa.me/221774308344"
              target="_blank"
              className="block text-center py-4 rounded-2xl font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600
              shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="inline mr-2" />
              WhatsApp Business
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}

/* ================= INPUT COMPONENTS ================= */

function Input({ label, type = 'text' }: { label: string, type?: string }) {
  return (
    <div>
      <label className="block text-sm text-blue-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        required
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4
        focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all"
      />
    </div>
  )
}

function Textarea({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm text-blue-200 mb-2">
        {label}
      </label>
      <textarea
        rows={5}
        required
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4
        focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 outline-none transition-all"
      />
    </div>
  )
}

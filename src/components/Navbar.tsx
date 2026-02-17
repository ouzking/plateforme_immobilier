import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Globe
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import image1 from "../assets/absimmo.jpeg"

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'wo', label: 'WO' },
  { code: 'di', label: 'DI' },
]

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navItems = [
    { name: t('navbar.menu.home'), path: 'home' },
    { name: t('navbar.menu.properties'), path: 'properties' },
    { name: t('navbar.menu.about'), path: 'about' },
    { name: t('navbar.menu.contact'), path: 'contact' },
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="h-16 sm:h-20 flex items-center justify-between">

            {/* LOGO */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src={image1}
                  alt="ABS Immo Services"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />
              </div>

              <div className="leading-tight text-left hidden sm:block">
                <div className="text-base sm:text-lg font-semibold text-blue-950">
                  ABS Immo
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-widest text-gray-500 uppercase">
                  {t('navbar.tagline')}
                </div>
              </div>
            </button>

            {/* NAV DESKTOP */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map(item => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className="relative text-sm tracking-wide group"
                >
                  <span
                    className={`transition-colors ${
                      currentPage === item.path
                        ? 'text-blue-950'
                        : 'text-gray-600 group-hover:text-blue-950'
                    }`}
                  >
                    {item.name}
                  </span>

                  {currentPage === item.path && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-950"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* ACTIONS DESKTOP */}
            <div className="hidden lg:flex items-center gap-4">

              {/* LANGUAGE SWITCHER DESKTOP */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white border border-black/10
                  shadow-md hover:shadow-lg transition-all"
                >
                  <Globe className="w-4 h-4 text-blue-950" />
                  <span className="text-sm font-semibold tracking-widest text-blue-950">
                    {i18n.language.toUpperCase()}
                  </span>

                  <motion.span
                    animate={{ rotate: isLangOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▾
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-4 w-36
                      rounded-2xl overflow-hidden
                      bg-white border border-black/10 shadow-xl"
                    >
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full px-5 py-3 text-sm text-blue-950
                          hover:bg-blue-950 hover:text-white transition"
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PHONE BUTTON */}
              <a
                href="tel:774308344"
                className="group flex items-center gap-3 px-6 py-3
                rounded-full bg-blue-950 text-white
                hover:bg-blue-900 transition-all duration-300
                shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium hidden xl:block">
                  +221 77 430 83 44
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-blue-950"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#0b1d3a] to-black" />
            <div className="absolute inset-0 backdrop-blur-2xl" />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative h-full overflow-y-auto px-6 sm:px-10 py-14"
            >
              <div className="flex flex-col min-h-full">

                {/* TOP CONTENT */}
                <div className="flex-1">

                  <div className="flex justify-between items-center mb-10">
                    <span className="uppercase tracking-[0.5em] text-xs text-blue-400">
                      Menu
                    </span>

                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white"
                    >
                      <X size={28} />
                    </button>
                  </div>

                  {/* LANGUAGE MOBILE */}
                  <div className="mb-10">
                    <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
                      Language
                    </p>

                    <div className="flex gap-3 flex-wrap">
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold tracking-widest
                          border transition ${
                            i18n.language === lang.code
                              ? 'bg-white text-blue-950 border-white'
                              : 'border-white/30 text-white hover:bg-white hover:text-blue-950'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* NAV ITEMS */}
                  <div className="space-y-8">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.path}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => {
                          onNavigate(item.path)
                          setIsMenuOpen(false)
                        }}
                        className="group flex items-end gap-6 text-left"
                      >
                        <span className="text-blue-400 text-sm tracking-widest">
                          0{index + 1}
                        </span>

                        <span className="text-3xl sm:text-4xl font-light text-white group-hover:text-blue-400 transition">
                          {item.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* CONTACT BLOCK */}
                <div className="pt-10 mt-12 border-t border-white/10">
                  <a
                    href="tel:774308344"
                    className="flex items-center justify-between text-white mb-6"
                  >
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-lg font-light">
                        +221 77 430 83 44
                      </span>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-blue-400" />
                  </a>

                  <a
                    href="https://wa.me/221774308344"
                    target="_blank"
                    className="block text-center py-4 rounded-2xl 
                    bg-gradient-to-r from-green-600 to-green-500
                    font-semibold tracking-[0.3em] text-xs uppercase"
                  >
                    WhatsApp Business
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

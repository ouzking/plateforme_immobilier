import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import image1 from "../assets/absimmo.jpeg";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'wo', label: 'WO' },
  { code: 'di', label: 'DI' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation(); // 👈 on enlève le namespace ici

  const navItems = [
    { name: t('navbar.menu.home'), path: 'home' },
    { name: t('navbar.menu.properties'), path: 'properties' },
    { name: t('navbar.menu.about'), path: 'about' },
    { name: t('navbar.menu.contact'), path: 'contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="h-20 flex items-center justify-between">

            {/* ===== LOGO ===== */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={image1}
                  alt="ABS Immo Services"
                  className="w-9 h-9 object-contain"
                />
              </div>

              <div className="leading-tight text-left">
                <div className="text-lg font-semibold text-blue-950">
                  ABS Immo
                </div>
                <div className="text-[11px] tracking-widest text-gray-500 uppercase">
                  {t('navbar.tagline')}
                </div>
              </div>
            </button>

            {/* ===== NAV DESKTOP ===== */}
            <div className="hidden md:flex items-center gap-10">
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

            {/* ===== ACTIONS DESKTOP ===== */}
            <div className="hidden md:flex items-center gap-4">

              {/* ===== LANG SWITCHER ===== */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full
                    bg-white/70 backdrop-blur-xl border border-black/10
                    shadow-lg transition-all duration-300 hover:-translate-y-[1px]"
                >
                  <div className="w-8 h-8 rounded-full
                    bg-gradient-to-br from-blue-950 to-blue-900
                    text-white flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-blue-950">
                    {i18n.language.toUpperCase()}
                  </span>

                  <motion.span
                    animate={{ rotate: isLangOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-950/60"
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
                          className="w-full flex items-center justify-between
                            px-5 py-3 text-sm font-medium
                            text-blue-950 transition-all
                            hover:bg-blue-950 hover:text-white"
                        >
                          {lang.label}
                          {i18n.language === lang.code && <span>✓</span>}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ===== TEL ===== */}
              <a
                href="tel:774308344"
                className="group flex items-center gap-3 px-5 py-3
                  border border-blue-950/20 rounded-full
                  hover:border-blue-950 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-sm font-medium text-blue-950">
                  +221 77 430 83 44
                </div>
                <ArrowUpRight className="w-4 h-4 text-blue-950 opacity-0 group-hover:opacity-100 transition" />
              </a>
            </div>

            {/* ===== MENU MOBILE ===== */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-blue-950"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {/* ===== MOBILE MENU PREMIUM ===== */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:hidden fixed inset-0 z-50"
    >
      {/* Background cinematic */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#0b1d3a] to-black" />
      <div className="absolute inset-0 backdrop-blur-2xl" />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative h-full flex flex-col justify-between px-8 py-16"
      >

        {/* TOP SECTION */}
        <div>

          <div className="flex justify-between items-center mb-16">
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

          {/* NAV ITEMS */}
          <div className="space-y-10">
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

                <span className="text-4xl font-light text-white group-hover:text-blue-400 transition duration-300">
                  {item.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* LANGUAGES */}
          <div className="mt-20">
            <p className="uppercase tracking-[0.4em] text-[10px] text-blue-400 mb-6">
              Language
            </p>

            <div className="flex gap-4">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-5 py-2 rounded-full border text-sm tracking-widest transition-all duration-300
                  ${
                    i18n.language === lang.code
                      ? 'border-blue-400 bg-blue-900 text-white'
                      : 'border-white/20 text-white hover:border-blue-400'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM CONTACT BLOCK */}
        <div className="border-t border-white/10 pt-10">

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

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}

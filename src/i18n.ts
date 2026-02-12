import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import fr from './i18n/locales/fr.json'
import en from './i18n/locales/en.json'
import wo from './i18n/locales/wo.json'
import di from './i18n/locales/di.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      wo: { translation: wo },
      di: { translation: di }
    },

    lng: 'fr',              // langue par défaut
    fallbackLng: 'fr',      // si clé manquante

    supportedLngs: ['fr', 'en', 'wo', 'di'],

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  })

export default i18n

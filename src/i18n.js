import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- Archivos de traducción ---
// Crearemos estos archivos en src/locales/es y src/locales/en
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

// --- Configuración de i18next ---
i18n
  .use(LanguageDetector) // Detecta el idioma del navegador/usuario
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next
  .init({
    fallbackLng: 'es', // Idioma de respaldo si el idioma detectado no está disponible
    debug: false, // Poner en true para ver logs de depuración en la consola (útil durante el desarrollo)

    interpolation: {
      escapeValue: false, // React ya se encarga de escapar valores para XSS
    },

    resources: {
      es: {
        translation: translationES, // Carga las traducciones para español
      },
      en: {
        translation: translationEN, // Carga las traducciones para inglés
      },
    },

    // Opciones para la detección de idioma del navegador
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Guarda el idioma preferido en localStorage
    },
  });

export default i18n;
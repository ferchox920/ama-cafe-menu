// src/App.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import menuData from './data/menuData';
import CategorySection from './components/CategorySection/CategorySection';
import ProductModal from './components/ProductModal/ProductModal';
import styles from './App.module.css';
import logoAmaCafe from './assets/logo/logo.svg';

// --- Importar las imágenes de las banderas ---
import flagAR from './assets/icons/flag_ar.svg';
import flagUS from './assets/icons/flag_us.svg';

function App() {
  const { t, i18n } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const developerName = "Fernando Andrés Ramones";
  const githubUrl = "https://github.com/ferchox920";
  const linkedinUrl = "https://www.linkedin.com/in/fernando-andres-ramones-ramones/";
  const developerLocation = "CABA, Argentina";

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <img
          src={logoAmaCafe}
          alt="Ama café Logo - Café y Repostería Terapéutica"
          className={styles.appLogo}
          loading="eager"
          role="img"
        />
        <h1 className={styles.appTitle}>Ama café</h1>
        <p className={styles.appSlogan}>{t('header.slogan')}</p>
      </header>

      {/* Selector de Idioma con Banderas */}
      <div className={styles.languageSelector}>
        <button onClick={() => changeLanguage('es')} className={`${styles.flagButton} ${i18n.language === 'es' ? styles.activeFlag : ''}`}>
          <img src={flagAR} alt={t('language.es_alt')} className={styles.flagIcon} />
        </button>
        <button onClick={() => changeLanguage('en')} className={`${styles.flagButton} ${i18n.language === 'en' ? styles.activeFlag : ''}`}>
          <img src={flagUS} alt={t('language.en_alt')} className={styles.flagIcon} />
        </button>
      </div>

      <main className={styles.menuMain} id="menu-principal">
        {menuData.map((categoryData) => {
          // Lógica para renderizar el título de sección diferente
          if (categoryData.isSectionTitle) {
            return (
              <h2 key={categoryData.id} className={styles.sectionTitle}> {/* Nueva clase CSS */}
                {t(categoryData.translationKey)} {/* Usamos la clave de traducción */}
              </h2>
            );
          }
          return (
            <CategorySection
              key={categoryData.id}
              categoryName={t(`menu.categories.${categoryData.id}`)}
              isotipoSrc={categoryData.isotipo}
              items={categoryData.items}
              onProductClick={openProductModal}
            />
          );
        })}
      </main>

      <footer className={styles.appFooter} role="contentinfo">
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        <p>{t('footer.followUs')} <a href="https://www.instagram.com/amacafe.ar" target="_blank" rel="noopener noreferrer">@amacafe.ar</a></p>
        <p>
          {t('footer.madeWithLove', { developerName: developerName, developerLocation: developerLocation })}
        </p>
        <p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de GitHub de ${developerName}`}>{t('footer.visitGithub')}</a>
        </p>
      </footer>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
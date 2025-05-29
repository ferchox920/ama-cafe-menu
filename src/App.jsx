// src/App.jsx
import React, { useState } from 'react';
import menuData from './data/menuData';
import CategorySection from './components/CategorySection/CategorySection';
import ProductModal from './components/ProductModal/ProductModal';
import styles from './App.module.css';
import logoAmaCafe from './assets/logo/logo.svg';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Bloquear scroll del body
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restaurar scroll del body
  };

  // Tu información de contacto
  const developerName = "Fernando Andrés Ramones";
  const githubUrl = "https://github.com/ferchox920";
  const linkedinUrl = "https://www.linkedin.com/in/fernando-andres-ramones-ramones/";
  const developerLocation = "CABA, Argentina"; // Ciudad Autónoma de Buenos Aires

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
        <p className={styles.appSlogan}>Menú Café y Repostería Terapéutica</p>
      </header>

      <main className={styles.menuMain} id="menu-principal">
        {menuData.map((categoryData) => (
          <CategorySection
            key={categoryData.id}
            categoryName={categoryData.category}
            isotipoSrc={categoryData.isotipo}
            items={categoryData.items}
            onProductClick={openProductModal}
          />
        ))}
      </main>

      <footer className={styles.appFooter} role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Ama café. Todos los derechos reservados.</p>
        <p>Síguenos en Instagram: <a href="https://www.instagram.com/amacafe.ar" target="_blank" rel="noopener noreferrer">@amacafe.ar</a></p>
        {/* Información del desarrollador personalizada */}
        <p>
          Desarrollado con ❤️ por <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de LinkedIn de ${developerName}`}>{developerName}</a> en {developerLocation}.
        </p>
        <p>
          Visita mi <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de GitHub de ${developerName}`}>GitHub</a>.
        </p>
      </footer>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
        />
      )}
    </div>
  );
}

export default App;
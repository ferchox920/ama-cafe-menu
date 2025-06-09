// src/components/ProductModal/ProductModal.jsx
import React from 'react';
// no necesitamos useTranslation aquí si 't' viene como prop
import styles from './ProductModal.module.css';

// Recibe product, onClose, y t (la función de traducción)
function ProductModal({ product, onClose, t }) { // <- Recibir 't'
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Obtener el nombre y la descripción traducidos para el modal
  const translatedName = t(product.translationKeyName || product.name);
  const translatedDescription = t(product.translationKeyDescription || product.description);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose} aria-label={t('modal.closeButtonLabel')}> {/* Traducir label */}
          &times;
        </button>

        {product.image && (
          <img src={product.image} alt={`Imagen de ${translatedName}`} className={styles.modalImage} />
        )}

        <h2 className={styles.modalTitle}>{translatedName}</h2> {/* Usar nombre traducido */}
        <p className={styles.modalDescription}>{translatedDescription}</p> {/* Usar descripción traducida */}
        <p className={styles.modalPrice}>{product.price}</p>

      </div>
    </div>
  );
}

export default ProductModal;
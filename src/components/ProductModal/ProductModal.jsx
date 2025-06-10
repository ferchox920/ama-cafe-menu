import React from 'react';
import styles from './ProductModal.module.css';

function ProductModal({ product, onClose, t }) {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Traducciones
  const translatedName = t(product.translationKeyName || product.name);
  const translatedDescription = t(
    product.translationKeyDescription || product.description
  );

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={t('modal.closeButtonLabel')}
        >
          &times;
        </button>

        {product.image && (
          <img
            src={product.image}
            alt={`Imagen de ${translatedName}`}
            className={styles.modalImage}
          />
        )}

        <h2 className={styles.modalTitle}>{translatedName}</h2>
        <p className={styles.modalDescription}>
          {translatedDescription}
        </p>
        <p className={styles.modalPrice}>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductModal;

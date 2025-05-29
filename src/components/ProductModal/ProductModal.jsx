// src/components/ProductModal/ProductModal.jsx
import React from 'react';
import styles from './ProductModal.module.css';

function ProductModal({ product, onClose }) {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar detalles del producto"
        >
          &times;
        </button>

        {product.image && (
          <img
            src={product.image}
            alt={`Imagen de ${product.name}`}
            className={styles.modalImage}
          />
        )}

        <h2 className={styles.modalTitle}>{product.name}</h2>
        <p className={styles.modalDescription}>{product.description}</p>
        <p className={styles.modalPrice}>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductModal;

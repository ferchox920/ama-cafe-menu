// src/components/MenuItemCard/MenuItemCard.jsx
import React from 'react';
// no necesitamos useTranslation aquí si 't' viene como prop, pero es útil si no
// import { useTranslation } from 'react-i18next';
import styles from './MenuItemCard.module.css';

// Recibe item, onProductClick, y t (la función de traducción)
function MenuItemCard({ item, onProductClick, t }) { // <- Recibir 't'
  const handleCardClick = () => {
    if (window.innerWidth < 768 && onProductClick) {
      onProductClick(item);
    }
  };

  // Obtener el nombre y la descripción traducidos
  // Usamos item.translationKeyName y item.translationKeyDescription
  const translatedName = t(item.translationKeyName || item.name); // Fallback al nombre original si no hay key
  const translatedDescription = t(item.translationKeyDescription || item.description); // Fallback a la desc original

  return (
    <li
        className={styles.menuItemCard}
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCardClick();
          }
        }}
    >
      {item.image && (
        <img
          src={item.image}
          alt={`Imagen de ${translatedName}`} // Usar el nombre traducido para el alt text
          className={styles.itemImage}
          loading="lazy"
        />
      )}
      <div className={styles.itemDetails}>
        <div className={styles.itemNameAndDesc}>
          <h3 className={styles.itemName}>{translatedName}</h3> {/* Usar nombre traducido */}
          {translatedDescription && <p className={styles.itemDescription}>{translatedDescription}</p>} {/* Usar descripción traducida */}
        </div>
        <p className={styles.itemPrice}>{item.price}</p>
      </div>
    </li>
  );
}

export default MenuItemCard;
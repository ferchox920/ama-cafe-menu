// src/components/MenuItemCard/MenuItemCard.jsx
import React from 'react';
import styles from './MenuItemCard.module.css';

function MenuItemCard({ item, onProductClick, t }) {
  const handleCardClick = () => {

    if (onProductClick) { 
      onProductClick(item); 
    }
  };

  const translatedName = t(item.translationKeyName || item.name);
  const translatedDescription = t(item.translationKeyDescription || item.description);

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
      {item.image ? (
        <img
          src={item.image}
          alt={`Imagen de ${translatedName}`}
          className={styles.itemImage}
          loading="lazy"
        />
      ) : (
        <div className={styles.itemImagePlaceholder}>
          <span className={styles.placeholderIcon} aria-hidden="true">☕</span>
        </div>
      )}
      <div className={styles.itemDetails}>
        <div className={styles.itemNameAndDesc}>
          <h3 className={styles.itemName}>{translatedName}</h3>
          {translatedDescription && <p className={styles.itemDescription}>{translatedDescription}</p>}
        </div>
        <p className={styles.itemPrice}>{item.price}</p>
      </div>
    </li>
  );
}

export default MenuItemCard;
// src/components/CategorySection/CategorySection.jsx
import React from 'react';
import MenuItemCard from '../MenuItemCard/MenuItemCard';
import styles from './CategorySection.module.css';

// Recibe isotipoSrc y onProductClick como props
function CategorySection({ categoryName, items, isotipoSrc, onProductClick }) { // <- Recibir onProductClick
  return (
    <section className={styles.categorySection} aria-labelledby={`category-title-${categoryName.replace(/\s+/g, '-')}`}>
      <div className={styles.categoryHeader}>
        {isotipoSrc && (
          <img
            src={isotipoSrc}
            alt={`Isotipo de la categoría ${categoryName}`}
            className={styles.categoryIsotipo}
            loading="eager"
          />
        )}
        <h2 className={styles.categoryTitle} id={`category-title-${categoryName.replace(/\s+/g, '-')}`}>{categoryName}</h2>
      </div>

      <ul className={styles.itemsGrid} role="list">
        {items.map(item => (
          // Pasar la función onProductClick a MenuItemCard
          <MenuItemCard
            key={item.id}
            item={item}
            onProductClick={onProductClick} // <- Pasar onProductClick
          />
        ))}
      </ul>
    </section>
  );
}

export default CategorySection;
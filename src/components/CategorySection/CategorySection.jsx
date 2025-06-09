// src/components/CategorySection/CategorySection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation
import MenuItemCard from '../MenuItemCard/MenuItemCard';
import styles from './CategorySection.module.css';

function CategorySection({ categoryName, items, isotipoSrc, onProductClick }) {
  const { t } = useTranslation(); // Obtener la función de traducción

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
        {/* categoryName ya viene traducido desde App.jsx, pero lo envolvemos por consistencia */}
        <h2 className={styles.categoryTitle} id={`category-title-${categoryName.replace(/\s+/g, '-')}`}>{categoryName}</h2>
      </div>

      <ul className={styles.itemsGrid} role="list">
        {items.map(item => (
          <MenuItemCard
            key={item.id}
            item={item}
            onProductClick={onProductClick}
            t={t} // Pasar la función de traducción al MenuItemCard
          />
        ))}
      </ul>
    </section>
  );
}

export default CategorySection;
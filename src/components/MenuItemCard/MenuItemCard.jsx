// src/components/MenuItemCard/MenuItemCard.jsx
import React from 'react';
import styles from './MenuItemCard.module.css';

function MenuItemCard({ item, onProductClick }) { // <- Recibir onProductClick
  // Función para manejar el clic en la tarjeta
  const handleCardClick = () => {
    // Comprobar si es un dispositivo móvil antes de abrir el modal
    // Una forma simple es verificar el ancho de la ventana
    // Esto es un breakpoint, debe coincidir con tu CSS para mobile/desktop
    if (window.innerWidth < 768 && onProductClick) { // Usamos el breakpoint de 768px como referencia
      onProductClick(item);
    }
  };

  return (
    // Mejora: Añadir role="button" y tabindex="0" para hacer la tarjeta accesible para clic/teclado.
    // Añadir onClick para manejar el clic.
    <li className={styles.menuItemCard}
        role="button" // Indica que este elemento es clickeable como un botón
        tabIndex={0} // Permite que sea enfocable con el teclado
        onClick={handleCardClick} // Maneja el evento de clic
        onKeyDown={(e) => { // Mejora: Permite activar con Enter/Espacio para accesibilidad
          if (e.key === 'Enter' || e.key === ' ') {
            handleCardClick();
          }
        }}
    >
      {item.image && (
        <img
          src={item.image}
          alt={`Imagen de ${item.name}`}
          className={styles.itemImage}
          loading="lazy"
        />
      )}
      <div className={styles.itemDetails}>
        <div className={styles.itemNameAndDesc}>
          <h3 className={styles.itemName}>{item.name}</h3>
          {item.description && <p className={styles.itemDescription}>{item.description}</p>}
        </div>
        <p className={styles.itemPrice}>{item.price}</p>
      </div>
    </li>
  );
}

export default MenuItemCard;
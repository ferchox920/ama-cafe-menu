// src/data/menuData.js

// Importaciones de imágenes de CAFÉS Terapéuticos (todas específicas)
import espressoImg from '../assets/images/products/Espresso.png';
import americanoImg from '../assets/images/products/Americano.png';
import cappuccinoImg from '../assets/images/products/Capuccino.png'; // Confirmado: 'Capuccino.png'
import flatWhiteImg from '../assets/images/products/FlatWhite.png';
import mocaccinoImg from '../assets/images/products/Mocaccino.png';
import latteImg from '../assets/images/products/Latte.png';
import macchiatoImg from '../assets/images/products/Macchiato.png';

// Importaciones de imágenes de APOYOS EMOCIONALES SALADOS (todas específicas)
import medialunasMantecaImg from '../assets/images/products/Medialunas.png'; // Medialunas de manteca
import medialunaJQImg from '../assets/images/products/MedialunaJQ.png'; // Medialuna de jamón y queso
import medialunasGImg from '../assets/images/products/MedialunasG.png'; // Medialunas de grasa
import tequenosImg from '../assets/images/products/Tequenos.png';
import cachitoImg from '../assets/images/products/Cachito.png';
import sconQuesoImg from '../assets/images/products/SconQueso.png';
import tostadoImg from '../assets/images/products/Tostado.png';
import panChocolateImg from '../assets/images/products/Chocolate.png'; // Asumo que "Chocolate.png" puede servir para Pan de chocolate

// Importaciones de imágenes de BEBIDAS CALIENTES (todas específicas que tienes)
import teVerdeImg from '../assets/images/products/TeVerde.png';
import teNegroImg from '../assets/images/products/TeNegro.png';
import teMentaImg from '../assets/images/products/TeMenta.png';
import teChaiImg from '../assets/images/products/TeC.png'; // 'TeC.png' para Té de Chai
import mateCImg from '../assets/images/products/MateC.png'; // 'MateC.png' para Hierba para mate con Vínculos
import chocolateCalienteImg from '../assets/images/products/Chocolate.png';
import matchaImg from '../assets/images/products/Matcha.png'; // Ahora sí tenemos Matcha!

// Importaciones de imágenes de APOYOS EMOCIONALES DULCES (todas específicas)
import budinZImg from '../assets/images/products/BudinZ.png'; // Budín de zanahoria
import browieImg from '../assets/images/products/Browie.png'; // Confirmado: 'Browie.png' for Brownie
import pieLImg from '../assets/images/products/PieL.png'; // Pie de limón
import alfajorImg from '../assets/images/products/Alfajor.png';
import cheesecakeFRImg from '../assets/images/products/CheesecakeFR.png'; // Cheesecake de frutos rojos
import rolCImg from '../assets/images/products/RolC.png'; // Rol de canela
import galletitasCCImg from '../assets/images/products/GalletitasCC.png'; // Galletitas con chispas de chocolate

// Importaciones de imágenes de BEBIDAS FRÍAS (todas específicas)
import frappuccinoImg from '../assets/images/products/Frappuccino.png';
import frapeAnanaImg from '../assets/images/products/FrapeAnana.png';
import frappeFrutillaImg from '../assets/images/products/FrappeFrutilla.png';
import frappeLImg from '../assets/images/products/FrappeL.png'; // Frappé de Limón
import aguaImg from '../assets/images/products/Agua.png';
import aguaGImg from '../assets/images/products/AguaG.png'; // Agua con gas
import milkshakesImg from '../assets/images/products/Milkshakes.png';
import lecheVImg from '../assets/images/products/LecheV.png';


// Importamos el isotipo crema (verificar ruta si no está en 'images/products')
import isotipoCrema from '../assets/images/isotipo_crema.svg'; // o .png si es el caso

const menuData = [
  {
    id: "cafesTerapeuticos", // ID de la categoría para traducción
    category: "CAFES TERAPEUTICOS",
    isotipo: isotipoCrema,
    items: [
      {
        id: "prod-1",
        name: "Espresso Motivador",
        description: "Café intenso y concentrado servido en una taza pequeña. La base perfecta para muchas bebidas, con sabor fuerte y aromático.",
        price: "$3.200",
        image: espressoImg,
        translationKeyName: "menu.products.Espresso Motivador",
        translationKeyDescription: "menu.descriptions.Espresso Motivador"
      },
      {
        id: "prod-extra-1",
        name: "Espresso doble motivador",
        description: "Doble shot de espresso para una dosis extra de energía.",
        price: "$3.400",
        image: espressoImg,
        translationKeyName: "menu.products.Espresso doble motivador",
        translationKeyDescription: "menu.descriptions.Espresso doble motivador"
      },
      {
        id: "prod-2",
        name: "Capuccino con Amor Propio",
        description: "Un balance perfecto entre espresso, leche vaporizada y espuma. Cremoso, espumoso y con un sabor clásico.",
        price: "$4.200",
        image: cappuccinoImg,
        translationKeyName: "menu.products.Capuccino con Amor Propio",
        translationKeyDescription: "menu.descriptions.Capuccino con Amor Propio"
      },
      {
        id: "prod-3",
        name: "Americano con Estabilidad",
        description: "Espresso rebajado con agua caliente. Sabor más suave, ideal si prefieres un café ligero pero con carácter.",
        price: "$4.100",
        image: americanoImg,
        translationKeyName: "menu.products.Americano con Estabilidad",
        translationKeyDescription: "menu.descriptions.Americano con Estabilidad"
      },
      {
        id: "prod-4",
        name: "Macchiato con Ideas",
        description: "Espresso “manchado” con un toque de leche espumada. Una bebida pequeña, fuerte y con un toque cremoso, servido en taza chica.",
        price: "$4.200",
        image: macchiatoImg,
        translationKeyName: "menu.products.Macchiato con Ideas",
        translationKeyDescription: "menu.descriptions.Macchiato con Ideas"
      },
      {
        id: "prod-cortado", // Nuevo ID para el cortado
        name: "Cortado chico con Claridad", // Nuevo nombre para el cortado
        description: "Café espresso con un poco de leche caliente, ideal para quienes buscan una opción más suave pero con la intensidad del espresso, servido en taza chica.",
        price: "$3.900", // Nuevo precio para el cortado
        image: macchiatoImg, // Puedes usar la misma imagen si no tienes otra específica
        translationKeyName: "menu.products.Cortado chico con Claridad",
        translationKeyDescription: "menu.descriptions.Cortado chico con Claridad"
      },
      {
        id: "prod-5",
        name: "Flat White con Inteligencia",
        description: "Similar al latte, pero con más café y menos espuma. Textura aterciopelada y sabor intenso.",
        price: "$4.700",
        image: flatWhiteImg,
        translationKeyName: "menu.products.Flat White con Inteligencia",
        translationKeyDescription: "menu.descriptions.Flat White con Inteligencia"
      },
      {
        id: "prod-6",
        name: "Latte con limites",
        description: "Espresso con mucha leche vaporizada y un poco de espuma. Suave, cremoso y perfecto para quienes prefieren un café más ligero.",
        price: "$4.500",
        image: latteImg,
        translationKeyName: "menu.products.Latte con limites",
        translationKeyDescription: "menu.descriptions.Latte con limites"
      },
      {
        id: "prod-7",
        name: "Mocaccino Dopaminérgico",
        description: "Espresso con leche vaporizada y chocolate. Dulce, cremoso y con ese toque de cacao que lo hace irresistible.",
        price: "$4.500",
        image: mocaccinoImg,
        translationKeyName: "menu.products.Mocaccino Dopaminérgico",
        translationKeyDescription: "menu.descriptions.Mocaccino Dopaminérgico"
      },
      {
        id: "prod-extra-2",
        name: "Shot extra",
        description: "Agrega un shot adicional de espresso a tu bebida favorita.",
        price: "$1.000",
        image: espressoImg, // Asignar una imagen si tienes una para "shot extra"
        translationKeyName: "menu.products.Shot extra",
        translationKeyDescription: "menu.descriptions.Shot extra"
      },
      {
        id: "prod-extra-3",
        name: "Leche vegetal",
        description: "Opción de leche vegetal para personalizar tu café.",
        price: "$900",
        image: lecheVImg, // Asignar una imagen si tienes una para "leche vegetal"
        translationKeyName: "menu.products.Leche vegetal",
        translationKeyDescription: "menu.descriptions.Leche vegetal"
      }
    ],
  },
  {
    id: "apoyosDulces", // ID de la categoría para traducción
    category: "APOYOS EMOCIONALES DULCES",
    isotipo: isotipoCrema,
    items: [
      {
        id: "prod-nuevo-1",
        name: "Chocotorta con placer", // Nombre actualizado
        description: "Clásica torta argentina de galletas de chocolate, dulce de leche y queso crema.",
        price: "$7.200",
        image: panChocolateImg, // Asigna una imagen si tienes una específica para Chocotorta
        translationKeyName: "menu.products.Chocotorta con placer",
        translationKeyDescription: "menu.descriptions.Chocotorta con placer"
      },
      {
        id: "prod-22",
        name: "Budín de zanahoria con salud mental",
        description: "Bizcocho suave con zanahoria rallada, nueces y un toque de canela. Dulce, húmedo y lleno de sabor.",
        price: "$4.600",
        image: budinZImg,
        translationKeyName: "menu.products.Budín de zanahoria con salud mental",
        translationKeyDescription: "menu.descriptions.Budín de zanahoria con salud mental"
      },
      {
        id: "prod-23",
        name: "Brownie con Autocuidado",
        description: "Cuadrado de chocolate intenso, con textura densa y corazón suave. Ideal para los amantes del chocolate.",
        price: "$3.700",
        image: browieImg,
        translationKeyName: "menu.products.Brownie con Autocuidado",
        translationKeyDescription: "menu.descriptions.Brownie con Autocuidado"
      },
      {
        id: "prod-24",
        name: "Pie de limón con Validación",
        description: "Base crocante, relleno cremoso de limón y merengue por encima. Equilibrio perfecto entre dulce y ácido.",
        price: "$7.800",
        image: pieLImg,
        translationKeyName: "menu.products.Pie de limón con Validación",
        translationKeyDescription: "menu.descriptions.Pie de limón con Validación"
      },
      {
        id: "prod-25",
        name: "Alfajor con Apego seguro",
        description: "Dos tapas suaves rellenas con dulce de leche cubiertas de azúcar impalpable.",
        price: "$3.200",
        image: alfajorImg,
        translationKeyName: "menu.products.Alfajor con Apego seguro",
        translationKeyDescription: "menu.descriptions.Alfajor con Apego seguro"
      },
      {
        id: "prod-26",
        name: "Cheesecake de frutilla con creatividad",
        description: "Tarta cremosa con base de galleta y cobertura de frutillas. Fresca y suave.",
        price: "$8.900",
        image: cheesecakeFRImg,
        translationKeyName: "menu.products.Cheesecake de frutilla con creatividad",
        translationKeyDescription: "menu.descriptions.Cheesecake de frutilla con creatividad"
      },
      {
        id: "prod-27",
        name: "Rol de canela con Autoestima",
        description: "Masa tierna con relleno de canela y azúcar, coronado con glaseado. Dulce, aromático y muy tentador.",
        price: "$3.000",
        image: rolCImg,
        translationKeyName: "menu.products.Rol de canela con Autoestima",
        translationKeyDescription: "menu.descriptions.Rol de canela con Autoestima"
      },
      {
        id: "prod-28",
        name: "Galletas con chispas de chocolate Analíticas",
        description: "Clásicas, crocantes por fuera y suaves por dentro. Llenas de chispas de chocolate.",
        price: "$3.100",
        image: galletitasCCImg,
        translationKeyName: "menu.products.Galletas con chispas de chocolate Analíticas",
        translationKeyDescription: "menu.descriptions.Galletas con chispas de chocolate Analíticas"
      }
    ]
  },
  {
    id: "apoyosSalados", // ID de la categoría para traducción
    category: "APOYOS EMOCIONALES SALADOS",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-8", name: "2 Medialunas de manteca con Pasión", description: "Dulce, hojaldrada y brillante. Perfecta para acompañar tu café.", price: "$2.400", image: medialunasMantecaImg, translationKeyName: "menu.products.2 Medialunas de manteca con Pasión", translationKeyDescription: "menu.descriptions.2 Medialunas de manteca con Pasión" },
      { id: "prod-9", name: "Medialuna de jamón y queso con Amor", description: "Masa suave con relleno salado. Caliente y sabrosa, ideal para cualquier momento del día.", price: "$2.000", image: medialunaJQImg, translationKeyName: "menu.products.Medialuna de jamón y queso con Amor", translationKeyDescription: "menu.descriptions.Medialuna de jamón y queso con Amor" },
      { id: "prod-10", name: "2 Medialunas de grasa con Cariño", description: "Salada, hojaldrada y dorada. Con ese sabor clásico que nunca falla.", price: "$2.300", image: medialunasGImg, translationKeyName: "menu.products.2 Medialunas de grasa con Cariño", translationKeyDescription: "menu.descriptions.2 Medialunas de grasa con Cariño" },
      { id: "prod-11", name: "Tequeños (6)con Refuerzo Positivo", description: "Palitos de masa frita rellenos de queso. Dorados, crocantes y adictivos.", price: "$8.500", image: tequenosImg, translationKeyName: "menu.products.Tequeños (6)con Refuerzo Positivo", translationKeyDescription: "menu.descriptions.Tequeños (6)con Refuerzo Positivo" },
      { id: "prod-12", name: "Cachito con Regulación", description: "Pan suave en forma de cuernito, relleno de jamón. Un clásico venezolano.", price: "$5.770", image: cachitoImg, translationKeyName: "menu.products.Cachito con Regulación", translationKeyDescription: "menu.descriptions.Cachito con Regulación" },
      { id: "prod-13", name: "Scon de queso con experiencia", description: "Sabiduría y sabor en una combinación perfecta.", price: "$3.700", image: sconQuesoImg, translationKeyName: "menu.products.Scon de queso con experiencia", translationKeyDescription: "menu.descriptions.Scon de queso con experiencia" },
      { id: "prod-14", name: "Tostado de jamón y queso con Imaginación", description: "Pan crocante con jamón y queso fundido.", price: "$7.500", image: tostadoImg, translationKeyName: "menu.products.Tostado de jamón y queso con Imaginación", translationKeyDescription: "menu.descriptions.Tostado de jamón y queso con Imaginación" },
      {
        id: "prod-nuevo-2",
        name: "Pan de chocolate con Impulso",
        description: "Delicioso pan dulce con trozos de chocolate.",
        price: "$4.600",
        image: panChocolateImg, // Asigna una imagen si tienes una específica para Pan de chocolate
        translationKeyName: "menu.products.Pan de chocolate con Impulso",
        translationKeyDescription: "menu.descriptions.Pan de chocolate con Impulso"
      }
    ]
  },
  {
    id: "noCafe", // ID de la categoría para traducción
    category: "PARA LOS “NO TOMO CAFÉ”",
    isotipo: isotipoCrema, // Mantener isotipo
    items: [], // Vaciar el array de items, ya que no contendrá productos directamente
    isSectionTitle: true, // <--- PROPIEDAD CLAVE: Indicar que es un título de sección
    translationKey: "menu.categories.noCafe" // Clave para la traducción del título de sección
  },
  {
    id: "bebidasFrias", // ID de la categoría para traducción
    category: "BEBIDAS FRÍAS",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-29", name: "Frappuccino de Escape emocional", description: "Bebida helada y refrescante.", price: "$4.500", image: frappuccinoImg, translationKeyName: "menu.products.Frappuccino de Escape emocional", translationKeyDescription: "menu.descriptions.Frappuccino de Escape emocional" },
      { id: "prod-30", name: "Frappé de Ananá con Desahogo", description: "Bebida con pulpa frutal de ananá y sabor tropical.", price: "$6.300", image: frapeAnanaImg, translationKeyName: "menu.products.Frappé de Ananá con Desahogo", translationKeyDescription: "menu.descriptions.Frappé de Ananá con Desahogo" },
      { id: "prod-32", name: "Frappé de limón Anti estrés", description: "Bebida helada, cítrica y refrescante.", price: "$5.500", image: frappeLImg, translationKeyName: "menu.products.Frappé de limón Anti estrés", translationKeyDescription: "menu.descriptions.Frappé de limón Anti estrés" },
      { id: "prod-31", name: "Frappé de frutilla Sensorial", description: "Bebida fría con pulpa de frutilla y sabor dulce.", price: "$6.000", image: frappeFrutillaImg, translationKeyName: "menu.products.Frappé de frutilla Sensorial", translationKeyDescription: "menu.descriptions.Frappé de frutilla Sensorial" },
      { id: "prod-35", name: "Milkshake de chocolate con Serotonina", description: "Batido frío con leche y mucho chocolate. Cremoso y dulce.", price: "$3.100", image: milkshakesImg, translationKeyName: "menu.products.Milkshake de chocolate con Serotonina", translationKeyDescription: "menu.descriptions.Milkshake de chocolate con Serotonina" },
      { id: "prod-34", name: "Agua con gas sin Represión", description: "Burbujas de liberación y frescura.", price: "$2.300", image: aguaGImg, translationKeyName: "menu.products.Agua con gas sin Represión", translationKeyDescription: "menu.descriptions.Agua con gas sin Represión" },
      { id: "prod-33", name: "Agua sin gas con Regulación", description: "Hidratación simple para encontrar tu equilibrio.", price: "$2.000", image: aguaImg, translationKeyName: "menu.products.Agua sin gas con Regulación", translationKeyDescription: "menu.descriptions.Agua sin gas con Regulación" }
    ]
  },
  {
    id: "bebidasCalientes", // ID de la categoría para traducción
    category: "BEBIDAS CALIENTES",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-21", name: "Chocolate caliente con Claridad", description: "Dulzura que ilumina tus ideas.", price: "$4.000", image: chocolateCalienteImg, translationKeyName: "menu.products.Chocolate caliente con Claridad", translationKeyDescription: "menu.descriptions.Chocolate caliente con Claridad" },
      { id: "prod-15", name: "Té verde con Bienestar", description: "Infusión suave y natural. Liviano y con un toque herbal.", price: "$3.500", image: teVerdeImg, translationKeyName: "menu.products.Té verde con Bienestar", translationKeyDescription: "menu.descriptions.Té verde con Bienestar" },
      { id: "prod-16", name: "Te negro con Alma", description: "De sabor intenso y clásico. Ideal para los que buscan una infusión con carácter.", price: "$3.500", image: teNegroImg, translationKeyName: "menu.products.Te negro con Alma", translationKeyDescription: "menu.descriptions.Te negro con Alma" },
      { id: "prod-17", name: "Té de menta con Alegría", description: "Refrescante y aromático. Perfecto para después de comer o para relajar.", price: "$3.500", image: teMentaImg, translationKeyName: "menu.products.Té de menta con Alegría", translationKeyDescription: "menu.descriptions.Té de menta con Alegría" },
      { id: "prod-19", name: "Matcha con Concentración", description: "Té verde en polvo de sabor intenso y textura cremosa. Energizante y diferente.", price: "$3.650", image: matchaImg, translationKeyName: "menu.products.Matcha con Concentración", translationKeyDescription: "menu.descriptions.Matcha con Concentración" },
      { id: "prod-18", name: "Té Chai con Paz", description: "Infusión especiada con notas de canela, clavo y jengibre. Aromático y cálido.", price: "$3.500", image: teChaiImg, translationKeyName: "menu.products.Té Chai con Paz", translationKeyDescription: "menu.descriptions.Té Chai con Paz" },
      { id: "prod-20", name: "Mate cocido con abrazos", description: "Infusión tradicional, suave y reconfortante. Sabor a casa.", price: "$3.500", image: mateCImg, translationKeyName: "menu.products.Mate cocido con abrazos", translationKeyDescription: "menu.descriptions.Mate cocido con abrazos" }
    ]
  }
];

export default menuData;
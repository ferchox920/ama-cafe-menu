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

// Importaciones de imágenes de BEBIDAS CALIENTES (todas específicas que tienes)
import teVerdeImg from '../assets/images/products/TeVerde.png';
import teNegroImg from '../assets/images/products/TeNegro.png';
import teMentaImg from '../assets/images/products/TeMenta.png';
import teChaiImg from '../assets/images/products/TeC.png'; // 'TeC.png' para Té de Chai
import mateCImg from '../assets/images/products/MateC.png'; // 'MateC.png' para Hierba para mate con Vínculos
import chocolateCalienteImg from '../assets/images/products/Chocolate.png';
import matchaImg from '../assets/images/products/Matcha.png'; // ¡Ahora sí tenemos Matcha!

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


// Importamos el isotipo crema (verificar ruta si no está en 'images/products')
import isotipoCrema from '../assets/images/isotipo_crema.svg'; // o .png si es el caso

const menuData = [
  {
    id: "cat-1",
    category: "Cafés Terapéuticos",
    isotipo: isotipoCrema,
    items: [
      {
        id: "prod-1",
        name: "Espresso Motivador",
        description: "Café intenso y concentrado servido en una taza pequeña. La base perfecta para muchas bebidas, con sabor fuerte y aromático.",
        price: "$15.000",
        image: espressoImg
      },
      {
        id: "prod-2",
        name: "Capuccino con Amor Propio",
        description: "Un balance perfecto entre espresso, leche vaporizada y espuma. Cremoso, espumoso y con un sabor clásico.",
        price: "$20.000",
        image: cappuccinoImg
      },
      {
        id: "prod-3",
        name: "Americano con Estabilidad",
        description: "Espresso rebajado con agua caliente. Sabor más suave, ideal si prefieres un café ligero pero con carácter.",
        price: "$23.000",
        image: americanoImg
      },
      {
        id: "prod-4",
        name: "Macchiato con Ideas",
        description: "Espresso “manchado” con un toque de leche espumada. Pequeño, fuerte y con un toque cremoso.",
        price: "$10.000",
        image: macchiatoImg
      },
      {
        id: "prod-5",
        name: "Flat White con Inteligencia",
        description: "Similar al latte, pero con más café y menos espuma. Textura aterciopelada y sabor intenso.",
        price: "$8.000",
        image: flatWhiteImg
      },
      {
        id: "prod-6",
        name: "Latte con Límites",
        description: "Espresso con mucha leche vaporizada y un poco de espuma. Suave, cremoso y perfecto para quienes prefieren un café más ligero.",
        price: "$5.000",
        image: latteImg
      },
      {
        id: "prod-7",
        name: "Mocaccino Dopaminérgico",
        description: "Espresso con leche vaporizada y chocolate. Dulce, cremoso y con ese toque de cacao que lo hace irresistible.",
        price: "$10.000",
        image: mocaccinoImg
      }
    ],
  },
  {
    id: "cat-2",
    category: "Apoyos emocionales salados",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-8", name: "Medialunas de manteca con Pasión", description: "Dulce, hojaldrada y brillante. Perfecta para acompañar tu café.", price: "$10.000", image: medialunasMantecaImg },
      { id: "prod-9", name: "Medialuna de jamón y queso con Amor", description: "Masa suave con relleno salado. Caliente y sabrosa, ideal para cualquier momento del día.", price: "$10.000", image: medialunaJQImg },
      { id: "prod-10", name: "Medialunas de grasa con Cariño", description: "Salada, hojaldrada y dorada. Con ese sabor clásico que nunca falla.", price: "$10.000", image: medialunasGImg },
      { id: "prod-11", name: "Tequeños con Refuerzo Positivo", description: "Palitos de masa frita rellenos de queso. Dorados, crocantes y adictivos.", price: "$15.000", image: tequenosImg },
      { id: "prod-12", name: "Cachito con Regulación", description: "Pan suave en forma de cuernito, relleno de jamón. Un clásico venezolano.", price: "$10.000", image: cachitoImg },
      { id: "prod-13", name: "Scon de queso con Experiencia", description: "Sabiduría y sabor en una combinación perfecta.", price: "$8.000", image: sconQuesoImg },
      { id: "prod-14", name: "Tostado con Imaginación", description: "Pan crocante con jamón y queso fundido.", price: "$9.000", image: tostadoImg }
    ]
  },
  {
    id: "cat-3",
    category: "Bebidas calientes",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-15", name: "Té verde con Bienestar", description: "Infusión suave y natural. Liviano y con un toque herbal.", price: "$10.000", image: teVerdeImg },
      { id: "prod-16", name: "Té negro con Alma", description: "De sabor intenso y clásico. Ideal para los que buscan una infusión con carácter.", price: "$10.000", image: teNegroImg },
      { id: "prod-17", name: "Té de menta con Alegría", description: "Refrescante y aromático. Perfecto para después de comer o para relajar.", price: "$10.000", image: teMentaImg },
      { id: "prod-18", name: "Té de Chai con Paz", description: "Infusión especiada con notas de canela, clavo y jengibre. Aromático y cálido.", price: "$10.000", image: teChaiImg },
      { id: "prod-19", name: "Matcha con Concentración", description: "Té verde en polvo de sabor intenso y textura cremosa. Energizante y diferente.", price: "$10.000", image: matchaImg }, // ¡Ahora con imagen de Matcha!
      { id: "prod-20", name: "Hierba para mate con Vínculos", description: "Para compartir y fortalecer lazos.", price: "$10.000", image: mateCImg },
      { id: "prod-21", name: "Chocolate caliente con Claridad", description: "Dulzura que ilumina tus ideas.", price: "$3.000", image: chocolateCalienteImg }
    ]
  },
  {
    id: "cat-4",
    category: "Apoyos emocionales dulces",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-22", name: "Budín de zanahoria con Expresión", description: "Bizcocho suave con zanahoria rallada, nueces y un toque de canela. Dulce, húmedo y lleno de sabor.", price: "$10.000", image: budinZImg },
      { id: "prod-23", name: "Brownie con Autocuidado", description: "Cuadrado de chocolate intenso, con textura densa y corazón suave. Ideal para los amantes del chocolate.", price: "$10.000", image: browieImg },
      { id: "prod-24", name: "Pie de limón con Validación", description: "Base crocante, relleno cremoso de limón y merengue por encima. Equilibrio perfecto entre dulce y ácido.", price: "$10.000", image: pieLImg },
      { id: "prod-25", name: "Alfajor con Apego Seguro", description: "Dos tapas suaves rellenas con dulce de leche cubiertas de azúcar impalpable.", price: "$10.000", image: alfajorImg },
      { id: "prod-26", name: "Cheesecake de frutos rojos con Mimo", description: "Tarta cremosa con base de galleta y cobertura de frutillas. Fresca y suave.", price: "$10.000", image: cheesecakeFRImg },
      { id: "prod-27", name: "Rol de canela con Autoestima", description: "Masa tierna con relleno de canela y azúcar, coronado con glaseado. Dulce, aromático y muy tentador.", price: "$10.000", image: rolCImg },
      { id: "prod-28", name: "Galletitas con chispas de chocolate con Análisis", description: "Clásicas, crocantes por fuera y suaves por dentro. Llenas de chispas de chocolate.", price: "$10.000", image: galletitasCCImg }
    ]
  },
  {
    id: "cat-5",
    category: "Bebidas frías",
    isotipo: isotipoCrema,
    items: [
      { id: "prod-29", name: "Frappuccino de Escape emocional", description: "Bebida helada, cítrica y refrescante.", price: "$10.000", image: frappuccinoImg },
      { id: "prod-30", name: "Frappé de Ananá con Dopamina", description: "Bebida con pulpa frutal de ananá y sabor tropical.", price: "$3.000", image: frapeAnanaImg },
      { id: "prod-31", name: "Frappé de Frutilla Sensorial", description: "Bebida fría con pulpa de frutilla y sabor dulce.", price: "$10.000", image: frappeFrutillaImg },
      { id: "prod-32", name: "Frappé de Limón Anti Estrés", description: "Bebida helada, cítrica y refrescante.", price: "$8.900", image: frappeLImg },
      { id: "prod-33", name: "Agua sin gas con Regulación", description: "Hidratación simple para encontrar tu equilibrio.", price: "$3.000", image: aguaImg },
      { id: "prod-34", name: "Agua con gas sin Represión", description: "Burbujas de liberación y frescura.", price: "$4.500", image: aguaGImg },
      { id: "prod-35", name: "Milkshakes con Serotonina", description: "Batido frío con leche y mucho chocolate. Cremoso y dulce.", price: "$3.900", image: milkshakesImg }
    ]
  }
];

export default menuData;
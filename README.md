````markdown
# ☕ Ama Café – Menú Digital  
> Tu carta interactiva, siempre al punto.

![GitHub repo size](https://img.shields.io/github/repo-size/ferchox920/ama-cafe-menu?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ferchox920/ama-cafe-menu?style=flat-square)
![GitHub license](https://img.shields.io/github/license/ferchox920/ama-cafe-menu?style=flat-square)

Una app **React + Vite** que lleva la experiencia de pedir un latte o un alfajor a la palma de la mano, optimizada para móvil, multilingüe y con el inconfundible branding de _Ama Café_.

---

## 📑 Tabla de Contenidos
1. [Características](#-características)  
2. [Tecnologías](#-tecnologías)  
3. [Estructura del Proyecto](#-estructura-del-proyecto)  
4. [Instalación](#-instalación)  
5. [Despliegue](#-despliegue)  
6. [Personalización](#-personalización)  
7. [Contribuir](#-contribuir)  
8. [Autor](#-autor)  

---

## ✨ Características
- **Menú Dinámico**  
  Productos cargados desde `menuData.js` para editar sin sudar tinta.
- **Diseño Mobile-First**  
  Se ve impecable desde un teléfono diminuto hasta un monitor de 27".
- **Modal de Producto (Móvil)**  
  Información detallada sin abandonar la vista principal.
- **Multilingüe (i18n)**  
  Selector de banderas: _Español_ 🇪🇸 / _English_ 🇬🇧.
- **Modo Luz / Oscuro Adaptativo**  
  Sigue la preferencia del SO (forzado a luz en desktop para evitar dramas).
- **Branding Integrado**  
  Logo, isotipos por categoría y paleta cromática canon.
- **Lazy Loading de Imágenes**  
  El usuario ve el café antes de que el router diga “Argh”.
- **Accesibilidad (A11y)**  
  Roles ARIA y HTML semántico, porque el buen código también se siente.

---

## 🛠 Tecnologías
| Herramienta           | Uso                         |
|-----------------------|-----------------------------|
| **React**             | UI declarativa             |
| **Vite**              | Bundling ultrarrápido       |
| **i18next / react-i18next** | Internacionalización |
| **CSS Modules**       | Encapsulado de estilos      |
| **Git + GitHub Pages**| Control de versiones & hosting |

---

## 📂 Estructura del Proyecto
```text
cafe-menu/
├── public/                # Archivos estáticos (favicon, etc.)
├── src/
│   ├── assets/            # Logos, íconos, fotos
│   ├── components/        # React components
│   │   ├── CategorySection/
│   │   ├── MenuItemCard/
│   │   └── ProductModal/
│   ├── data/              # menuData.js
│   ├── locales/           # Traducciones (es, en, ...)
│   ├── App.jsx
│   ├── i18n.js
│   └── main.jsx
├── vite.config.js
└── README.md
````

---

## ⚙️ Instalación

```bash
git clone https://github.com/ferchox920/ama-cafe-menu.git
cd ama-cafe-menu
npm install       # o pnpm install / yarn
npm run dev       # abre http://localhost:5173
```

---

## 🚀 Despliegue

### GitHub Pages (recomendado)

1. Ajusta `base` en `vite.config.js` si cambias el nombre del repo.
2. Compila:

   ```bash
   npm run build
   ```
3. Publica la carpeta `dist/` (rama `gh-pages` o `docs/` en `main`).
4. Activa **Pages** en *Settings → Pages*.

Tu menú vivirá en:

```
https://<usuario>.github.io/<repo>/
```

---

## 🖌️ Personalización

| Qué quieres cambiar | Dónde                                             |
| ------------------- | ------------------------------------------------- |
| Productos / precios | `src/data/menuData.js`                            |
| Fotos               | `src/assets/images/products/`                     |
| Idiomas             | `src/locales/<lang>/translation.json` + `i18n.js` |
| Estilos             | `.module.css` de cada componente                  |
| Datos de autor      | Footer en `App.jsx`                               |

---

## 🤝 Contribuir

1. Haz *fork* y crea una rama:
   `git checkout -b feature/tu-feature`
2. *Commitea* con estilo:
   `git commit -m "feat: Añade espresso descafeinado"`
3. *Push* y abre un **Pull Request**.

---

## 👨‍💻 Autor

**Fernando Andrés Ramones** – *Full-stack dev & coffee lover*
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin\&style=flat-square)](https://www.linkedin.com/in/fernando-andres-ramones-ramones/)
[![GitHub](https://img.shields.io/badge/GitHub-000?logo=github\&style=flat-square\&logoColor=white)](https://github.com/ferchox920)

Hecho con ❤️ y mucho café desde CABA, Argentina.
Licencia MIT.

```
```

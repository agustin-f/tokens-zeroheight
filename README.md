# 🎨 tokens-zeroheight

Este repositorio contiene un ejemplo básico de cómo visualizar tokens de diseño sincronizados desde [Zeroheight](https://zeroheight.com) utilizando solo HTML y CSS, sin frameworks ni herramientas de build.

---

## 📦 Estructura del proyecto

.
├── index.html ← Página principal
├── tokens/
    ├── token_Collection1_Light.css ← Variables CSS generadas desde figma a zeroheight para tema Light
    ├── token_Collection1_Dark.css ← Variables CSS generadas desde figma a zeroheight para tema Dark
    ├── token_Collection1_Light.json ← Variables en formato json generadas desde figma a zeroheight para tema Light
    ├── token_Collection1_Dark.json ← Variables en formato json generadas desde figma a zeroheight para tema Dark
├── styles.css/ ------------ en esta hoja de estilos se importan las variables desde los estilos de tokens globales Light y Dark -------------
├── scripts.js/ ------------ script para consumir valores de tokens desde archivo .json y asigarlos a variables css en styles.css --------------

Desde el archivo scripts.js se hace fetch para consumir valores de los tokens en .json y asigarlos a variables css globales para luego aplicarlas en el archivo de styles.css en el componente de test como se muestra en el siguiente ejemplo:

---

.button {
     
     padding: var(--spacing-xl); 
     /* -------- mantener valores asociados a tokens permite la escalabilidad y el mantenimiento 
     de los componentes UI de manera ágil entre los equipos de diseño y desarrollo evitando incosistencias y retrabajo ---------- */

     border-radius: var(--border-radius-s);
     background-color: var(--alias-200);
     color: var(--acentos);
     border: none;
     cursor: pointer;
  }


---

## 🚀 Ver en producción

Este proyecto está desplegado con [Netlify]. Podés acceder a la versión online desde:

👉 https://tokens-zeroheight.netlify.app//

---

## ▶️ Cómo probarlo localmente

1. Cloná el repositorio:

```bash
git clone https://github.com/agustin-f/tokens-zeroheight.git
cd tokens-zeroheight
Abrí el archivo index.html en tu navegador
o servilo localmente con VS Code (Live Server) en Vs Code:

/***********************************************************************************/

🧪 Cómo se usan los tokens
Los tokens se exportan desde Zeroheight en formato CSS o JSON.

Luego se convierten manualmente a variables CSS (--color-primary, etc.).

Se importan en styles.css mediante:

@import './tokens/token_Collection1_Light.css';
@import './tokens/token_Collection1_Dark.css';

🔄 Actualización de tokens
Modificá tokens en Figma usando el panel de administración de tokens.

Sincronizalos con Zeroheight desde su plugin, publica los cambios para que se vean reflejados en el set de tokens de Zeroheight.

Desde Zeroheight, exportalos al repositorio como Pull Request.

Aceptá el PR en GitHub.

En tu máquina local, actualizá el repo:

git pull origin main
Si usás un live server, los cambios se verian reflejados automaticamente en tu entorno local y en este caso al pushear los mismos hacia github se veran reflejados en la url de producción en Netlify a modo de ejemplo.

🙌 Autor
Desarrollado por Agustín Farisano - Diseñador UX/UI especializado en Sistema de diseño, como prueba de integración entre tokens de diseño, GitHub y despliegue estático en Netlify.

📄 Licencia
MIT – libre para clonar, modificar y experimentar.

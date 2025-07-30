# 🎨 tokens-zeroheight

Este repositorio contiene un ejemplo básico de cómo visualizar tokens de diseño sincronizados desde [Zeroheight](https://zeroheight.com) utilizando solo HTML y CSS, sin frameworks ni herramientas de build.

---

## 📦 Estructura del proyecto

.
├── index.html ← Página principal
├── tokens/
    ├── tokens.css ← Variables CSS generadas desde figma a zeroheight y tokens.json

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
Desarrollado por Agustín Farisano - Diseñador UX/UI especializado en Sistema de diseño, como prueba de integración entre tokens de diseño, GitHub y despliegue estático en Vercel.

📄 Licencia
MIT – libre para clonar, modificar y experimentar.
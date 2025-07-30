# 🎨 tokens-zeroheight

Este repositorio contiene un ejemplo básico de cómo visualizar tokens de diseño sincronizados desde Zeroheight utilizando solo **HTML, CSS y JavaScript**, sin frameworks ni herramientas de build.

---

## 📦 Estructura del proyecto

.
├── index.html ← Página principal
├── tokens/
│ ├── token_Collection1_Light.css ← Variables CSS (tema Light)
│ ├── token_Collection1_Dark.css ← Variables CSS (tema Dark)
│ ├── token_Collection1_Light.json← Tokens en JSON (tema Light)
│ ├── token_Collection1_Dark.json ← Tokens en JSON (tema Dark)
├── styles.css ← Hoja principal, importa tokens globales
├── scripts.js ← Script para consumir tokens desde JSON


---

## 🧪 Uso de tokens

Los tokens se exportan desde **Zeroheight** en formato **CSS o JSON**, luego se convierten a variables CSS como:

```css
:root {
  --color-primary: #0055ff;
  --spacing-xl: 2rem;
}

Y se importan en styles.css así:

@import './tokens/token_Collection1_Light.css';
@import './tokens/token_Collection1_Dark.css';

Desde scripts.js se hace un fetch de los archivos .json y se asignan dinámicamente los valores como variables CSS globales.

.button {
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-s);
  background-color: var(--alias-200);
  color: var(--acentos);
  border: none;
  cursor: pointer;
}

Ejemplo de uso de tokens:

.button {
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-s);
  background-color: var(--alias-200);
  color: var(--acentos);
  border: none;
  cursor: pointer;
}


🧩 Mantener los componentes con tokens facilita la escalabilidad, coherencia visual y colaboración entre diseño y desarrollo.

▶️ Cómo probarlo localmente
Cloná este repositorio:

git clone https://github.com/agustin-f/tokens-zeroheight.git
cd tokens-zeroheight

Abrí el archivo index.html en tu navegador
o usá Live Server en VS Code para servirlo localmente.

🔄 Actualización de tokens
Modificá tokens en Figma desde el plugin correspondiente.

Sincronizalos con Zeroheight.

Publicá los cambios para actualizar el set.

Desde Zeroheight, exportalos como Pull Request a GitHub.

Aceptá el PR.

En tu máquina local:

git pull origin main


Si estás usando Live Server, verás los cambios reflejados automáticamente.
Al pushearlos a GitHub, también se actualiza la versión en Netlify.

🚀 Ver en producción
El proyecto está desplegado en Netlify:

👉 https://tokens-zeroheight.netlify.app

🙌 Autor
Desarrollado por Agustín Farisano
Diseñador UX/UI especializado en Sistemas de Diseño.
Este proyecto es una prueba de integración entre tokens de diseño, GitHub y despliegue estático en Netlify.

📄 Licencia
MIT – Libre para clonar, modificar y experimentar.


# 🎨 tokens-zeroheight

Este repositorio contiene un ejemplo básico y funcional de cómo visualizar tokens de diseño sincronizados desde **Figma** utilizando **Zeroheight**, **GitHub** y despliegue en producción mediante **Netlify**, todo sin frameworks ni herramientas de build: solo **HTML, CSS y JavaScript**.

---

## 🌐 Demo en producción

👉 https://tokens-zeroheight.netlify.app/

---

## 🧪 Archivo Figma de ejemplo

Podés ver y duplicar el archivo de prueba desde Figma Community:

👉 [Design Token Sync Test – Figma](https://www.figma.com/community/file/1532719898325948184)

---

## 📁 Estructura del proyecto

tokens-zeroheight/
├── index.html # Página principal
├── styles.css # Estilos base que importa los tokens
├── scripts.js # Script para consumir tokens desde JSON
├── tokens/
│ ├── token_Collection1_Light.css # Variables CSS para tema Light
│ ├── token_Collection1_Dark.css # Variables CSS para tema Dark
│ ├── token_Collection1_Light.json # Tokens en formato JSON (Light)
│ ├── token_Collection1_Dark.json # Tokens en formato JSON (Dark)

yaml
Copiar
Editar

---

## 🚀 Flujo de trabajo propuesto

Este proyecto sirve como ejemplo base para conectar tu propio flujo Figma → Web. Podés seguir estos pasos:

### 1️⃣ Duplicá el archivo de Figma

[📁 Abrir archivo en Figma Community](https://www.figma.com/community/file/1532719898325948184)

Cambiá los valores de tokens o agregá nuevos (colores, espaciado, bordes, etc).

---

### 2️⃣ Creá una cuenta en Zeroheight

- Armá tu guía de estilos.
- Conectá tu archivo Figma.
- Usá el plugin de Zeroheight en Figma para sincronizar los tokens.

---

### 3️⃣ Exportá los tokens al repositorio

- Desde el plugin, exportá los tokens como **Pull Request** a tu propio repositorio en GitHub (puede ser este mismo repo clonado).
- Aceptá el PR con los cambios.

---

### 4️⃣ Cloná este repositorio

```bash
git clone https://github.com/agustin-f/tokens-zeroheight.git
cd tokens-zeroheight
Reemplazá los archivos de la carpeta /tokens con los que genere tu propia guía.

Personalizá el index.html o los estilos si lo necesitás.

5️⃣ Visualizá los cambios localmente
Abrí index.html en el navegador o usá Live Server desde VS Code.

6️⃣ Desplegalo en producción
Podés usar Netlify o cualquier otra plataforma de deploy estático (como GitHub Pages o Vercel).

Con Netlify:

Creá un sitio nuevo desde tu repo clonado.

Al hacer push a GitHub, Netlify detecta los cambios y despliega automáticamente.

¡Listo! Los tokens de Figma impactan en producción tras publicar desde Zeroheight y aceptar el PR.

💡 Ejemplo de uso de tokens
css
Copiar
Editar
.button {
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-s);
  background-color: var(--alias-200);
  color: var(--acentos);
  border: none;
  cursor: pointer;
}
Mantener los estilos con tokens centralizados mejora la escalabilidad, la coherencia visual y reduce el retrabajo entre diseño y desarrollo.

🙌 Invitación a la comunidad
Si trabajás en sistemas de diseño o estás empezando a explorar los tokens como puente entre diseño y código, este repo es un punto de partida simple.

Podés:

Duplicar el archivo Figma

Crear tu propia guía de estilos en Zeroheight

Clonar este repositorio

Probar el flujo completo de diseño a producción

Si lo probás o tenés sugerencias, ¡me encantaría leerlas o colaborar!
Podés escribirme por LinkedIn o abrir un issue.

👨‍💻 Autor
Desarrollado por Agustín Farisano – Diseñador UX/UI especializado en sistemas de diseño, tokens y su integración con entornos de desarrollo.

📄 Licencia
MIT – Libre para clonar, modificar y experimentar.

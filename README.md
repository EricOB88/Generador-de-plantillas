# Plantillas operativas · Costa Rica

Generador web de plantillas operativas para cualquier delegación del país: decomiso de droga y de motocicleta, aprehensión, violencia doméstica, persona fallecida, ZIP, control vehicular y novedad general.

- Se elige la **provincia, el cantón y el distrito** (división territorial administrativa: 7 provincias, 84 cantones y 492 distritos) y se escribe el nombre de la delegación, que aparece en el encabezado.
- Se llena el formulario y se copia, se envía por WhatsApp o se descarga como .txt.
- Todo ocurre en el navegador: lo que se escribe se guarda solo en el dispositivo y no se envía a ningún sitio.
- Tema claro, oscuro o automático. Se puede instalar como app (PWA) y funciona sin conexión.

## Publicar con GitHub Pages
1. Crea un repositorio y sube todos los archivos de esta carpeta a la raíz.
2. Ve a **Settings → Pages**, elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**, y guarda.
3. En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Aviso
La página es pública. No subas al repositorio datos reales de personas (nombres, cédulas, casos).

## Actualizar la división territorial
Los cantones y distritos están en `data.js`, una línea por cantón con el formato `Provincia|Cantón|Distrito1,Distrito2`. Si se crea un cantón o distrito nuevo, solo hay que editar esa línea.

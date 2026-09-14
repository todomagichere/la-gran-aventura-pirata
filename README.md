# La isla de Lira

Invitación web pirata para la fiesta de cumpleaños de Lira.

## Probar con Docker

Solo necesitas tener instalados Docker y Docker Compose. No es necesario instalar
Node.js, npm, Python ni las dependencias del proyecto.

Desde la carpeta del repositorio, construye e inicia el portal:

```bash
docker compose up --build
```

Puedes confirmar que Docker está sirviendo la revisión actual visitando
<http://localhost:4173/portal-version.txt>. Debe mostrar:

```text
la-isla-de-lira-v5-html-completo
```

Cuando aparezca el mensaje indicando que Nginx está listo, abre:

<http://localhost:4173>

Si ya habías construido una versión anterior y el navegador conserva recursos en
caché, reconstruye el contenedor y fuerza una recarga de la página:

```bash
docker compose down
docker compose build --no-cache --pull
docker compose up --force-recreate
```

Después utiliza `Ctrl+Shift+R` (Windows/Linux) o `Cmd+Shift+R` (macOS) en el
navegador.

El contenido y los estilos principales están incluidos directamente en
`index.html`, por lo que la página se muestra incluso si JavaScript está bloqueado
o no hay conexión a Internet. JavaScript se utiliza únicamente para activar los
minijuegos y guardar la confirmación de asistencia.

Para detener el portal, pulsa `Ctrl+C`. Después puedes eliminar el contenedor con:

```bash
docker compose down
```

También puedes iniciarlo en segundo plano:

```bash
docker compose up --build -d
```

Consulta su estado o sus logs con:

```bash
docker compose ps
docker compose logs -f
```

## Alternativa sin Docker

Si ya tienes Python 3 disponible, puedes servir los archivos estáticos mediante:

```bash
npm run dev
```

El portal estará disponible igualmente en <http://localhost:4173>.

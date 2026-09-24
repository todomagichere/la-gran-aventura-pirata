# La gran aventura pirata

Invitación web pirata para la fiesta de cumpleaños de Lira.

## Probar con Docker

Solo necesitas tener instalados Docker y Docker Compose. No es necesario instalar
Node.js, npm, Python ni las dependencias del proyecto.

Desde la carpeta del repositorio, construye e inicia el portal:

```bash
docker compose up --build
```

Cuando aparezca el mensaje indicando que Nginx está listo, abre:

<http://localhost:4173>

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

## Publicar cambios

Antes de subir cambios a `main`, ejecuta `npm run bump:assets`. El comando actualiza la versión de CSS, JavaScript y del service worker para que los visitantes reciban los recursos de la nueva publicación.

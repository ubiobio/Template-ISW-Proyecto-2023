## Frontend Template para proyecto ingeniería de software

### Instrucciones de instalacion

- Clonar el repositorio
- Instalar dependencias con `npm install` (deben posicionarse en la carpeta del proyecto)
- Deben crear un archivo `.env.local` en la carpeta raiz del proyecto, siguiendo la estructura del `.env.example` aqui usan la url de su backend, un ejemplo seria:

  ```
  NEXT_PUBLIC_API_URL=http://localhost:8000/api
  ```

  - Es importante dejar la palabra api del final sin cambiar, ya que es la ruta base de la api.

- Correr el servidor con `npm run dev` en desarrollo.

- _Al Final_: Hacer la build del servidor con `npm run build` y correr con `npm run start` en producción.

### Estructura de archivos

- `.next` : Carpeta donde se encuentran los archivos compilados de la aplicación
- `node_modules` : Carpeta donde se encuentran las dependencias de la aplicación
- `public` : Carpeta donde se encuentran los archivos estaticos de la aplicación
- `src` : Carpeta donde se encuentra todo el codigo fuente
- `src/components` : Carpeta donde se encuentran los componentes de la aplicación que se comparten entre las distintas vistas
- `src/app` : Carpeta donde se encuentran las vistas de la aplicación
- `src/api`: Carpeta donde se encuentran los archivos que se encargan de realizar las peticiones a la API

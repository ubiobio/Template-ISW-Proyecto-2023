## Backend Template para proyecto ingeniería de software

### Instrucciones de instalacion

- Clonar el repositorio
- Instalar dependencias con `npm install`
- Crear archivo `.env` con las variables de entorno, en la carpeta `/config`
  - Sigue la estructura del archivo `.env.example`
  - Agrega la variable `PORT` con el puerto en el que quieres que corra el servidor
  - Agrega la variable `HOST` con la URL del servidor
  - Agrega la variable `DB_URL` con la URI de la base de datos
  - Agrega la variable `ACCESS_JWT_SECRET` con la clave secreta para crear los tokens de autenticacion
  - Agrega la variable `REFRESH_JWT_SECRET` con la clave secreta para crear los tokens de refresco
- Correr el servidor con `npm start` o `npm run dev`.

### Estructura de carpetas

```bash

├── NombreProyecto
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   ├── .env.example
│   │   │   ├── initialSetup.js
│   │   │   ├── configDB.js
│   │   │   └── configEnv.js
│   │   ├── constants
│   │   │   ├── roles.constants.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares
│   │   │   ├── authentication.middleware.js
│   │   │   └── authorization.middleware.js
│   │   ├── models
│   │   │   ├── auth.model.js
│   │   │   └── user.model.js
│   │   ├── routes
│   │   │   ├── auth.route.js
│   │   │   ├── user.route.js
│   │   │   └── index.routes.js
│   │   ├── services
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── schemas
│   │   │   ├── user.schema.js
│   │   │   └── auth.schema.js
│   │   ├── utils
│   │   │   ├── resHandler.js
│   │   │   └── errorHandler.js
│   │   └── server.js
│   ├── .eslintrc.json
│   ├── .prettierrc.json
│   ├── .gitignore
└── └── package.json
```

## Arquitectura de la API

![img.png](ArquitecturaAPI.png)

## Instrucciones de uso

- Una vez instaladas las dependencias y configuradas las variables de entorno, puedes correr el servidor con `npm start`
- Recuerda que **debes utilizar** Postman o Insomnia para hacer las peticiones a la API
- De manera automatica se creara un usuario administrador y user, con los siguientes datos:
  - **Administrador**
    - `email: admin@email.com`
    - `password: admin123`
  - **User**
    - `email: user@email.com`
    - `password: user123`
- Tambien, de manera automatica se crean dos roles principales en la base de datos:
  - `admin`
  - `user`
- Se debe **autenticar con el usuario admin** para poder usar el endpoint de usuarios ( Pueden modificar esto en el archivo de rutas )
- Para la autenticacion, se debe enviar un objeto JSON con el email y constraseña al endpoint `/api/auth/login`
  - Ejemplo:
  ```json
  {
    "email": "admin@email.com",
    "password": "admin123"
  }
  ```
  - Devuelve un token que se **debe enviar en el header** de las peticiones que requieran autenticacion, con el nombre `Authorization` y el valor `Bearer <token>`
  - El token tiene una duracion de 24 horas, despues de ese tiempo, se puede refrescar el token con el endpoint `/api/auth/refresh`
  - El token de refresco, tiene una duracion de 7 dias, despues de ese tiempo, se debe volver a autenticar

## Consideraciones

- El manejo de tokens, esta simplificado para hacerlo mas facil de entender
- La abstracion de la autenticacion, se completará con el frontend

## Librerias utilizadas

- [Node](https://nodejs.org/es/): Entorno de ejecucion de JS
- [Express](https://expressjs.com/es/): Framework para crear servidores web
- [Mongoose](https://mongoosejs.com/): Libreria para conectar a MongoDB
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken): Libreria para crear tokens de autenticacion
- [Dotenv](https://www.npmjs.com/package/dotenv): Libreria para manejar variables de entorno
- [Cors](https://www.npmjs.com/package/cors): Libreria para manejar el CORS
- [Joi](https://www.npmjs.com/package/joi): Libreria para manejar validaciones
- [Morgan](https://www.npmjs.com/package/morgan): Libreria para manejar logs

 [Volver al inicio](../README.md)


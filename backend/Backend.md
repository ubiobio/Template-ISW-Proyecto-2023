## Backend Template para proyecto ingeniería de software

### Instrucciones de instalacion

- Clonar el repositorio
- Instalar dependencias con `npm install`
- Crear archivo `.env` con las variables de entorno, en la carpeta `/config`
    - Sigue la estructura del archivo `.env.example`
    - Agrega la variable `PORT` con el puerto en el que quieres que corra el servidor
    - Agrega la variable `HOST` con la URL del servidor
    - Agrega la variable `DB_URL` con la URI de la base de datos
    - Agrega la variable `JWT_SECRET` con la llave secreta para el JWT
- Correr el servidor con `npm start`

### Estructura de carpetas

```bash

├── NombreProyecto
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   ├── .env
│   │   │   ├── initialSetup.js
│   │   │   ├── configDB.js
│   │   │   └── configEnv.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares
│   │   │   ├── autho.middleware.js
│   │   │   └── authe.middleware.js
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
│   │   │   └── user.schema.js    
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
    - **User**
        - `email: user@email.com`
- Se debe autenticar con el usuario admin para poder crear nuevos usuarios
- Para la autenticacion, se debe enviar un objeto JSON con el email al endpoint `/api/auth/signin`
  - Ejemplo: 
  ```json
    {
      "email": "admin@email.com"
    }
  ```
  - Devuelve un token que se **debe enviar en el header** de las peticiones que requieran autenticacion
  - El token tiene una duracion de 24 horas y se llama `token` el header en cuestion.

## Consideraciones

- El manejo de tokens, esta simplificado para hacerlo mas facil de entender
- **Se recomienda usar cookies para manejar los tokens**, no el body de la peticion
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


## [Volver al inicio](../README.md)

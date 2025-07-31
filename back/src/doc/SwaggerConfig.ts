// src/docs/swaggerConfig.ts
import { SwaggerOptions } from "swagger-ui-express";

export const swaggerOptions: SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proyecto Cassa',
      version: '1.0.0',
      description: 'loaasdasjdbuidsbnfuinsduifnuidsnfuidsnufnsdunfuidsnuifnudsufnsunduif',
    },
    servers: [
      {
        url: 'http://localhost:3000', // cambia esto si usás otro puerto
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Cambiá la ruta según dónde estén tus archivos de rutas
};

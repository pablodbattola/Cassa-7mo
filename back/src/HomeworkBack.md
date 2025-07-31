
# 🏫 Homework 8 de agosto – Backend Avanzado con Node.js, Express y TypeORM

## ✅  RÚBRICA DE EVALUACIÓN (hasta 100 puntos)

| Criterio                                      | Puntos |
|----------------------------------------------|--------|
| CRUD funcional completo para entidades        | 25 pts |
| Uso correcto de relaciones (con User)         | 10 pts |
| Código estructurado y modularizado            | 10 pts |
| Servicios, controladores y middlewares        | 10 pts |
| Validaciones y manejo de errores              | 10 pts |
| Uso de variables de entorno con dotenv        | 5 pts  |
| Documentación mínima (README.md)              | 5 pts  |
| Integración API externa (obligatoria)         | 15 pts |
| Segunda integración API (obligatoria)         | 10 pts |

---



INTEGRACIONES OBLIGATORIAS (PRESENTACION 8 DE AGOSTO)
💳 A. Mercado Pago
Crear preferencia de pago a partir de una orden real o simulada.


[Mercado Pago Docs](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/introduction)

📧 B. Nodemailer
Enviar un correo al usuario cuando se le asigne una Order.

Asunto: "Gracias por tu compra"

Cuerpo: incluir título, descripción y fecha de entrega.

[Nodemailer Docs](https://nodemailer.com/about/)

🔁 INTEGRACIONES FUTURAS (NO obligatorias para el 8 de Agosto)
🤖 Chatbot API (respuesta automática a dudas)

Se puede usar [OpenAI API](https://platform.openai.com/docs) o crear lógica local con JSON.

🧾 Swagger para documentación de la API

[Swagger Docs](https://swagger.io/docs/)

📦 Upload de archivos con Multer
Permitir que los usuarios suban fotos de perfil, con archivos adjuntos (PDF, imágenes, etc.).
- [Multer Docs](https://github.com/expressjs/multer)

🧠 SUGERENCIA
Incluir un README.md que explique:

Rutas de la entidad Homework

Cómo funcionan las integraciones realizadas

Pasos para levantar el proyecto

Fecha de entrega: jueves 8 de agosto


FINAL

🖥️ Frontend básico con Vite + React
a) Formulario de registro (register)
Campos:

Nombre

Apellido

Email

Password

Fecha de Nacimiento

Confirm Password

b) Formulario de login
Campos:

Email

Password

c) Formulario para probar Mercado Pago
Mostrar listado simulado de productos con precios (hardcodeados)

Botón para iniciar la preferencia de pago

Mostrar link devuelto por backend para redireccionar a Mercado Pago

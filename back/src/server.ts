import "reflect-metadata"
import cors from "cors"
import morgan from "morgan"
import express from "express"
import UserRouter from "./routes/user.routes"
import ProductRouter from "./routes/product.routes"
import AuthRouter from "./routes/auth.routes"
import OrderRouter from "./routes/order.routes"

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './doc/SwaggerConfig';

const server = express()
const specs = swaggerJsdoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

server.use(express.json())
server.use(morgan("dev")) // ✅ Agregado formato
server.use(cors())
server.use("", UserRouter) // ✅ Correcto
server.use("", ProductRouter)
server.use("", AuthRouter)
server.use("", OrderRouter)

export default server

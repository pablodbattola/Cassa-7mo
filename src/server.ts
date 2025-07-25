import "reflect-metadata"
import cors from "cors"
import morgan from "morgan"
import express from "express"
import UserRouter from "./routes/user.routes"
import ProductRouter from "./routes/product.routes"
import AuthRouter from "./routes/auth.routes"

const server = express()

server.use(express.json())
server.use(morgan("dev")) // ✅ Agregado formato
server.use(cors())
server.use("", UserRouter) // ✅ Correcto
server.use("", ProductRouter)
server.use("", AuthRouter)

export default server

// src/routes/auth.routes.ts
import { Router } from "express"
import { loginController } from "../controllers/auth.controller"

const AuthRouter = Router()

AuthRouter.post("/login", loginController)

export default AuthRouter

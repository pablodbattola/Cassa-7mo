// src/controllers/auth.controller.ts
import { Request, Response } from "express"
import { loginService } from "../services/auth.service"

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const result = await loginService(email, password)
    res.status(200).json(result)
  } catch (error: any) {
    if (error.message === "INVALID_EMAIL" || error.message === "INVALID_PASSWORD") {
      res.status(401).json({ message: "Credenciales inválidas" })
    } else {
      res.status(500).json({ message: "Error interno al iniciar sesión" })
    }
  }
}

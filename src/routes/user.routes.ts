import { Router } from "express"
import {
  getAllController,
  userIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller"
import { verifyToken } from "../middleware/auth.middleware"

const UserRouter = Router()

UserRouter.get("/user", getAllController) // Obtener todos
UserRouter.get("/user/:id", userIdController) // Obtener uno por ID
UserRouter.post("/user", createUserController) // Crear usuario
UserRouter.put("/user/:id", verifyToken, updateUserController) // Actualizar usuario
UserRouter.delete("/user/:id", deleteUserController) // Eliminar usuario

export default UserRouter

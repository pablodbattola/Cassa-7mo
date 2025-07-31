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
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Ana
 *                   lastname:
 *                     type: string
 *                     example: Pérez
 *                   password:
 *                     type: string
 *                     example: 1234
 *                   confirmPassword:
 *                     type: string
 *                     example: 1234
 *                   email:
 *                     type: string
 *                     example: ana@example.com
 *                   isAdmin:
 *                     type: boolean
 *                     example: false
 *       404:
 *         description: No se encontraron usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se encontraron usuarios en la base de datos
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ocurrió un error inesperado en el servidor
 */
UserRouter.get("/user", getAllController) // Obtener todos
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a buscar
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Ana
 *                   lastname:
 *                     type: string
 *                     example: Pérez
 *                   password:
 *                     type: string
 *                     example: 1234
 *                   confirmPassword:
 *                     type: string
 *                     example: 1234
 *                   email:
 *                     type: string
 *                     example: ana@example.com
 *                   isAdmin:
 *                     type: boolean
 *                     example: false
 *       400:
 *         description: No se encontraron usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se encontraron usuarios en la base de datos
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ocurrió un error inesperado en el servidor
 */
UserRouter.get("/user/:id", userIdController) // Obtener uno por ID
UserRouter.post("/user", createUserController) // Crear usuario
UserRouter.put("/user/:id", verifyToken, updateUserController) // Actualizar usuario
UserRouter.delete("/user/:id", deleteUserController) // Eliminar usuario

export default UserRouter

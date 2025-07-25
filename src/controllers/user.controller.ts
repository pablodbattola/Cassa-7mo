import { Request, Response } from "express"
import {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../services/user.service"

export const getAllController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsersService()
    res.status(200).json(users) // Devuelve todos los usuarios
  } catch {
    res.status(500).json({ message: "Error al obtener usuarios" })
  }
}

export const userIdController = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id, 10)
  if (isNaN(userId)) {
    res.status(400).json({ message: "ID inválido" })
    return
  }

  try {
    const user = await getUserByIdService(userId)
    res.status(200).json(user) // Devuelve un usuario por ID
  } catch {
    res.status(404).json({ message: "Usuario no encontrado" })
  }
}

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await createUserService(req.body)
    res.status(201).json(newUser) // Devuelve el usuario creado
  } catch {
    res.status(500).json({ message: "Error al crear usuario" })
  }
}

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id, 10)
  if (isNaN(userId)) {
    res.status(400).json({ message: "ID inválido" })
    return
  }

  try {
    const updatedUser = await updateUserService(userId, req.body)
    res.status(200).json(updatedUser) // Devuelve el usuario actualizado
  } catch {
    res.status(404).json({ message: "Error al actualizar usuario" })
  }
}

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "ID inválido" })
    return
  }

  try {
    await deleteUserService(id)
    res.status(200).json({ message: "Usuario eliminado correctamente" }) // 👈 Aquí el mensaje
  } catch (error: any) {
    if (error.message === "NOT_FOUND") {
      res.status(404).json({ message: "Usuario no encontrado" })
    } else {
      res.status(500).json({ message: "Error al eliminar usuario" })
    }
  }
}

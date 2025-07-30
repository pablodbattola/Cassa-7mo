import { Request, Response } from "express"
import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService
} from "../services/product.service"

export const getAllProductsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProductsService()
    res.status(200).json(products)
  } catch {
    res.status(500).json({ message: "Error al obtener productos" })
  }
}

export const getProductByIdController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "ID inválido" })
  }

  try {
    const product = await getProductByIdService(id)
    res.status(200).json(product)
  } catch (error: any) {
    if (error.message === "NOT_FOUND") {
      res.status(404).json({ message: "Producto no encontrado" })
    } else {
      res.status(500).json({ message: "Error al obtener producto" })
    }
  }
}

export const createProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await createProductService(req.body)
    res.status(201).json(product)
  } catch (error: any) {
    if (error.message === "NAME_ALREADY_EXISTS") {
      res.status(409).json({ message: "El nombre ya está registrado" })
    } else {
      res.status(500).json({ message: "Error al crear producto" })
    }
  }
}

export const updateProductController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "ID inválido" })
  }

  try {
    const product = await updateProductService(id, req.body)
    res.status(200).json(product)
  } catch (error: any) {
    if (error.message === "NOT_FOUND") {
      res.status(404).json({ message: "Producto no encontrado" })
    } else if (error.message === "NAME_ALREADY_EXISTS") {
      res.status(409).json({ message: "El nombre ya está registrado" })
    } else {
      res.status(500).json({ message: "Error al actualizar producto" })
    }
  }
}

export const deleteProductController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "ID inválido" })
    return
  }

  try {
    await deleteProductService(id)
    res.status(200).json({ message: "Producto eliminado correctamente" }) // 👈 Mensaje agregado
  } catch (error: any) {
    if (error.message === "NOT_FOUND") {
      res.status(404).json({ message: "Producto no encontrado" })
    } else {
      res.status(500).json({ message: "Error al eliminar producto" })
    }
  }
}


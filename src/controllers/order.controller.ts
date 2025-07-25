import { Request, Response } from "express"
import {
  getAllOrdersService,
  getOrderByIdService,
  createOrderService,
  deleteOrderService
} from "../services/order.service"

export const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrdersService()
    res.status(200).json(orders)
  } catch {
    res.status(500).json({ message: "Error al obtener pedidos" })
  }
}

export const getOrderByIdController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  if (isNaN(id))  res.status(400).json({ message: "ID inválido" })

  try {
    const order = await getOrderByIdService(id)
    res.status(200).json(order)
  } catch (error: any) {
    res.status(404).json({ message: "Pedido no encontrado" })
  }
}

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = await createOrderService(req.body)
    res.status(201).json(order)
  } catch {
    res.status(500).json({ message: "Error al crear pedido" })
  }
}

export const deleteOrderController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  if (isNaN(id))res.status(400).json({ message: "ID inválido" })

  try {
    await deleteOrderService(id)
    res.status(200).json({ message: "Pedido eliminado correctamente" })
  } catch (error: any) {
    res.status(404).json({ message: "Pedido no encontrado" })
  }
}

import { Request, Response } from "express"
import {
  getAllOrdersService,
  getOrderByIdService,
  createOrderService,
  deleteOrderService
} from "../services/order.service"
import ProductRepository from "../repositories/product.repository"
import UserRepository from "../repositories/user.repository"

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

import { OrderDetail } from "../entities/orderDetail.entity";
import { Order } from "../entities/order.entity"

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { userId, products } = req.body;

    // Buscar usuario
    const user = await UserRepository.findById(userId);
    if (!user) res.status(404).json({ message: "Usuario no encontrado" });

    // Armar detalles del pedido como OrderDetail[]
    const details: OrderDetail[] = [];

    for (const item of products) {
      const product = await ProductRepository.findById(item.productId);
      if (!product) res.status(404).json({ message: `Producto ID ${item.productId} no encontrado` });

      const detail = new OrderDetail();
      detail.product = product;
      detail.quantity = item.quantity;
      detail.unitPrice = Number(product.price);

      details.push(detail);
    }

    const orderData: Partial<Order> = {
      user,
      details,
    };

    const order = await createOrderService(orderData);
    res.status(201).json(order);
  } catch (error) {
    console.error("🛑 Error al crear orden:", error);
    res.status(500).json({ message: "Error al crear pedido" });
  }
};


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

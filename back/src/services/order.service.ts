import OrderRepository from "../repositories/order.repository"
import { Order } from "../entities/order.entity"

export const getAllOrdersService = async (): Promise<Order[]> => {
  return await OrderRepository.findAllOrders()
}

export const getOrderByIdService = async (id: number): Promise<Order> => {
  return await OrderRepository.findOrderById(id)
}

export const createOrderService = async (data: Partial<Order>): Promise<Order> => {
  return await OrderRepository.createOrder(data)
}

export const deleteOrderService = async (id: number): Promise<void> => {
  return await OrderRepository.deleteOrder(id)
}

import { Router } from "express"
import {
  getAllOrdersController,
  getOrderByIdController,
  createOrderController,
  deleteOrderController
} from "../controllers/order.controller"

const OrderRouter = Router()

OrderRouter.get("/order", getAllOrdersController)
OrderRouter.get("/order/:id", getOrderByIdController)
OrderRouter.post("/order", createOrderController)
OrderRouter.delete("/order/:id", deleteOrderController)

export default OrderRouter

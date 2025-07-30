import { Router } from "express"
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController
} from "../controllers/product.controller"

const ProductRouter: Router = Router()

ProductRouter.get("/product", getAllProductsController)
ProductRouter.get("/product/:id", getProductByIdController)
ProductRouter.post("/product", createProductController)
ProductRouter.put("/product/:id", updateProductController)
ProductRouter.delete("/product/:id", deleteProductController)

export default ProductRouter

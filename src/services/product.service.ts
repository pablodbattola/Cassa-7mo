import ProductRepository from "../repositories/product.repository"
import { Product } from "../entities/product.entity"

export const getAllProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.findAll()
}

export const getProductByIdService = async (id: number): Promise<Product> => {
  return await ProductRepository.findById(id)
}

export const createProductService = async (data: Partial<Product>): Promise<Product> => {
  return await ProductRepository.createProduct(data)
}

export const updateProductService = async (id: number, data: Partial<Product>): Promise<Product> => {
  return await ProductRepository.updateProduct(id, data)
}

export const deleteProductService = async (id: number): Promise<void> => {
  return await ProductRepository.deleteProduct(id)
}

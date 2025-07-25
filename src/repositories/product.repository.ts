import { AppDataSource } from "../dbcobfig/data-source"
import { Product } from "../entities/product.entity"

const ProductRepository = AppDataSource.getRepository(Product).extend({
  async findById(id: number): Promise<Product> {
    const product = await this.findOneBy({ id })
    if (!product) throw new Error("NOT_FOUND")
    return product
  },

  async findAll(): Promise<Product[]> {
    return await this.find()
  },

  async createProduct(data: Partial<Product>): Promise<Product> {
    const product = this.create(data)
    return await this.save(product)
  },

  async updateProduct(id: number, data: Partial<Product>): Promise<Product> {
    const product = await this.findById(id)
    const updated = Object.assign(product, data)
    return await this.save(updated)
  },

  async deleteProduct(id: number): Promise<void> {
    const result = await this.delete(id)
    if (result.affected === 0) throw new Error("NOT_FOUND")
  },
})

export default ProductRepository

import { AppDataSource } from "../dbcobfig/data-source";
import { Order } from "../entities/order.entity";
import ProductRepository from "./product.repository"; // Para validar productos

const OrderRepository = AppDataSource.getRepository(Order).extend({
  async findAllOrders(): Promise<Order[]> {
    return await this.find({ relations: ["details", "details.product", "user"] });
  },

  async findOrderById(id: number): Promise<Order> {
    const order = await this.findOne({
      where: { id },
      relations: ["details", "details.product", "user"],
    });
    if (!order) throw new Error("NOT_FOUND");
    return order;
  },

  async createOrder(data: Partial<Order>): Promise<Order> {
    if (!data.user) throw new Error("USER_REQUIRED");
    if (!data.details || data.details.length === 0) throw new Error("ORDER_DETAILS_REQUIRED");

    // Validar y calcular total
    let total = 0;

    for (const detail of data.details) {
      if (!detail.product || !detail.product.id) throw new Error("PRODUCT_REQUIRED_IN_DETAIL");
      if (!detail.quantity || detail.quantity <= 0) throw new Error("INVALID_QUANTITY");

      // Obtener producto real para precio actualizado
      const product = await ProductRepository.findById(detail.product.id);
      detail.unitPrice = Number(product.price);

      total += detail.unitPrice * detail.quantity;
    }

    const order = this.create({
      user: data.user,
      details: data.details,
      total,
    });

    return await this.save(order);
  },

  async deleteOrder(id: number): Promise<void> {
    const result = await this.delete(id);
    if (result.affected === 0) throw new Error("NOT_FOUND");
  },
});

export default OrderRepository;

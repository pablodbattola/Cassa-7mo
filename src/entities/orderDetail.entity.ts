import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm"
import { Product } from "./product.entity"
import { Order } from "./order.entity"

@Entity({ name: "OrderDetail" })
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number

  @Column("int")
  quantity: number

  @Column("decimal", { precision: 10, scale: 2 })
  unitPrice: number

  @ManyToOne(() => Product, product => product.orderDetails, { eager: true })
  product: Product

  @ManyToOne(() => Order, order => order.details)
  order: Order
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { OrderDetail } from "./orderDetail.entity"

@Entity({ name: "Product" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column("text", { nullable: true })
  description: string

  @Column("decimal", { precision: 10, scale: 2 })
  price: number

  @Column("int")
  stock: number

  @OneToMany(() => OrderDetail, detail => detail.product)
orderDetails: OrderDetail[]
}
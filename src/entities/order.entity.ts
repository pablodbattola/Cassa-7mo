import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn
} from "typeorm"
import { User } from "./user.entity"
import { OrderDetail } from "./orderDetail.entity"

@Entity({ name: "Order" })
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  date: Date

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
total?: number


  @ManyToOne(() => User, user => user.orders, { eager: true })
  user: User

  @OneToMany(() => OrderDetail, detail => detail.order, { cascade: true })
  details: OrderDetail[]
}

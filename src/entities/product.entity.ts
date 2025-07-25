import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
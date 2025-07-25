import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "User" })
export class User {
  @PrimaryGeneratedColumn()
  id: number // Identificador autogenerado

  @Column({ type: "varchar" })
  name: string // Nombre del usuario

  @Column({ type: "varchar" })
  lastname: string // Apellido del usuario

  @Column()
  password: string

  @Column()
  confirmPassword: string

  @Column({ type: "varchar", unique: true })
  email: string // Email del usuario (único)

  @Column({ default: false })
  isAdmin: boolean // Rol de admin (true o false)
}

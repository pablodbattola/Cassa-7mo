import { AppDataSource } from '../dbcobfig/data-source'
import { User } from '../entities/user.entity'

// Extendemos el repositorio de TypeORM con métodos personalizados
const UserRepository = AppDataSource.getRepository(User).extend({
  // Buscar usuario por ID
  async findById(id: number): Promise<User> {
    const user = await this.findOneBy({ id })
    if (!user) throw new Error('NOT_FOUND') // ❌ No se encontró el usuario
    return user
  },

  // Obtener todos los usuarios
  async findAllUsers(): Promise<User[]> {
    const users = await this.find()
    if (!users) throw new Error('Users not found')
    return users
  },

  // Crear nuevo usuario
  async createUser(data: Partial<User>): Promise<User> {
    const existing = await this.findOneBy({ email: data.email })
    if (existing) throw new Error('EMAIL_ALREADY_EXISTS') // ❌ Email duplicado

    const user = this.create(data)
    return await this.save(user)
  },

  // Actualizar usuario por ID
  async updateUser(id: number, data: Partial<User>): Promise<User> {
    const user = await this.findById(id)

    // Si cambia el email, verificar que no exista en otro
    if (data.email && data.email !== user.email) {
      const existing = await this.findOneBy({ email: data.email })
      if (existing && existing.id !== user.id) {
        throw new Error('EMAIL_ALREADY_EXISTS') // ❌ Email en uso por otro
      }
    }

    const updated = Object.assign(user, data)
    return await this.save(updated)
  },

  // Eliminar usuario
  async deleteUser(id: number): Promise<void> {
    const result = await this.delete(id)
    if (result.affected === 0) throw new Error('NOT_FOUND') // ❌ No existe para eliminar
  },
})

export default UserRepository;
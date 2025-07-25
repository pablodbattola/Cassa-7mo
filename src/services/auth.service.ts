// src/services/auth.service.ts
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserRepository from "../repositories/user.repository"
import { User } from "../entities/user.entity"

export const loginService = async (
  email: string,
  password: string
): Promise<{ token: string; user: Partial<User> }> => {
  const user = await UserRepository.findOneBy({ email })
  if (!user) throw new Error("INVALID_EMAIL")

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) throw new Error("INVALID_PASSWORD")

  const token = jwt.sign(
    { id: user.id, email: user.email, isAdmin: user.isAdmin },
    "fanySuperJWT@2024_CLAVEsegura"!,
    { expiresIn: "1h" }
  )

  // No devolvemos la contraseña
  const { password: _, ...userWithoutPassword } = user

  return { token, user: userWithoutPassword }
}

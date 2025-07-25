import { User } from "../entities/user.entity"
import UserRepository from "../repositories/user.repository"
import bcrypt from "bcrypt"


export const getAllUsersService = async (): Promise<User[]> => {
  return await UserRepository.findAllUsers()
}

export const getUserByIdService = async (id: number): Promise<User> => {
  return await UserRepository.findById(id)
}

export const createUserService = async (data: Partial<User>): Promise<User> => {
  if (!data.password) throw new Error("PASSWORD_REQUIRED")

  const hashedPassword = await bcrypt.hash(data.password, 10)
  return await UserRepository.createUser({ ...data, password: hashedPassword })
}

export const updateUserService = async (id: number, data: Partial<User>): Promise<User> => {
  return await UserRepository.updateUser(id, data)
}

export const deleteUserService = async (id: number): Promise<void> => {
  return await UserRepository.deleteUser(id)
}

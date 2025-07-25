import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/user.entity"
import { Product } from "../entities/product.entity";
import { Order } from "../entities/order.entity";
import { OrderDetail } from "../entities/orderDetail.entity";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: process.env.TYPE as any,
  host: process.env.HOST,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Product, Order, OrderDetail],
  subscribers: [],
  migrations: [],
  dropSchema: true,
});

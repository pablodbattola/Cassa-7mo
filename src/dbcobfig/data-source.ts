import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/user.entity"
import { Product } from "../entities/product.entity";
import { Order } from "../entities/order.entity";
import { OrderDetail } from "../entities/orderDetail.entity";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password:"admin",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User, Product, Order, OrderDetail],
    subscribers: [],
    migrations: [],
    dropSchema:true,

})

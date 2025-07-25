import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/user.entity"
import "dotenv/config";
import { Product } from "../entities/product.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password:"admin",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User, Product],
    subscribers: [],
    migrations: [],
    dropSchema:true,

})

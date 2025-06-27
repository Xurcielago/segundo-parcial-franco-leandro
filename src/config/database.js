import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

export const start = async() => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa");
        await sequelize.sync()
    } catch (error) {
        console.log("Ocurrió un error durante la conexión con la base de datos")
    }
}
import { Sequelize } from "sequelize"
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_NAME } from "@/config"

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: 'mysql',
    logging: false,
})

export const connectToDB = async (): Promise<void> => {
    console.log(`Connecting to MySQL...`)
    try {
        await sequelize.authenticate()
        console.log("MySQL connected successfully")
    } catch (error) {
        console.error("Error connecting to MySQL:", error)
    }
}

export const closeDBConnection = async (): Promise<void> => {
    try {
        await sequelize.close()
        console.log("MySQL connection closed")
    } catch (error) {
        console.error("Error closing MySQL connection:", error)
    }
}

import { join } from "path"
import dotenv from "dotenv"

dotenv.config()
;[
    ".env",
    `.env.${process.env.NODE_ENV}`,
    ".env.local",
    `.env.local.${process.env.NODE_ENV}`,
].forEach((envPath) => {
    const fullPath = join(__dirname, "../..", envPath)
    console.log(fullPath)
    dotenv.config({ path: fullPath, override: true })
})

const {
    FRONTEND_URL = "http:localhost:3000",
    PORT = 5000,
    JWT_SECRET = "1957hbngfwner",
    JWT_EXPIRES = "24h",
    NODE_ENV = "development",
    DB_HOST = "localhost",
    DB_USER = "myusername",
    DB_NAME = "mydatabase",
    DB_PASSWORD = "mypassword",
    DB_PORT = 5432,
} = process.env

export {
    FRONTEND_URL,
    PORT,
    JWT_SECRET,
    JWT_EXPIRES,
    NODE_ENV,
    DB_HOST,
    DB_USER,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
}

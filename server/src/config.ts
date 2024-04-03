import { join } from "path"
import dotenv from "dotenv"
import { existsSync } from "fs"

;[
    ".env",
    ".env.local",
    `.env.${process.env.NODE_ENV}`,
    `.env.${process.env.NODE_ENV}.local`,
].forEach((envPath) => {
    const fullPath = join(__dirname, "..", envPath)
    if (existsSync(fullPath)) {
        console.log("Env file used: ", fullPath)
        dotenv.config({ path: fullPath, override: true })
    }
})

const {
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

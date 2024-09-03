import { MikroORM } from "@mikro-orm/mysql"

let ormInstance: MikroORM

export default {
    entities: ["./entities"],
    dbName: process.env.DB_NAME,
    type: "mysql",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    debug: true,
} satisfies Parameters<typeof MikroORM.init>[0]

export const getEntityManager = () => {
    if (!ormInstance) {
        throw new Error("ORM not initialized. Call initializeORM() first.")
    }
    return ormInstance.em
}

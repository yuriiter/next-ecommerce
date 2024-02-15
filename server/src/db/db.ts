import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "@/config"
import { Pool, type QueryResult } from "pg"
import { type QueryType } from "./queries"

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
})

export const query = async <QT extends QueryType>(
    query: string,
    variables: QT["variables"]
): Promise<QueryResult<QT["queryResult"]>> => {
    return await pool.query<QT["queryResult"], QT["variables"]>(
        query,
        variables
    )
}

export default pool

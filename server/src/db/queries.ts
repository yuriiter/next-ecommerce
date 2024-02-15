import { type Permission } from "@typings/user"
import { type QueryResultRow } from "pg"
import { query } from "./db"

type Email = string
type PasswordHash = string

export interface QueryType {
    variables: any[]
    queryResult: QueryResultRow
}

export type GetUserByEmailAndPasswordHashQueryType = {
    variables: [Email, PasswordHash]
    queryResult: { id: string; email: string; role: Permission }
}

export const GetUserByEmailAndPasswordHashQuery = `SELECT id, email, role FROM "User" WHERE email = $1 AND passwordHash = $2`

export const getUserByEmailAndPasswordHashQuery = (
    variables: GetUserByEmailAndPasswordHashQueryType["variables"]
) =>
    query<GetUserByEmailAndPasswordHashQueryType>(
        GetUserByEmailAndPasswordHashQuery,
        variables
    )

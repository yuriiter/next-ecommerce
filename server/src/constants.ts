import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } from "@/config"

export const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/test?retryWrites=true&w=majority`

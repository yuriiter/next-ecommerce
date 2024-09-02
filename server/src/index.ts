import "module-alias/register"
import express, { type Express } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import initRouters from "@utils/initRouters"
import ExpressError from "@errors/ExpressError"
import accountRouter from "@routers/account.router"
import { FRONTEND_URL, PORT } from "@/config"
import { closeDBConnection, connectToDB } from "@/db"
import carRouter from "@routers/car.router"
import { healthRouter } from "@routers/health.router"
import userRouter from "@routers/user.router"
import sessionRouter from "@routers/session.router"

const app: Express = express()

app.use(cors({ origin: FRONTEND_URL.split(","), credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRouters(app, [
    carRouter,
    accountRouter,
    userRouter,
    sessionRouter,
    healthRouter,
])

app.use(ExpressError.handleError)

app.listen(PORT, () => {
    console.log(`Server is runniung on port ${PORT}`)
    void connectToDB()
})

app.on("close", () => {
    void closeDBConnection()
})

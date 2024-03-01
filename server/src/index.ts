import "module-alias/register"
import express, { type Express } from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "@routers/user.router"
import initRouters from "@utils/initRouters"
import ExpressError from "@errors/ExpressError"
import accountRouter from "@routers/account.router"
import { PORT } from "@/config"
import { closeMongoDBConnection, connectToMongoDB } from "@/db/db"
import carRouter from "@routers/car.router"

dotenv.config()

const app: Express = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

initRouters(app, [carRouter, accountRouter])

app.use(ExpressError.handleError)

app.get("/health", (req, res) => {
    res.json({ type: "health", status: "OK" })
})

app.listen(PORT, () => {
    console.log(`Server is runniung on port ${PORT}`)
    void connectToMongoDB()
})

app.on("close", () => {
    void closeMongoDBConnection()
})

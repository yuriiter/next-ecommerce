import "module-alias/register"
import express, { type Express } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import initRouters from "@utils/initRouters"
import ExpressError from "@errors/ExpressError"
import accountRouter from "@routers/account.router"
import { PORT } from "@/config"
import { closeMongoDBConnection, connectToMongoDB } from "@/db"
import carRouter from "@routers/car.router"
import { healthRouter } from "@routers/health.router"

const app: Express = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(ExpressError.handleError)

initRouters(app, [carRouter, accountRouter, healthRouter])

app.listen(PORT, () => {
    console.log(`Server is runniung on port ${PORT}`)
    void connectToMongoDB()
})

app.on("close", () => {
    void closeMongoDBConnection()
})

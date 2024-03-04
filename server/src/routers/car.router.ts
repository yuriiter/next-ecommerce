import { type NextFunction, type Request, type Response, Router } from "express"
import authorizationMiddleware from "@middleware/authorization.middleware"
import { type CarsQuery } from "@/types/carsQuery"
import { getCars } from "@services/car.service"
import { buildResponse } from "@utils/utils"

const carRouter = Router()
const initialRouter = Router()

carRouter.get(
    "/",
    authorizationMiddleware("anonymous"),
    (
        req: Request<unknown, unknown, CarsQuery>,
        res: Response,
        next: NextFunction
    ) => {
        void (async () => {
            try {
                const filters = req.query
                const cars = await getCars(filters, req.locals?.user?.email)

                return res.status(200).send(buildResponse(200, cars))
            } catch (err) {
                next(err)
            }
        })()
    }
)

initialRouter.use("/cars", carRouter)

export default initialRouter

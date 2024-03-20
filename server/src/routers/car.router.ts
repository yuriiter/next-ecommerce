import { type NextFunction, type Request, type Response, Router } from "express"
import authorizationMiddleware from "@middleware/authorization.middleware"
import { type CarsQuery } from "@/types/carsQuery"
import {
    getCarById,
    getCars,
    setCarIsInFavourites,
} from "@services/car.service"
import { buildResponse } from "@utils/utils"
import ExpressError from "@errors/ExpressError"

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

carRouter.get(
    "/:carId",
    authorizationMiddleware("anonymous"),
    (req: Request<{ carId: string }>, res: Response, next: NextFunction) => {
        void (async () => {
            try {
                const { carId } = req.params
                if (carId === "undefined" || carId === undefined)
                    throw ExpressError.BAD_REQUEST
                const email = req.locals?.user?.email

                const car = await getCarById(carId, email)

                return res.status(200).send(buildResponse(200, car))
            } catch (err) {
                next(err)
            }
        })()
    }
)

carRouter.put(
    "/:carId/favourites",
    authorizationMiddleware("user"),
    (req: Request<{ carId: string }, { newValue: boolean }>, res, next) => {
        void (async () => {
            try {
                const { carId } = req.params
                const { newValue } = req.body
                const { email } = req.locals.user

                await setCarIsInFavourites(email, carId, newValue)

                return res.status(200).send(buildResponse(200, undefined))
            } catch (err) {
                next(err)
            }
        })()
    }
)

initialRouter.use("/cars", carRouter)

export default initialRouter

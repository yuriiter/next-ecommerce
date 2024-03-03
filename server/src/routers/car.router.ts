import { type NextFunction, type Request, type Response, Router } from "express"
import authorizationMiddleware from "@middleware/authorization.middleware"
import { type carsQuery } from "@typings/carsQuery"
import { getCars } from "@services/car.service"
import { buildResponse } from "@utils/utils"

const carRouter = Router()
const initialRouter = Router()

carRouter.get(
    "/",
    authorizationMiddleware("anonymous"),
    (
        req: Request<unknown, unknown, carsQuery>,
        res: Response,
        next: NextFunction
    ) => {
        void (async () => {
            try {
                const filters = req.query
                const cars = getCars(filters, req.locals.user.email)

                return res.status(200).send(buildResponse(200, cars))
            } catch (err) {
                next(err)
            }
        })()
    }
)

// messageRouter.get(`${routerPath}/:refOrMail`, async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const refOrMail = req.params.refOrMail as Nullable<string>
//         const data = await getUser(refOrMail)
//         return res.send(data)
//
//     } catch (err) {
//         next(err)
//     }
// });

// messageRouter.get(`${routerPath}`, authorizationMiddleware(), async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const refOrMail = req.query.refOrMail as Nullable<string>
//         const password = req.query.password as Nullable<string>
//         const messages = await getUser(refOrMail)
//         return res.send(data)
//
//     } catch (err) {
//         next(err)
//     }
// });

initialRouter.use("/cars", carRouter)

export default initialRouter

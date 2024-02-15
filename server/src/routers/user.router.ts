import { type NextFunction, type Request, type Response, Router } from "express"
import queryValidation from "@middleware/queryValidation.middleware"
import { getUsersQueryParams } from "@schemas/users.schema"

const userRouter = Router()
const initialRouter = Router()

initialRouter.get(
    "/",
    queryValidation(getUsersQueryParams),
    (req: Request, res: Response, next: NextFunction) => {
        void (async () => {
            try {
                const a = "comment" //
            } catch (err) {
                next(err)
            }
        })()
    }
)

userRouter.use("/users", initialRouter)

export default userRouter

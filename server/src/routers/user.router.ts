import { type NextFunction, type Request, type Response, Router } from "express"
import { type CreateUserSchema, createUserSchema } from "@schemas/users.schema"
import validateBody from "@middleware/bodyValidation.middleware"
import { createUser, getUserByEmail } from "@services/user.service"

const userRouter = Router()
const initialRouter = Router()

initialRouter.get(
    "/:email",
    (req: Request<{ email: string }>, res: Response, next: NextFunction) => {
        void (async () => {
            try {
                const user = await getUserByEmail(req.params.email)
                return res.status(200).json({ data: { user } })
            } catch (err) {
                next(err)
            }
        })()
    }
)

initialRouter.post(
    "/",
    validateBody(createUserSchema),
    (
        req: Request<unknown, unknown, CreateUserSchema>,
        res: Response,
        next: NextFunction
    ) => {
        void (async () => {
            try {
                const newUser = await createUser(req.body)
                return res.status(200).json({ data: { user: newUser } })
            } catch (err) {
                next(err)
            }
        })()
    }
)

userRouter.use("/users", initialRouter)

export default userRouter

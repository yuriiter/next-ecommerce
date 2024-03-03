import { type NextFunction, type Request, type Response, Router } from "express"
import { type CreateUserSchema, createUserSchema } from "@schemas/users.schema"
import validateBody from "@middleware/bodyValidation.middleware"
import { createUser, getUserByEmail } from "@services/user.service"
import { buildResponse } from "@utils/utils"

const userRouter = Router()
const initialRouter = Router()

// Get user by email
initialRouter.get(
    "/:email",
    (req: Request<{ email: string }>, res: Response, next: NextFunction) => {
        void (async () => {
            try {
                const user = await getUserByEmail(req.params.email)
                return res.status(200).json(buildResponse(200, user))
            } catch (err) {
                next(err)
            }
        })()
    }
)

// Create user
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
                return res.status(200).json(buildResponse(200, newUser))
            } catch (err) {
                next(err)
            }
        })()
    }
)

userRouter.use("/users", initialRouter)

export default userRouter

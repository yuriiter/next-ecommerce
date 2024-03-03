import { type NextFunction, type Request, type Response, Router } from "express"
import validateBody from "@middleware/bodyValidation.middleware"
import { getUserByEmail, validateUser } from "@services/user.service"
import authorizationMiddleware from "@middleware/authorization.middleware"
import { buildResponse, createJWT } from "@utils/utils"
import {
    type AuthenticationSchema,
    authenticationSchema,
} from "@schemas/users.schema"

const sessionRouter = Router()
const initialRouter = Router()

// Authorization
initialRouter.get(
    "/",
    authorizationMiddleware("user"),
    (req: Request, res: Response, next: NextFunction) => {
        void (async () => {
            try {
                const user = await getUserByEmail(req.locals.user.email)
                return res.status(200).json(buildResponse(200, user))
            } catch (err) {
                next(err)
            }
        })()
    }
)

// Authentication
initialRouter.post(
    "/",
    validateBody(authenticationSchema),
    (
        req: Request<unknown, unknown, AuthenticationSchema>,
        res: Response,
        next: NextFunction
    ) => {
        void (async () => {
            try {
                const user = await validateUser(
                    req.body.email,
                    req.body.password
                )

                const jwt = createJWT(user.email, "user")
                res.cookie("jwt", jwt, { maxAge: 86400, httpOnly: true })
                return res.status(200).json(buildResponse(200, user))
            } catch (err) {
                next(err)
            }
        })()
    }
)

sessionRouter.use("/session", initialRouter)

export default sessionRouter

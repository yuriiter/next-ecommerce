import { type NextFunction, type Request, type Response, Router } from "express"
import queryValidation from "@middleware/queryValidation.middleware"
import {
    type CreateUserSchema,
    createUserSchema,
    getUsersQueryParams,
    authenticationSchema,
    AuthenticationSchema,
} from "@schemas/users.schema"
import validateBody from "@middleware/bodyValidation.middleware"
import {
    createUser,
    getUserByEmail,
    validateUser,
} from "@services/user.service"
import authorizationMiddleware from "@middleware/authorization.middleware"
import { buildResponse, createJWT, createJWT } from "@utils/utils"

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
                return res.status(200).json(buildResponse(200, undefined, user))
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
                const user = await validateUser(...req.body)
                if (!user) throw ExpressError.UNAUTHORIZED

                const jwt = createJWT(user.email)
                res.cookie("jwt", jwt, { maxAge: 900000, httpOnly: true })
                return res.status(200).json(buildResponse(200, undefined, user))
            } catch (err) {
                next(err)
            }
        })()
    }
)

sessionRouter.use("/session", initialRouter)

export default sessionRouter

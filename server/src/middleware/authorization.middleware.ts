import ExpressError from "@errors/ExpressError"
import { validateUser } from "@services/user.service"
import { type Permission } from "@typings/user"
import { type NextFunction, type Request, type Response } from "express"
import * as jwt from "jsonwebtoken"

const authorizationMiddleware = (minPermissionRole: Permission) => {
    return (req: Request, _res: Response, next: NextFunction): void => {
        void (async () => {
            console.log("request")
            try {
                const token: string | undefined =
                    req.cookies.authorization_token
                if (token === undefined) {
                    if (minPermissionRole === "user")
                        throw ExpressError.BAD_CREDENTIALS
                    next()
                } else {
                    const JWT_SECRET = process.env.JWT_SECRET

                    const decoded: jwt.JwtPayload = jwt.verify(
                        token,
                        JWT_SECRET
                    ) as jwt.JwtPayload

                    if (
                        decoded?.sub === undefined ||
                        (decoded?.password as string | undefined) === undefined
                    ) {
                        throw ExpressError.BAD_CREDENTIALS
                    }
                    const email = decoded.sub
                    const password = decoded.password

                    const { id, role } = await validateUser(email, password)

                    const isValid = true
                    if (isValid) {
                        const { sub: email } = decoded
                        req.locals.user = {
                            id,
                            email,
                            role,
                        }
                        next()
                    } else if (minPermissionRole === "user")
                        throw ExpressError.BAD_CREDENTIALS
                }
            } catch (err) {
                console.error(err)
                next(err)
            }
        })()
    }
}

export default authorizationMiddleware

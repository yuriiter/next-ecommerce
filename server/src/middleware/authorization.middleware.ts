import { getUserByEmail } from "@services/user.service"
import { type Permission } from "@typings/user"
import { verifyJWT } from "@utils/utils"
import { type NextFunction, type Request, type Response } from "express"

const authorizationMiddleware = (minPermissionRole: Permission) => {
    return (req: Request, _res: Response, next: NextFunction): void => {
        void (async () => {
            try {
                const token: string | undefined =
                    req.cookies.authorization_token
                if (token === undefined) {
                    if (minPermissionRole === "user")
                        // TODO: CREATE EXPRESSERROR CLASS
                        // throw ExpressError.BAD_CREDENTIALS
                        throw new Error("Not authorized")
                    next()
                } else {
                    const decoded = verifyJWT(token)

                    if (
                        typeof decoded !== "string" &&
                        typeof decoded?.sub !== "string"
                    ) {
                        // throw ExpressError.BAD_CREDENTIALS
                        throw new Error("Not authorized")
                    }
                    const email = decoded.sub

                    const user = await getUserByEmail(email)
                    if (user) {
                        const { email, fullName } = user
                        req.locals.user = {
                            email,
                            fullName,
                        }
                        next()
                    } else if (minPermissionRole === "user")
                        // throw ExpressError.BAD_CREDENTIALS
                        throw new Error("Not authorized")
                }
            } catch (err) {
                console.error(err)
                next(err)
            }
        })()
    }
}

export default authorizationMiddleware

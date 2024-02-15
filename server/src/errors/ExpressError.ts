import { type NextFunction, type Request, type Response } from "express"

export default class ExpressError extends Error {
    public statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
    }

    public static handleError(
        err: ExpressError | Error,
        req: Request,
        res: Response,
        next: NextFunction
    ): void {
        let message: string, statusCode: number
        if (err instanceof ExpressError) {
            message = err.message

            statusCode = err.statusCode
        } else {
            message = "Internal server error"
            statusCode = 500
        }
        res.status(statusCode).json({
            error: {
                statusCode,
                message,
            },
        })
    }

    public static NOT_FOUND = new ExpressError("Not found", 404)

    public static INTERNAL_SERVER_ERROR = new ExpressError(
        "Internal server error",
        500
    )

    public static BAD_REQUEST = new ExpressError("Bad request", 400)

    public static BAD_CREDENTIALS = new ExpressError("Bad credentials", 401)
}

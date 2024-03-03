import { codeToMessage } from "@/code"
import { buildResponse } from "@utils/utils"
import { type NextFunction, type Request, type Response } from "express"

export default class ExpressError extends Error {
    public statusCode: number
    public message: string

    constructor(statusCode: number, customMessage?: string) {
        super(customMessage ?? codeToMessage[statusCode])
        this.message = customMessage ?? codeToMessage[statusCode]
        this.statusCode = statusCode
    }

    public static handleError(
        err: ExpressError | Error,
        req: Request,
        res: Response,
        next: NextFunction
    ): void {
        let statusCode: number, message: string
        if (err instanceof ExpressError) {
            message = err.message
            statusCode = err.statusCode
        } else statusCode = 500
        if (statusCode >= 500)
            console.log(`${new Date().toUTCString()} ${message}`)

        res.status(statusCode).json(
            buildResponse(statusCode, undefined, message)
        )
    }

    public static NOT_FOUND = new ExpressError(404)

    public static INTERNAL_SERVER_ERROR = new ExpressError(500)

    public static BAD_REQUEST = new ExpressError(400)

    public static BAD_CREDENTIALS = new ExpressError(401)
}

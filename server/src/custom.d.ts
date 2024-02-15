import { type ReqLocalUser } from "@typings/user"

declare module "express" {
    interface Request {
        locals: { user: ReqLocalUser }
    }
}

export {}

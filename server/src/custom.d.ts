import { type ReqLocalUser } from "@/types/user"

declare module "express" {
    interface Request {
        locals: { user: ReqLocalUser }
    }
}

export {}

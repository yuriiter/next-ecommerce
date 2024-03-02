import { z } from "zod"
import { passwordSchema } from "./utils.schema"

export const createUserSchema = z.object({
    email: z.string().email(),
    fullName: z.string().min(1).max(50),
    password: passwordSchema,
    avatar: z.string().optional(),
})

export const authenticationSchema = z.object({
    email: z.string().email(),
    password: passwordSchema,
})

export type CreateUserSchema = z.infer<typeof createUserSchema>
export type AuthenticationSchema = z.infer<typeof authenticationSchema>

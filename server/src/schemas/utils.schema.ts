import { z } from "zod"

export const passwordSchema = z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one capital letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
        /^[a-zA-Z0-9]*$/,
        "Password must contain only Latin letters, numbers, and symbols"
    )

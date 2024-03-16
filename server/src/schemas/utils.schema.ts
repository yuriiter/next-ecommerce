import { z } from "zod"

export const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+]).*$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
    )

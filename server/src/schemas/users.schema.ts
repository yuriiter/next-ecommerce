import { z } from "zod"

export const getUsersQueryParams = z.object({
    country: z.optional(z.string().nonempty()),
    ageFrom: z.optional(z.string().regex(/^\d+$/).transform(Number)),
    ageTo: z.optional(z.string().regex(/^\d+$/).transform(Number)),
    refOrMail: z.optional(
        z.union([z.string().email(), z.string().regex(/\d{6}/)])
    ),
})

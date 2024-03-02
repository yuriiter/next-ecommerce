// import { countries, hobbies, languages, sex } from "../data"
import { z } from "zod"

export const authorizationDto = z.object({
    refOrMail: z
        .string()
        .regex(/^\d{7}$/)
        .transform(Number),
    password: z.string().max(20),
})

// export const signUpDto = z.object({
//     sex: z.enum(sex), // Sexe
//     yearOfBirth: z.string().regex(/^\d{4}$/), // Annee_Nais
//     firstName: z.string().max(20).nonempty(), // Prenom
//     country: z.enum(Object.keys(countries) as [string, ...string[]]), // Pays
//     languages: z.array(z.enum(Object.keys(languages) as [string, ...string[]])), // Langues[]
//     hobbies: z.array(z.enum(Object.keys(hobbies) as [string, ...string[]])),
//     description: z.string().max(250), // Remarques
//     password: z.string().max(20).min(7), // Password, PasswordBis
//     // avatar: z.optional(z.instanceof(File)) // IMG
// })

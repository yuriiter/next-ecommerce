// src/services/user.service.ts
import { hashPassword, validateHash } from "@utils/utils"
import { User } from "@entities/User"
import { type CreateUserSchema } from "@schemas/users.schema"
import ExpressError from "@errors/ExpressError"
import { getEntityManager } from "@/mikro-orm.config"

export const validateUser = async (email: string, password: string) => {
    const em = getEntityManager()
    const user = await em.findOne(User, { email }, [
        "email",
        "fullName",
        "passwordHash",
    ])
    if (!user) return null
    const isPasswordValid = await validateHash(password, user.passwordHash)
    if (!isPasswordValid) return null
    const userAsObject = user.toObject()
    delete userAsObject.passwordHash

    return userAsObject
}

export const createUser = async (userData: CreateUserSchema) => {
    try {
        const em = getEntityManager()
        const { password, ...rest } = userData
        const passwordHash = await hashPassword(password)
        const newUser = em.create(User, { ...rest, passwordHash })
        await em.persistAndFlush(newUser)
        const newUserAsObject = newUser.toObject()
        delete newUserAsObject.passwordHash
        delete newUserAsObject.favouriteCars
        return newUserAsObject
    } catch (err) {
        if (err.code === "ER_DUP_ENTRY")
            throw new ExpressError(409, "User already exists")
        else throw err
    }
}

export const getUserByEmail = async (email: string) => {
    const em = getEntityManager()
    const user = await em.findOne(User, { email }, ["email", "fullName"])
    if (!user) return null
    return user.toObject()
}

export const getMe = async (email: string) => {
    const me = await getUserByEmail(email)
    if (!me) throw ExpressError.BAD_CREDENTIALS
    return me
}

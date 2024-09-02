import ExpressError from "@errors/ExpressError"
import { User } from "@models/index"
import { type CreateUserSchema } from "@schemas/users.schema"
import { hashPassword, validateHash } from "@utils/utils"

export const validateUser = async (email: string, password: string) => {
    const user = await User.findOne({
        where: { email },
        attributes: ["email", "passwordHash"],
    })
    if (!user) return null

    const isPasswordValid = validateHash(password, user.passwordHash)
    if (!isPasswordValid) return null

    const userAsObject = user.get({ plain: true })
    delete userAsObject.passwordHash

    return userAsObject
}

export const createUser = async (userData: CreateUserSchema) => {
    try {
        const { password, ...rest } = userData
        const passwordHash = await hashPassword(password)
        const newUser = await User.create({ ...rest, passwordHash })

        const newUserAsObject = newUser.get({ plain: true })
        delete newUserAsObject.passwordHash
        return newUserAsObject
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError")
            throw new ExpressError(409, "User already exists")
        else throw err
    }
}

export const getUserByEmail = async (email: string) => {
    const user = await User.findOne({
        where: { email },
        attributes: ["email", "fullName"],
    })

    if (!user) return null

    return user.get({ plain: true })
}

export const getMe = async (email: string) => {
    const me = await getUserByEmail(email)
    if (!me) throw new ExpressError(401, "Bad credentials")
    return me
}

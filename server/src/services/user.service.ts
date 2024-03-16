import { hashPassword, validateHash } from "@utils/utils"
import { UserModel } from "@models/index"
import { type CreateUserSchema } from "@schemas/users.schema"
import ExpressError from "@errors/ExpressError"

export const validateUser = async (email: string, password: string) => {
    const user = await UserModel.findOne({
        email,
    })
    const isPasswordValid = validateHash(password, user?.passwordHash)
    if (!isPasswordValid) return null
    const userAsObject = user.toObject()

    delete userAsObject.passwordHash
    delete userAsObject.favouriteCars

    return user
}

export const createUser = async (userData: CreateUserSchema) => {
    try {
        const { password, ...rest } = userData
        const passwordHash = await hashPassword(password)
        const newUser = new UserModel({ ...rest, passwordHash })
        await newUser.save()
        const newUserAsObject = newUser.toObject()
        delete newUserAsObject.passwordHash
        return newUserAsObject
    } catch (err) {
        if (err.code === 11000)
            throw new ExpressError(409, "User already exists")
        else throw err
    }
}

export const getUserByEmail = async (email: string) => {
    const user = await UserModel.findOne({ email })
    const userAsObject = user.toObject()

    delete userAsObject.passwordHash
    delete userAsObject.favouriteCars

    return userAsObject
}

export const getMe = async (email: string) => {
    const me = await getUserByEmail(email)
    if (!me) throw ExpressError.BAD_CREDENTIALS
    return me
}

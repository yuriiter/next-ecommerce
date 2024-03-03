import { codeToMessage } from "@/code"
import { JWT_EXPIRES, JWT_SECRET } from "@/config"
import { type Permission } from "@typings/user"
import argon2 from "argon2"
import jwt, { type JwtPayload } from "jsonwebtoken"

export const hashPassword = async (password: string): Promise<string> => {
    try {
        const hash = await argon2.hash(password)
        return hash
    } catch (error) {
        throw new Error(error as string)
    }
}

export const buildResponse = <T>(
    statusCode: number,
    data?: T | undefined,
    message?: string | undefined
) => ({
    statusCode,
    message: message ?? codeToMessage[statusCode],
    data,
})

export const createJWT = (email: string, permission: Permission) =>
    jwt.sign({ email, permission }, JWT_SECRET, { expiresIn: JWT_EXPIRES })

export const verifyJWT = (token: string): Promise<string | JwtPayload> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(err)
            } else {
                resolve(decoded)
            }
        })
    })
}

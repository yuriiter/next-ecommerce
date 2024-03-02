import { codeToMessage } from "@/code"
import { JWT_EXPIRES, JWT_SECRET } from "@/config"
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
    message?: string | undefined,
    data?: T | undefined
) => ({
    status: codeToMessage[statusCode],
    message,
    data,
})

export const createJWT = (email: string) =>
    jwt.sign({ email }, JWT_SECRET, { expiresIn: JWT_EXPIRES })

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

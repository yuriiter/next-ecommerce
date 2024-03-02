export interface User {
    firstName: string
    lastName: string
    passwordHash: string
    email: string
    avatar?: string
    description?: string
    country?: string
    lastModifyDate?: Date
}

export interface SignUpDtoType {
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: Express.Multer.File
}

export type Permission = "anonymous" | "user"

export interface ReqLocalUser {
    email: string | undefined
    fullName: string | undefined
}

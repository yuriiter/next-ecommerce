import { hashPassword } from "@utils/utils"
import { getUserByEmailAndPasswordHashQuery } from "@/db/queries"

export const validateUser = async (email: string, password: string) => {
    const userResult = await getUserByEmailAndPasswordHashQuery([
        email,
        await hashPassword(password),
    ])

    if (userResult.rowCount !== 1)
        return { id: undefined, email: undefined, role: undefined }

    return userResult.rows[0]
}

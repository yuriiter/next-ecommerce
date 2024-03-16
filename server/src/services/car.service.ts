import { CarModel, UserModel } from "@models/index"
import { type CarsQuery } from "@/types/carsQuery"
import { buildCarQuery } from "@utils/buildCarsQuery"
import { getDocumentsAndCount } from "@utils/utils"
import ExpressError from "@errors/ExpressError"

export const getCars = async (query: CarsQuery, email?: string) => {
    const finalQuery = buildCarQuery(query)

    const { page = 0, pageSize = 8 } = query

    if (query.favourites && !email) throw ExpressError.BAD_CREDENTIALS
    if (email && query.favourites) {
        const user = await UserModel.findOne({ email })
        if (!user)
            throw new ExpressError(
                500,
                "Authenticated user doesn't have an account"
            )
        const favouriteCarsIds = user.favouriteCars.map(({ _id }) => _id)
        finalQuery.$and.push({ _id: { $in: favouriteCarsIds } })
    }

    const [cars, count] = await getDocumentsAndCount(
        CarModel,
        finalQuery,
        page * pageSize,
        pageSize
    )

    return { documents: cars, count }
}

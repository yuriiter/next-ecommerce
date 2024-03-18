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
        finalQuery.$and.push({ _id: { $in: user.favouriteCars } })
    }

    const [cars, count] = await getDocumentsAndCount(
        CarModel,
        finalQuery,
        page * pageSize,
        pageSize
    )

    const processedCars = cars.map((car) => ({
        ...car,
        isInFavourites: email
            ? car.isFavouriteForUsers.some((likingUser) => likingUser === email)
            : false,
    }))

    return { documents: processedCars, count }
}

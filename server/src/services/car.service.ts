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
            ? car.isFavouriteForUsers?.some(
                  (likingUser) => likingUser === email
              )
            : false,
        rating:
            car.reviews?.reduce(
                (sum, review) => sum + (review as any).rating,
                0
            ) / (car.reviews?.length || 1),
    }))

    return { documents: processedCars, count }
}

export const setCarIsInFavourites = async (
    email: string,
    carId: string,
    newValue: boolean
) => {
    const car = await CarModel.findById(carId)
    if (!car) throw ExpressError.BAD_REQUEST
    const user = await UserModel.findOne({ email })
    if (!user) throw ExpressError.BAD_REQUEST

    const carIsFavouriteForUsers = car.isFavouriteForUsers
    const userFavouriteCars = user.favouriteCars

    let newCarIsFavouriteForUsers = new Set(carIsFavouriteForUsers)
    let newUserFavouriteCars = new Set(userFavouriteCars)

    if (newValue === false) {
        newCarIsFavouriteForUsers.delete(email)
        newUserFavouriteCars.delete(carId)
    } else {
        newCarIsFavouriteForUsers.add(email)
        newUserFavouriteCars.add(carId)
    }

    car.isFavouriteForUsers = [...newCarIsFavouriteForUsers]
    user.favouriteCars = [...newUserFavouriteCars]

    car.save()
    user.save()
}

export const getCarById = async (carId: string, email: string | undefined) => {
    let car = await CarModel.findById(carId).populate({
        path: "reviews",
        populate: { path: "user" },
    })
    if (!car) throw ExpressError.NOT_FOUND
    car = car.toObject()

    const processedCar = {
        ...car,
        isInFavourites: email
            ? car.isFavouriteForUsers.some((likingUser) => likingUser === email)
            : false,
        rating:
            car.reviews.reduce(
                (sum, review) => sum + (review as any).rating,
                0
            ) / (car.reviews.length || 1),
    }

    delete processedCar.isFavouriteForUsers

    return processedCar
}

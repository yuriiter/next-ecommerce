import { CarModel, UserModel } from "@models/index"
import { type CarsQuery } from "@/types/carsQuery"
import { buildCarQuery } from "@utils/buildCarsQuery"
import { getDocumentsAndCount } from "@utils/utils"
import ExpressError from "@errors/ExpressError"
import { ObjectId } from "mongoose"

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
    const user = await UserModel.findOne({ email })

    const carIsFavouriteForUsers = car.isFavouriteForUsers
    const userFavouriteCars = user.favouriteCars

    let newCarIsFavouriteForUsers = new Set(carIsFavouriteForUsers)
    let newUserFavouriteCars = new Set(userFavouriteCars)

    if (newValue === false) {
        newCarIsFavouriteForUsers.delete(email)
        newUserFavouriteCars.delete(carId as any as ObjectId)
    } else {
        newCarIsFavouriteForUsers.add(email)
        newUserFavouriteCars.add(carId as any as ObjectId)
    }

    car.isFavouriteForUsers = [...newCarIsFavouriteForUsers]
    user.favouriteCars = [...newUserFavouriteCars]

    car.save()
    user.save()
}

export const getCarById = async (carId: string, email: string | undefined) => {
    const car = await CarModel.findById(carId)

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

    return processedCar.toObject()
}

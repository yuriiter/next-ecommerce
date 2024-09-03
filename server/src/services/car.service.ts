// src/services/car.service.ts
import { Car } from "@entities/Car"
import { User } from "@entities/User"
import { type CarsQuery } from "@/types/carsQuery"
import { buildCarQuery } from "@utils/buildCarsQuery"
import ExpressError from "@errors/ExpressError"
import { getEntityManager } from "@/mikro-orm.config"

export const getCars = async (query: CarsQuery, email?: string) => {
    const em = getEntityManager()
    const finalQuery = buildCarQuery(query)

    const { page = 0, pageSize = 8 } = query

    if (query.favourites && !email) throw ExpressError.BAD_CREDENTIALS
    if (email && query.favourites) {
        const user = await em.findOne(User, { email })
        if (!user)
            throw new ExpressError(
                500,
                "Authenticated user doesn't have an account"
            )
        finalQuery.$and.push({ id: { $in: user.favouriteCars } })
    }

    const [cars, count] = await em.findAndCount(Car, finalQuery, {
        limit: pageSize,
        offset: page * pageSize,
    })

    const processedCars = cars.map((car) => ({
        ...car,
        isInFavourites: email ? car.isFavouriteForUsers.includes(email) : false,
        rating: car.reviews.length
            ? car.reviews.reduce((sum, review) => sum + review.rating, 0) /
              car.reviews.length
            : 0,
        isFavouriteForUsers: undefined,
    }))

    return { documents: processedCars, count }
}

export const setCarIsInFavourites = async (
    email: string,
    carId: number,
    newValue: boolean
) => {
    const em = getEntityManager()
    const car = await em.findOne(Car, carId)
    if (!car) throw ExpressError.BAD_REQUEST
    const user = await em.findOne(User, { email })
    if (!user) throw ExpressError.BAD_REQUEST

    const carIsFavouriteForUsers = new Set(car.isFavouriteForUsers)
    const userFavouriteCars = new Set(user.favouriteCars)

    if (!newValue) {
        carIsFavouriteForUsers.delete(email)
        userFavouriteCars.delete(carId)
    } else {
        carIsFavouriteForUsers.add(email)
        userFavouriteCars.add(carId)
    }

    car.isFavouriteForUsers = [...carIsFavouriteForUsers]
    user.favouriteCars = [...userFavouriteCars]

    await em.persistAndFlush(car)
    await em.persistAndFlush(user)
}

export const getCarById = async (carId: number, email: string | undefined) => {
    const em = getEntityManager()
    const car = await em.findOne(Car, carId, { populate: ["reviews"] })
    if (!car) throw ExpressError.NOT_FOUND

    const processedCar = {
        ...car,
        isInFavourites: email ? car.isFavouriteForUsers.includes(email) : false,
        rating: car.reviews.length
            ? car.reviews.reduce((sum, review) => sum + review.rating, 0) /
              car.reviews.length
            : 0,
    }

    delete processedCar.isFavouriteForUsers

    return processedCar
}

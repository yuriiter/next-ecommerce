import { type CarsQuery } from "@/types/carsQuery"
import ExpressError from "@errors/ExpressError"
import Review, { Car, User } from "@models/index"
import { buildCarQuery } from "@utils/buildCarsQuery"

export const getCars = async (query: CarsQuery, email?: string) => {
    const { page = 0, pageSize = 8 } = query
    const where = buildCarQuery(query)

    if (query.favourites && !email) throw ExpressError.BAD_CREDENTIALS
    if (email && query.favourites) {
        const user = await User.findOne({ where: { email } })
        if (!user)
            throw new ExpressError(
                500,
                "Authenticated user doesn't have an account"
            )

        const favourites = await user.getFavourites()
        where.id = favourites.map((car) => car.id)
    }

    const { rows: cars, count } = await Car.findAndCountAll({
        where,
        offset: page * pageSize,
        limit: pageSize,
    })

    const processedCars = cars.map((car) => ({
        ...car.get({ plain: true }),
        isInFavourites: email
            ? car.likedBy.some((user) => user.email === email)
            : undefined,
    }))

    return {
        cars: processedCars,
        totalPages: Math.ceil(count / pageSize),
    }
}

export const setCarIsInFavourites = async (
    email: string,
    carId: string,
    newValue: boolean
) => {
    const car = await Car.findByPk(carId)
    if (!car) throw ExpressError.BAD_REQUEST

    const user = await User.findOne({ where: { email } })
    if (!user) throw ExpressError.BAD_REQUEST

    if (newValue === false) {
        await user.removeFavouriteCar(car)
    } else {
        await user.addFavouriteCar(car)
    }
}

export const getCarById = async (carId: string, email: string | undefined) => {
    const car = await Car.findByPk(carId, {
        include: [
            {
                model: Review,
                include: [{ model: User, as: "user" }],
            },
        ],
    })
    if (!car) throw new ExpressError(404, "Car not found")

    const carAsObject = car.get({ plain: true })

    let isInFavourites = false
    if (email) {
        const user = await User.findOne({ where: { email } })
        if (user) {
            isInFavourites = await user.hasFavouriteCar(car) // Use the correct alias
        }
    }

    const rating =
        car.reviews.reduce((sum, review) => sum + review.rating, 0) /
        (car.reviews.length || 1)

    return {
        ...carAsObject,
        isInFavourites,
        rating,
    }
}

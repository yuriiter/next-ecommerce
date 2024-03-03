import { CarModel } from "@models/index"
import { type carsQuery } from "@types/carsQuery"
import { buildCarQuery } from "@utils/buildCarsQuery"

export const getCars = async (query: carsQuery, userEmail?: string) => {
    const finalQuery = buildCarQuery(query)

    const { page = 0, pageSize = 8 } = query

    const cars = await CarModel.find(finalQuery)
        .skip((page - 1) * pageSize)
        .limit(pageSize)

    return cars
}

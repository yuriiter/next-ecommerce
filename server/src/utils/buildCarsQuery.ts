import { type CarsQuery } from "@types/carsQuery"

export const buildCarQuery = (query: CarsQuery) => {
    const {
        typeSport,
        typeSUV,
        typeMPV,
        typeSedan,
        typeCoupe,
        typeHatchback,
        capacity2,
        capacity4,
        capacity6,
        capacity8,
        price,
        search,
    } = query

    const conditions = []

    const carTypeConditions = []
    if (typeSport) carTypeConditions.push({ carType: "Sport" })
    if (typeSUV) carTypeConditions.push({ carType: "SUV" })
    if (typeMPV) carTypeConditions.push({ carType: "MPV" })
    if (typeSedan) carTypeConditions.push({ carType: "Sedan" })
    if (typeCoupe) carTypeConditions.push({ carType: "Coupe" })
    if (typeHatchback) carTypeConditions.push({ carType: "Hatchback" })

    if (carTypeConditions.length > 0) {
        conditions.push({ $or: carTypeConditions })
    }

    const capacityConditions = []
    if (capacity2) capacityConditions.push({ peopleCapacity: 2 })
    if (capacity4) capacityConditions.push({ peopleCapacity: 4 })
    if (capacity6) capacityConditions.push({ peopleCapacity: 6 })
    if (capacity8) capacityConditions.push({ peopleCapacity: 8 })

    if (capacityConditions.length > 0) {
        conditions.push({ $or: capacityConditions })
    }

    if (price !== undefined) {
        conditions.push({ price: { $lte: price } })
    }

    if (search) {
        conditions.push({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ],
        })
    }

    const finalQuery = conditions.length > 0 ? { $and: conditions } : {}

    return finalQuery
}

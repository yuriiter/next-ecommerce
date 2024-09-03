// src/utils/buildCarQuery.ts
import { type CarsQuery } from "../types/carsQuery"
import { setTimeOfDate } from "./time" // Assuming this function adjusts date/time

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
        recommendedFlag,
        popularFlag,
        pickUpLocation,
        pickUpDate,
        pickUpTime,
        dropOffLocation,
        dropOffDate,
        dropOffTime,
    } = query

    const whereConditions: any = {}

    // Car type conditions
    const carTypes: string[] = []
    if (typeSport) carTypes.push("sport")
    if (typeSUV) carTypes.push("SUV")
    if (typeMPV) carTypes.push("MPV")
    if (typeSedan) carTypes.push("sedan")
    if (typeCoupe) carTypes.push("coupe")
    if (typeHatchback) carTypes.push("hatchback")
    if (carTypes.length > 0) {
        whereConditions.carType = { $in: carTypes }
    }

    // Capacity conditions
    const capacities: number[] = []
    if (capacity2) capacities.push(2)
    if (capacity4) capacities.push(4)
    if (capacity6) capacities.push(6)
    if (capacity8) capacities.push(8)
    if (capacities.length > 0) {
        whereConditions.peopleCapacity = { $in: capacities }
    }

    // Price condition
    if (price !== undefined) {
        whereConditions.price = { $lte: price }
    }

    // Search condition
    if (search) {
        whereConditions.$or = [
            { title: { $ilike: `%${search}%` } },
            { description: { $ilike: `%${search}%` } },
        ]
    }

    // Flags conditions
    if (recommendedFlag) whereConditions.recommendedFlag = true
    if (popularFlag) whereConditions.popularFlag = true

    // Rental data conditions
    if (pickUpLocation && pickUpDate && dropOffLocation && dropOffDate) {
        const pickUpDateTime = setTimeOfDate(pickUpDate, pickUpTime)
        const dropOffDateTime = setTimeOfDate(dropOffDate, dropOffTime)

        whereConditions.$or = [
            { "rentalData.pickUpDateTime": { $gte: dropOffDateTime } },
            { "rentalData.dropOffDateTime": { $lte: pickUpDateTime } },
            { rentalData: { $exists: false } },
        ]
    }

    return whereConditions
}

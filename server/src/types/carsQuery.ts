import { type SortFilter } from "./sortFilter"
import { type AllOrNothing } from "./utils"

export type CarsQuery = SortFilter & {
    typeSport?: boolean
    typeSUV?: boolean
    typeMPV?: boolean
    typeSedan?: boolean
    typeCoupe?: boolean
    typeHatchback?: boolean
    capacity2?: boolean
    capacity4?: boolean
    capacity6?: boolean
    capacity8?: boolean
    price?: number
    search?: string
    favourites?: boolean
    popularFlag?: boolean
    recommendedFlag?: boolean
} & AllOrNothing<{
        pickUpLocation: string
        pickUpDate: string
        pickUpTime: string
        dropOffLocation: string
        dropOffDate: string
        dropOffTime: string
    }>

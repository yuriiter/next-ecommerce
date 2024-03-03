import { type sortFilter } from "./sortFilter"

export type carsQuery = sortFilter & {
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
}

import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } from "@/config"

export const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/test?retryWrites=true&w=majority`

export const carFiltersQuery = [
    {
        key: "carType",
        filters: [
            "typeSport",
            "typeSUV",
            "typeMPV",
            "typeSedan",
            "typeCoupe",
            "typeHatchback",
        ],
    },
    {
        key: "peopleCapacity",
        filters: ["capacity2", "capacity4", "capacity6", "capacity8"],
    },
    { key: "price", filters: ["price"] },
]

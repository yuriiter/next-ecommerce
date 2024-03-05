import { CarModel, UserModel } from "@models/index"
import { type CarsQuery } from "@/types/carsQuery"
import { buildCarQuery } from "@utils/buildCarsQuery"
import { getDocumentsAndCount } from "@utils/utils"

export const getCars = async (query: CarsQuery, userEmail?: string) => {
    const finalQuery = buildCarQuery(query)

    const { page = 0, pageSize = 8 } = query

    if (userEmail && query.favourites) {
        const user = await UserModel.findOne({ userEmail })
        const favouriteCarsIds = user.favouriteCars.map(({ _id }) => _id)
        finalQuery.$and.push({ _id: { $in: favouriteCarsIds } })
    }

    const [cars, count] = await getDocumentsAndCount(
        CarModel,
        finalQuery,
        page * pageSize,
        pageSize
    )

    return { documents: cars, count }
}

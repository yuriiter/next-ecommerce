import {
    Entity,
    PrimaryKey,
    Property,
    Collection,
    OneToMany,
} from "@mikro-orm/core"
import { RentalData } from "./RentalData"
import { Review } from "./Review"
import { Photo } from "./Photo"

@Entity()
export class Car {
    @PrimaryKey()
    id!: number

    @Property()
    name!: string

    @Property()
    title!: string

    @Property()
    subtitle!: string

    @Property()
    carType!: string

    @Property()
    fuelCapacity!: number

    @Property()
    peopleCapacity!: number

    @Property()
    isManual!: boolean

    @Property()
    price!: number

    @Property({ nullable: true })
    previousPrice?: number

    @Property()
    recommendedFlag!: boolean

    @Property()
    popularFlag!: boolean

    @Property()
    thumbnailName!: string

    @Property()
    thumbnailDesc!: string

    @Property()
    thumbnailImg!: string

    @Property()
    description!: string

    @Property()
    rating!: number

    @Property()
    numOfVotes!: number

    @Property({ type: "json" })
    isFavouriteForUsers!: string[]

    @OneToMany(() => RentalData, (rentalData) => rentalData.car)
    rentalData = new Collection<RentalData>(this)

    @OneToMany(() => Photo, (photo) => photo.car)
    photos = new Collection<Photo>(this)

    @OneToMany(() => Review, (review) => review.car)
    reviews = new Collection<Review>(this)
}

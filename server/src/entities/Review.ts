import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core"
import { User } from "./User"
import { Car } from "./Car"

@Entity()
export class Review {
    @PrimaryKey()
    id!: number

    @ManyToOne(() => User)
    user!: User

    @ManyToOne(() => Car)
    car!: Car

    @Property()
    caption!: string

    @Property()
    date!: Date

    @Property()
    rating!: number

    @Property()
    comment!: string
}

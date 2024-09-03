import {
    Entity,
    PrimaryKey,
    Property,
    Collection,
    ManyToMany,
} from "@mikro-orm/core"
import { Car } from "./Car"

@Entity()
export class User {
    @PrimaryKey()
    id!: number

    @Property()
    email!: string

    @Property({ nullable: true })
    avatar?: string

    @Property()
    fullName!: string

    @Property()
    passwordHash!: string

    @Property()
    permission!: string // Consider using an enum for permissions

    @Property({ type: "json" })
    favouriteCars!: number[] // Array of car IDs

    @ManyToMany(() => Car, (car) => car.isFavouriteForUsers)
    cars = new Collection<Car>(this)
}

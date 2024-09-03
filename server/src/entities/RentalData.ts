import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core"
import { Car } from "./Car"

@Entity()
export class RentalData {
    @PrimaryKey()
    id!: number

    @ManyToOne(() => Car)
    car!: Car

    @Property({ nullable: true })
    pickUpLocation?: string

    @Property({ type: "datetime", nullable: true })
    pickUpDateTime?: Date

    @Property({ nullable: true })
    dropOffLocation?: string

    @Property({ type: "datetime", nullable: true })
    dropOffDateTime?: Date

    @Property()
    total!: number
}

import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core"
import { Car } from "./Car"

@Entity()
export class Photo {
    @PrimaryKey()
    id!: number

    @ManyToOne(() => Car)
    car!: Car

    @Property()
    name!: string

    @Property()
    desc!: string

    @Property({ type: "json" })
    img!: {
        data: Buffer
        contentType: string
        url: string
    }
}

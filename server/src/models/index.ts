import { Permission } from "@types/user"
import mongoose, { Schema, type Document } from "mongoose"

export type CarType = "SUV" | "Sport" | "Hatchback" | "Sedan"

export type PickerData = {
    location?: string
    dateTime?: Date
}

export interface RentalData extends Document {
    id: string
    car: CarData
    pickUpData: PickerData | undefined
    dropOffData: PickerData | undefined
    total: number
}

export interface Review extends Document {
    id: string
    avatar: string
    fullName: string
    caption: string
    date: Date
    rating: number
    comment: string
}

export interface CarData extends Document {
    id: string
    name: string
    title: string
    subtitle: string
    carType: CarType
    fuelCapacity: number
    peopleCapacity: number
    isManual: boolean
    price: number
    previousPrice?: number
    isInFavorites: boolean
    thumbnail: string
    photos: string[]
    description: string
    rating: number
    numOfVotes: number
    reviews: Review[]
}

export interface LinkData extends Document {
    href: string
    content: any
}

export interface UserData extends Document {
    email: string
    avatar: string
    fullName: string
    passwordHash: string
    permission: Permission
}

const ReviewSchema = new Schema({
    avatar: String,
    fullName: String,
    caption: String,
    date: Date,
    rating: Number,
    comment: String,
})

const DateTimeLocation = {
    dateTime: Date,
    location: String,
}

const ImageSchema = new Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String,
    },
})

const CarSchema = new Schema({
    name: String,
    title: String,
    subtitle: String,
    carType: String,
    fuelCapacity: Number,
    peopleCapacity: Number,
    isManual: Boolean,
    price: Number,
    previousPrice: Number,
    isInFavorites: Boolean,
    thumbnail: ImageSchema,
    photos: [ImageSchema],
    description: String,
    reviews: [ReviewSchema],
    rentalData: [
        {
            pickUpData: DateTimeLocation,
            dropOffData: DateTimeLocation,
        },
    ],
})

const UserSchema = new Schema({
    email: { type: String, unique: true },
    avatar: String,
    fullName: String,
    passwordHash: String,
    permission: { type: String, enum: ["anonymous", "user", "admin"] },
})

export const ReviewModel = mongoose.model<Review>("Review", ReviewSchema)
export const CarModel = mongoose.model<CarData>("Car", CarSchema)
export const UserModel = mongoose.model<UserData>("User", UserSchema)

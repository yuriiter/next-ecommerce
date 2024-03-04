import { Permission } from "@types/user"
import mongoose, { Schema, type Document } from "mongoose"

export type CarType = "SUV" | "Sport" | "Hatchback" | "Sedan"

export type PickerData = {
    location?: string
    dateTime?: Date
}

export type ImageData = {
    name: string
    desc: string
    img: {
        data?: Buffer
        contentType?: string
        url?: string
    }
}

export interface RentalData extends Document {
    id: string
    car: CarData
    pickUpData: PickerData | undefined
    dropOffData: PickerData | undefined
    total: number
}

export interface Review extends Document {
    user: UserData
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
    thumbnail: ImageData
    photos: ImageData[]
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

export interface NotificationData extends Document {
    id: string
    fromDate: Date
    title: string
    message: string
    url: string
}

const ReviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    caption: String,
    date: Date,
    rating: Number,
    comment: String,
})

const DateTimeLocation = {
    dateTime: Date,
    location: String,
}

const Image = {
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String,
        url: String,
    },
}

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
    thumbnail: Image,
    photos: [Image],
    description: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
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

const NotificationSchema = new Schema({
    fromDate: Date,
    title: String,
    message: String,
    url: String,
})

export const ReviewModel = mongoose.model<Review>("Review", ReviewSchema)
export const CarModel = mongoose.model<CarData>("Car", CarSchema)
export const UserModel = mongoose.model<UserData>("User", UserSchema)
export const NotificationModel = mongoose.model<NotificationData>(
    "Notification",
    NotificationSchema
)

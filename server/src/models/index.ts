import mongoose, { Schema, type Document } from "mongoose"

export type CarType = "SUV" | "sport" | "hatchback" | "sedan"

export interface RentalData extends Document {
    id: string
    car: CarData
    // pickUpData: PickerData | undefined
    // dropOffData: PickerData | undefined
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

const ReviewSchema = new Schema({
    id: String,
    avatar: String,
    fullName: String,
    caption: String,
    date: Date,
    rating: Number,
    comment: String,
})

const CarSchema = new Schema({
    id: String,
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
    thumbnail: String,
    photos: [String],
    description: String,
    reviews: [ReviewSchema],
})

export const ReviewModel = mongoose.model<Review>("Review", ReviewSchema)
export const CarModel = mongoose.model<CarData>("Car", CarSchema)

// CarSchema.virtual('rating').get(function () {
//   if(this.reviews)
//     return this.reviews.reduce((sum, currentReview) => return sum + currentReview.rating) / this.reviews.length
//     return 0
// })

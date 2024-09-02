import { sequelize } from "@/db"
import { DataTypes, Model } from "sequelize"

export class User extends Model {}

User.init(
    {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        permission: {
            type: DataTypes.ENUM("anonymous", "user", "admin"),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
    }
)

export class Car extends Model {}

Car.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carType: {
            type: DataTypes.ENUM("SUV", "Sport", "Hatchback", "Sedan"),
            allowNull: false,
        },
        fuelCapacity: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        peopleCapacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isManual: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        previousPrice: {
            type: DataTypes.FLOAT,
        },
        recommendedFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        popularFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        thumbnail: {
            type: DataTypes.JSON,
        },
        photos: {
            type: DataTypes.JSON,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isFavouriteForUsers: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
    },
    {
        sequelize,
        modelName: "Car",
        tableName: "cars",
    }
)

export class Review extends Model {}

Review.init(
    {
        caption: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Review",
        tableName: "reviews",
    }
)

Review.belongsTo(User, { foreignKey: "userId" })
Review.belongsTo(Car, { foreignKey: "carId" })

export default Review
Car.hasMany(Review, { foreignKey: "carId" })
Review.belongsTo(Car, { foreignKey: "carId" })

User.hasMany(Review, { foreignKey: "userId" })
Review.belongsTo(User, { foreignKey: "userId" })

User.belongsToMany(Car, { through: "UserFavourites", as: "favourites" })
Car.belongsToMany(User, { through: "UserFavourites", as: "likedBy" })

User.belongsToMany(Car, { through: "FavouriteCars", as: "favouriteCars" })

Car.belongsToMany(User, { through: "FavouriteCars", as: "likedByUsers" })

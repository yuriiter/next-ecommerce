CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS AppUser (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isDeleted BOOLEAN,
    avatar TEXT,
    fullName VARCHAR(255),
    email TEXT,
    date DATE,
    passwordHash VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Car (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isDeleted BOOLEAN,
    name VARCHAR(255),
    title VARCHAR(255),
    subtitle VARCHAR(255),
    carType VARCHAR(20),
    fuelCapacity INT,
    peopleCapacity INT,
    isManual BOOLEAN,
    price NUMERIC(10, 2),
    previousPrice NUMERIC(10, 2),
    thumbnail TEXT,
    photos TEXT[],
    description TEXT
);

CREATE TABLE IF NOT EXISTS FavouriteCar (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isDeleted BOOLEAN,
    isInFavourite BOOLEAN,
    carId UUID REFERENCES Car(id),
    userId UUID REFERENCES AppUser(id)
);

CREATE TABLE IF NOT EXISTS Review (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isDeleted BOOLEAN,
    avatar TEXT,
    fullName VARCHAR(255),
    caption TEXT,
    date DATE,
    rating NUMERIC(2, 1),
    comment TEXT,
    carId UUID REFERENCES Car(id),
    userId UUID REFERENCES AppUser(id)
);

CREATE TABLE IF NOT EXISTS Rental (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isDeleted BOOLEAN,
    rentalDate DATE,
    total NUMERIC(10, 2),
    taxes NUMERIC(10, 2),
    carId UUID REFERENCES Car(id),
    userId UUID REFERENCES AppUser(id)
);

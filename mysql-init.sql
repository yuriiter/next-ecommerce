CREATE DATABASE IF NOT EXISTS morentdb;

USE morentdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  avatar VARCHAR(255),
  fullName VARCHAR(255) NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  permission ENUM('user', 'admin') DEFAULT 'user',
  favouriteCars TEXT
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  caption VARCHAR(255),
  date DATETIME,
  rating INT,
  comment TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  carType ENUM('SUV', 'sport', 'hatchback', 'sedan') NOT NULL,
  fuelCapacity INT,
  peopleCapacity INT,
  isManual BOOLEAN,
  price DECIMAL(10, 2),
  previousPrice DECIMAL(10, 2),
  recommendedFlag BOOLEAN,
  popularFlag BOOLEAN,
  isInFavourites BOOLEAN,
  thumbnail TEXT,
  images TEXT,
  carDescription TEXT
);


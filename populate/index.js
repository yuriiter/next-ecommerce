const { join } = require("path");
const dotenv = require("dotenv");
const { existsSync } = require("fs");
const mysql = require("mysql2/promise");

const envFiles = [
  ".env",
  ".env.local",
  `.env.${process.env.NODE_ENV}`,
  `.env.${process.env.NODE_ENV}.local`,
];

envFiles.forEach((envPath) => {
  const fullPath = join(__dirname, "..", envPath);
  if (existsSync(fullPath)) {
    console.log("Env file used: ", fullPath);
    dotenv.config({ path: fullPath, override: true });
  }
});

const {
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
} = process.env;

async function populateDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      database: DB_NAME,
      password: DB_PASSWORD,
      port: DB_PORT,
    });

    console.log("Connected to MySQL database!");

    const carNames = [
      "Toyota Camry", "Honda Civic", "Ford Mustang", "Chevrolet Corvette", "BMW 3 Series",
      "Mercedes-Benz E-Class", "Audi A4", "Tesla Model S", "Volkswagen Golf", "Jeep Wrangler",
      "Lamborghini Aventador", "Ferrari 488", "Porsche 911", "Subaru Outback", "Nissan Altima",
      "Mazda CX-5", "Kia Soul", "Hyundai Sonata", "Lexus RX", "Cadillac Escalade"
    ];

    const subtitles = [
      "Experience the Thrill of the Open Road", "Unleash Your Driving Passion", "Elevate Your Journey",
      "Discover Performance Redefined", "Where Luxury Meets Adventure", "Drive with Confidence and Style",
      "Innovation in Motion", "Efficiency at its Finest", "Explore the Ultimate Driving Experience",
      "Crafted for Excellence", "Redefining the Art of Driving", "Power, Precision, Prestige",
      "Your Road Awaits, Choose Your Companion", "Drive Beyond Boundaries", "Embrace the Future of Mobility",
      "Where Every Journey Begins with Excitement", "Transform Your Commute into an Adventure",
      "Innovation Engineered for You", "Unlock Your Driving Potential", "Dare to Dream, Drive to Achieve"
    ];

    const locations = [
      "New York", "Los Angeles", "Chicago", "Houston", "Philadelphia",
      "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose",
    ];

    const carDescriptions = [
      "Introducing the latest in automotive excellence. Our newest model combines cutting-edge technology, elegant design, and unmatched performance.",
      "Discover the perfect balance of luxury and power with our latest release. Crafted with precision engineering and innovative features, it's a true masterpiece on wheels.",
      "Experience driving like never before with our flagship model. From its sleek exterior to its meticulously crafted interior, every detail is designed to elevate your journey.",
      "Get ready to turn heads with our latest offering. With its bold design, advanced features, and exhilarating performance, it's guaranteed to make every drive unforgettable.",
      "Unleash the full potential of the open road with our newest addition to the lineup. Whether you're navigating city streets or exploring off the beaten path, this car is ready for any adventure.",
      "Drive with confidence knowing you're behind the wheel of the safest, most reliable vehicle on the market. Our latest model sets the standard for safety and performance.",
      "Step into the future of mobility with our cutting-edge electric vehicle. With zero emissions and state-of-the-art technology, it's the perfect blend of sustainability and innovation.",
      "Experience luxury like never before with our flagship sedan. From its premium materials to its advanced features, every aspect of this car is designed to exceed your expectations.",
      "Make a statement with our latest release. With its bold design, powerful engine, and advanced technology, it's a car that commands attention wherever it goes.",
      "Elevate your driving experience with our newest model. From its spacious interior to its dynamic performance, it's a car that's designed to impress.",
      "Discover the ultimate driving machine with our latest offering. With its unparalleled performance, luxurious amenities, and cutting-edge technology, it's a car that's sure to thrill.",
      "Get behind the wheel of our newest model and experience the perfect blend of performance and efficiency. With its innovative hybrid engine, it's a car that's as eco-friendly as it is exhilarating.",
      "Explore the road less traveled with our rugged yet refined SUV. With its powerful engine, advanced off-road capabilities, and spacious interior, it's the perfect companion for your next adventure.",
      "Experience the thrill of driving with our sportiest model yet. With its dynamic handling, powerful engine, and aerodynamic design, it's a car that's built for speed.",
      "Make every drive a luxury experience with our latest sedan. From its premium materials to its advanced technology, it's a car that's designed with your comfort and convenience in mind.",
      "Get ready to take on the urban jungle with our compact yet versatile hatchback. With its nimble handling, efficient engine, and spacious interior, it's the perfect car for city living.",
      "Experience the perfect blend of performance and practicality with our latest crossover. With its spacious interior, advanced features, and smooth ride, it's a car that's ready for anything.",
      "Get behind the wheel of our latest model and experience the future of driving. With its advanced autonomous features and cutting-edge technology, it's a car that's designed to revolutionize the way you travel.",
      "Discover the joy of driving with our newest release. With its responsive handling, powerful engine, and stylish design, it's a car that's sure to put a smile on your face.",
      "Experience the perfect combination of style, performance, and comfort with our latest sedan. From its sleek exterior to its luxurious interior, it's a car that's designed to impress."
    ];

    const userCaptions = [
      "CEO at Amazon", "Travel Enthusiast", "Car Enthusiast", "Adventure Seeker", "Tech Guru",
      "Fashion Icon", "Foodie Extraordinaire", "Fitness Fanatic", "Digital Nomad", "Art Lover",
      "Music Aficionado", "Nature Lover", "Pet Lover", "Gamer", "Movie Buff",
      "Bookworm", "Entrepreneur", "Startup Founder", "Content Creator", "Social Media Influencer"
    ];

    const comments = [
      "This car exceeded my expectations! It's a perfect blend of style and performance.",
      "I love how smooth the ride is. Definitely worth every penny.",
      "The interior design is top-notch. I felt like I was in a luxury hotel.",
      "The handling on this car is incredible. It corners like a dream.",
      "I've never felt safer driving a car. The safety features are impressive.",
      "I can't get enough of the power under the hood. It's a thrill to drive.",
      "The fuel efficiency on this car is impressive. I'm saving so much on gas.",
      "This car turns heads wherever I go. It's a real head-turner.",
      "The technology features are fantastic. It's like driving a spaceship.",
      "I'm amazed by how spacious the interior is. There's plenty of room for everyone.",
      "The sound system is top-of-the-line. I feel like I'm at a concert.",
      "I love the attention to detail in the design. It's clear a lot of thought went into it.",
      "The handling is so smooth, it feels like I'm floating on air.",
      "I've never had a more comfortable drive. It's like sitting in a cloud.",
      "The acceleration on this car is mind-blowing. It's like being shot out of a cannon.",
      "I'm impressed by how easy it is to maneuver, even in tight spaces.",
      "The touchscreen display is intuitive and easy to use. It's like having a personal assistant.",
      "The panoramic sunroof is a game-changer. It brings the outside in.",
      "I feel like I'm driving the future. This car is ahead of its time.",
      "I'm blown away by the attention to detail. Every aspect of this car is thoughtfully designed."
    ];

    const carTypes = ["SUV", "sport", "hatchback", "sedan"];
    const carCapacities = [2, 4, 6, 8];

    await connection.query("DELETE FROM reviews");
    await connection.query("DELETE FROM cars");
    await connection.query("DELETE FROM users");

    const users = [
      {
        email: "demo@morent.com",
        avatar: "https://fakeurl.com/avatar1.png",
        fullName: "John Doe",
        passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$zvs+t/+KhJANqsvnk01iZQ$CxM+vWyc7pd9dprmGsKn0I0xtIUpm8eA8xc9nJv5xKo",
        permission: "user",
        favouriteCars: JSON.stringify([]),
      },
      {
        email: "jane_smith@gmail.com",
        avatar: "https://fakeurl.com/avatar2.png",
        fullName: "Jane Smith",
        passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$eUAUPUr3uZfuA/KKRDhN/A$BP+PvYzSh7f26ZfuUFO+pETIvTGgzrSHpRS/BZT7J94",
        permission: "user",
        favouriteCars: JSON.stringify(["Toyota Camry", "Honda Civic"]),
      }
    ];

    for (const user of users) {
      await connection.query("INSERT INTO users (email, avatar, fullName, passwordHash, permission, favouriteCars) VALUES (?, ?, ?, ?, ?, ?)",
        [user.email, user.avatar, user.fullName, user.passwordHash, user.permission, user.favouriteCars]);
    }

    for (const name of carNames) {
      const car = {
        name,
        subtitle: subtitles[Math.floor(Math.random() * subtitles.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        description: carDescriptions[Math.floor(Math.random() * carDescriptions.length)],
        type: carTypes[Math.floor(Math.random() * carTypes.length)],
        capacity: carCapacities[Math.floor(Math.random() * carCapacities.length)],
      };

      await connection.query("INSERT INTO cars (name, subtitle, location, description, type, capacity) VALUES (?, ?, ?, ?, ?, ?)",
        [car.name, car.subtitle, car.location, car.description, car.type, car.capacity]);
    }

    for (const comment of comments) {
      const review = {
        carId: Math.floor(Math.random() * carNames.length) + 1,
        userId: Math.floor(Math.random() * users.length) + 1,
        rating: Math.floor(Math.random() * 5) + 1,
        comment,
      };

      await connection.query("INSERT INTO reviews (carId, userId, rating, comment) VALUES (?, ?, ?, ?)",
        [review.carId, review.userId, review.rating, review.comment]);
    }

    console.log("Database populated successfully!");

  } catch (error) {
    console.error("Error populating the database:", error);
  } finally {
    process.exit();
  }
}

populateDatabase();

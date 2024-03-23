db = db.getSiblingDB("morentdb");

// db.createCollection("Review");
// db.createCollection("Car");
// db.createCollection("User");

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}

const HOUR = 1000 * 60 * 60
const MIN_DATE = Date.now() - HOUR * 24 * 100
const MAX_DATE = Date.now() + HOUR * 24 * 100
const randomDate = (minDate) => new Date((minDate?.getCurrentTime() ?? MIN_DATE) + MAX_DATE * Math.random())

const images = [
  "https://live.staticflickr.com/113/297599225_7bdf6ff5d3_c.jpg",
  "https://live.staticflickr.com/3347/3649971266_77aeb509ff_c.jpg",
  "https://live.staticflickr.com/33/53086339_a99cc34007_c.jpg",
  "https://live.staticflickr.com/6153/6177131392_ed302bcdaa_c.jpg",
  "https://live.staticflickr.com/5756/20506954814_6899e55705_c.jpg",
  "https://live.staticflickr.com/1784/42400905604_d30aca6ff0_c.jpg",
  "https://live.staticflickr.com/4032/4658876118_e86b9a27d3_c.jpg",
  "https://live.staticflickr.com/8514/28977667291_76a3f890f0_c.jpg",
  "https://live.staticflickr.com/421/31762077483_51ca729dae_c.jpg",
  "https://live.staticflickr.com/5129/5306561962_d618110bbe_c.jpg"
]

const carNames = [
  "Toyota Camry",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Corvette",
  "BMW 3 Series",
  "Mercedes-Benz E-Class",
  "Audi A4",
  "Tesla Model S",
  "Volkswagen Golf",
  "Jeep Wrangler",
  "Lamborghini Aventador",
  "Ferrari 488",
  "Porsche 911",
  "Subaru Outback",
  "Nissan Altima",
  "Mazda CX-5",
  "Kia Soul",
  "Hyundai Sonata",
  "Lexus RX",
  "Cadillac Escalade"
];

const subtitles = [
  "Experience the Thrill of the Open Road",
  "Unleash Your Driving Passion",
  "Elevate Your Journey",
  "Discover Performance Redefined",
  "Where Luxury Meets Adventure",
  "Drive with Confidence and Style",
  "Innovation in Motion",
  "Efficiency at its Finest",
  "Explore the Ultimate Driving Experience",
  "Crafted for Excellence",
  "Redefining the Art of Driving",
  "Power, Precision, Prestige",
  "Your Road Awaits, Choose Your Companion",
  "Drive Beyond Boundaries",
  "Embrace the Future of Mobility",
  "Where Every Journey Begins with Excitement",
  "Transform Your Commute into an Adventure",
  "Innovation Engineered for You",
  "Unlock Your Driving Potential",
  "Dare to Dream, Drive to Achieve"
];

const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
]

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

const carTypes = ["SUV", "sport", "hatchback", "sedan"]

const carCapacities = [2, 4, 6, 8]


const users = [
  {
    email: "demo@morent.com",
    avatar: "https://fakeurl.com/avatar1.png",
    fullName: "John Doe",
    passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$zvs+t/+KhJANqsvnk01iZQ$CxM+vWyc7pd9dprmGsKn0I0xtIUpm8eA8xc9nJv5xKo", // Aa123456
    permission: "user",
  },
  {
    email: "jane_smith@gmail.com",
    avatar: "https://fakeurl.com/avatar2.png",
    fullName: "Jane Smith",
    passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$eUAUPUr3uZfuqYo/auSsVA$r4ARivVMtti7kbe0Z6u8IFCkEU6/MfpC0l/zFtzob9E", // Aa123456
    permission: "user",
  },
  {
    email: "ajohnson@gmail.com",
    avatar: "https://fakeurl.com/avatar3.png",
    fullName: "Alice Johnson",
    passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$bE27LNvNzegaymcYuBWg7A$HqaVeh9SX3WejMYqVIGt47ApSjZkFn2aG9dVbSzrbag", // MyNewUser123
    permission: "user",
  },
  {
    email: "dakotab@morent.com",
    avatar: "https://fakeurl.com/avatar1.png",
    fullName: "Dakota B",
    passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$zvs+t/+KhJANqsvnk01iZQ$CxM+vWyc7pd9dprmGsKn0I0xtIUpm8eA8xc9nJv5xKo", // Aa123456
    permission: "user",
  },
  {
    email: "superuser@gmail.com",
    avatar: "https://fakeurl.com/avatar2.png",
    fullName: "Super User",
    passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$eUAUPUr3uZfuqYo/auSsVA$r4ARivVMtti7kbe0Z6u8IFCkEU6/MfpC0l/zFtzob9E", // Aa123456
    permission: "user",
  },
  {
    email: "brians@gmail.com",
    avatar: "https://fakeurl.com/avatar3.png",
    fullName: "Brian Couper",
    passwordHash: "$argon2id$v=19$m=65536,t=3,p=4$bE27LNvNzegaymcYuBWg7A$HqaVeh9SX3WejMYqVIGt47ApSjZkFn2aG9dVbSzrbag", // MyNewUser123
    permission: "user",
  },
];

const userCaptions = [
  "CEO at Amazon",
  "Travel Enthusiast",
  "Car Enthusiast",
  "Adventure Seeker",
  "Tech Guru",
  "Fashion Icon",
  "Foodie Extraordinaire",
  "Fitness Fanatic",
  "Digital Nomad",
  "Art Lover",
  "Music Aficionado",
  "Nature Lover",
  "Pet Lover",
  "Gamer",
  "Movie Buff",
  "Bookworm",
  "Entrepreneur",
  "Startup Founder",
  "Content Creator",
  "Social Media Influencer"
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

const userInsertResults = db.users.insertMany(users);
const userIds = userInsertResults.insertedIds;

const reviews = [];
for (let i = 0; i < 20; i++) {
  reviews.push({
    user: userIds.random(),
    caption: userCaptions[i],
    date: randomDate(),
    rating: Math.floor(Math.random() * 5) + 1,
    comment: comments[i],
  });
}

const reviewInsertResults = db.reviews.insertMany(reviews);

const cars = [];
for (let i = 0; i < 20; i++) {
  cars.push({
    name: carNames[i],
    title: carNames[i],
    subtitle: subtitles[i],
    carType: carTypes.random(),
    fuelCapacity: 60,
    peopleCapacity: carCapacities.random(),
    isManual: Math.random() >= 0.5,
    price: Math.floor(Math.random() * 50) + 20,
    previousPrice: Math.floor(Math.random() * 50) + 70,
    isInFavourites: false,
    thumbnail: {
      name: `Thumbnail ${i + 1}`,
      desc: `Thumbnail ${i + 1} Description`,
      img: {
        url: images[i],
      },
    },
    photos: [
      {
        name: `Photo 1 ${i + 1}`,
        desc: `Photo 1 ${i + 1} Description`,
        img: {
          url: images[i],
        },
      },
      {
        name: `Photo 2 ${i + 1}`,
        desc: `Photo 2 ${i + 1} Description`,
        img: {
          url: images[i],
        },
      },
    ],
    description: carDescriptions[i],
    reviews: Array(Math.floor(Math.random(10))).fill(0).map(() => { // Create reviews here
      return ({})
    }),
    rentalData: Array(Math.floor(Math.random(4))).fill(0).map(() => {
      const pickUpDateTime = randomDate()
      return ({
        pickUpData: {
          dateTime: randomDate(),
          location: locations.random(),
        },
        dropOffData: {
          dateTime: randomDate(pickUpDateTime),
          location: locations.random(),
        },
      })
    })
  });
}

const carInsertResults = db.cars.insertMany(cars);

reviewInsertResults.insertedIds.forEach((reviewId, index) => {
  const carIndex = Math.floor(index / 10);
  const carId = carInsertResults.insertedIds[carIndex];
  db.cars.updateOne({ _id: carId }, { $push: { reviews: reviewId } });
});

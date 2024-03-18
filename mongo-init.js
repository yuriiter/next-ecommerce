db = db.getSiblingDB("morentdb");

// db.createCollection("Review");
// db.createCollection("Car");
// db.createCollection("User");
// db.createCollection("Notification");

const users = [
  {
    email: "user1@example.com",
    avatar: "https://fakeurl.com/avatar1.png",
    fullName: "John Doe",
    passwordHash: "hashedPassword1",
    permission: "user",
  },
  {
    email: "user2@example.com",
    avatar: "https://fakeurl.com/avatar2.png",
    fullName: "Jane Smith",
    passwordHash: "hashedPassword2",
    permission: "user",
  },
  {
    email: "user3@example.com",
    avatar: "https://fakeurl.com/avatar3.png",
    fullName: "Alice Johnson",
    passwordHash: "hashedPassword3",
    permission: "user",
  },
  {
    email: "user4@example.com",
    avatar: "https://fakeurl.com/avatar4.png",
    fullName: "Bob Brown",
    passwordHash: "hashedPassword4",
    permission: "user",
  },
];

const userInsertResults = db.users.insertMany(users);
const userIds = userInsertResults.insertedIds;

const cars = [];
for (let i = 0; i < 20; i++) {
  cars.push({
    name: `Car ${i + 1}`,
    title: `Car ${i + 1} Title`,
    subtitle: `Car ${i + 1} Subtitle`,
    carType: "SUV",
    fuelCapacity: 60,
    peopleCapacity: 5,
    isManual: false,
    price: Math.floor(Math.random() * 50000) + 20000, // Random price between 20000 and 70000
    previousPrice: 0,
    isInFavourites: false,
    thumbnail: {
      name: `Thumbnail ${i + 1}`,
      desc: `Thumbnail ${i + 1} Description`,
      img: {
        url: `https://fakeurl.com/thumbnail${i + 1}.png`,
      },
    },
    photos: [
      {
        name: `Photo 1 ${i + 1}`,
        desc: `Photo 1 ${i + 1} Description`,
        img: {
          url: `https://fakeurl.com/photo1_${i + 1}.png`,
        },
      },
      {
        name: `Photo 2 ${i + 1}`,
        desc: `Photo 2 ${i + 1} Description`,
        img: {
          url: `https://fakeurl.com/photo2_${i + 1}.png`,
        },
      },
    ],
    description: `This is a description for Car ${i + 1}.`,
    reviews: [],
    rentalData: [
      {
        pickUpData: {
          dateTime: new Date(),
          location: `Pickup Location ${i + 1}`,
        },
        dropOffData: {
          dateTime: new Date(),
          location: `Dropoff Location ${i + 1}`,
        },
      },
    ],
  });
}

const carInsertResults = db.cars.insertMany(cars);

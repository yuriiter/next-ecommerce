const {
    FRONTEND_URL = "http:localhost:3000",
    PORT = 5000,
    JWT_SECRET = "1957hbngfwner",
    JWT_EXPIRES = 90,
    NODE_ENV = "development",
    DB_HOST = "localhost",
    DB_USER = "myusername",
    DB_NAME = "mydatabase",
    DB_PASSWORD = "mypassword",
    DB_PORT = 5432,
} = process.env

export {
    FRONTEND_URL,
    PORT,
    JWT_SECRET,
    JWT_EXPIRES,
    NODE_ENV,
    DB_HOST,
    DB_USER,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
}

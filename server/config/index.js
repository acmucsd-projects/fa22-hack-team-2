const dotenv = require("dotenv")

dotenv.config();

const config = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}

module.exports = config;
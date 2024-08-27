const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  dbConfig: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "myapp",
  },
};

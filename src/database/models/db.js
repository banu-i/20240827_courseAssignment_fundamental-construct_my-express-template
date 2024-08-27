const { Sequelize } = require("sequelize");
const { dbConfig } = require("../config/config");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
    logging: false, // Setze auf true, um SQL-Logs zu sehen
  }
);

module.exports = sequelize;

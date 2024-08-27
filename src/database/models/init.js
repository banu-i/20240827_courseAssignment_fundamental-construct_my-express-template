const sequelize = require("./db");
const User = require("./User");
const Entry = require("./Entry");
const Image = require("./Image");
const Friend = require("./Friend");

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Datenbankverbindung erfolgreich.");

    await sequelize.sync({ force: true }); // Erstelle die Tabellen neu (Achtung: Alle Daten gehen verloren!)
    console.log("Datenbanktabellen wurden erstellt.");

    // Optionale Testdaten hinzufügen
    // await User.create({ username: 'testuser', email: 'test@example.com', password_hash: 'hashed_password' });
  } catch (error) {
    console.error("Fehler bei der Datenbankinitialisierung:", error);
  }
}

initializeDatabase();

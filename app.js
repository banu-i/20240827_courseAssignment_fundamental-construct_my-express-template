const express = require("express");
const path = require("path");
const logger = require("morgan");
const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const authMiddleware = require("./src/middleware/authMiddleware");

const app = express();

// Setup von Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware); // Hier könnte eine benutzerdefinierte Middleware angewendet werden
app.use(express.static(path.join(__dirname, "public")));

// Setup von Routen
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Fehlerbehandlungsmiddleware
app.use((req, res, next) => {
  res.status(404).send("Seite nicht gefunden");
});

module.exports = app;

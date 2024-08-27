const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route für das Abrufen aller Benutzer
router.get("/", userController.getAllUsers);

// Route für das Erstellen eines neuen Benutzers
router.post("/", userController.createUser);

module.exports = router;

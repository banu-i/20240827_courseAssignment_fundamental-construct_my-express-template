const express = require("express");
const router = express.Router();

// Get Routen

// Route für alle Users
router.get("/", function (req, res) {
  res.json("All Users - hello");
});

// Route für einen bestimmten User
router.get("/:id", function (req, res) {
  const userId = req.params.id;
  res.json({ message: `Details for user with ID ${userId}` });
});

// Post Route

//  Route zum Erstellen eines neuen Benutzers
router.post("/", function (req, res) {
  const newUser = req.body;
  res.json({ message: "User created", user: newUser });
});

// Put Route

// Route zum Aktualisieren eines Benutzers - basierend auf der ID
router.put("/:id", function (req, res) {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({ message: `User with ID ${userId} updated`, updatedUser });
});

// Delete Route

// Route zum Löschen eines Benutzers - basierend auf der ID
router.delete("/:id", function (req, res) {
  const userId = req.params.id;
  res.json(`User with ID ${userId} deleted`);
});

module.exports = router;

const express = require("express");
const router = express.Router();

// Get Routen

// Route für alle Freunde
router.get("/", function (req, res) {
  res.json("Overview of all friends");
});

// Route für einen bestimmten Freund
router.get("/:id", function (req, res) {
  const friendId = req.params.id;
  res.json({ message: `Details for friend with ID ${friendId}` });
});

// Post Route

//  Route zum Erstellen eines neuen Freundes
router.post("/", function (req, res) {
  const newFriend = req.body;
  res.json({ message: "Friend created", user: newFriend });
});

// Put Route

// Route zum Aktualisieren eines Freundes - basierend auf der ID
router.put("/:id", function (req, res) {
  const friendId = req.params.id;
  const updatedFriend = req.body;
  res.json({ message: `Friend with ID ${friendId} updated`, updatedFriend });
});

// Delete Route

// Route zum Löschen eines Freundes - basierend auf der ID
router.delete("/:id", function (req, res) {
  const friendId = req.params.id;
  res.json(`Friend with ID ${friendId} deleted`);
});

module.exports = router;

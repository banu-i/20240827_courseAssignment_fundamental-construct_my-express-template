const express = require("express");
const router = express.Router();

// Get Routen

// Route für alle Einträge
router.get("/", function (req, res) {
  res.json("All Entries");
});

// Route für einen bestimmten Eintrag
router.get("/:id", function (req, res) {
  const entryId = req.params.id;
  res.json({ message: `Details for entry with ID ${entryId}` });
});

// Post Route

//  Route zum Erstellen eines neuen Eintrags
router.post("/", function (req, res) {
  const newEntry = req.body;
  res.json({ message: "Entry created", user: newEntry });
});

// Put Route

// Route zum Aktualisieren eines Eintrags - basierend auf der ID
router.put("/:id", function (req, res) {
  const entryId = req.params.id;
  const updatedEntry = req.body;
  res.json({ message: `Entry with ID ${entryId} updated`, updatedEntry });
});

// Delete Route

// Route zum Löschen eines Eintrags - basierend auf der ID
router.delete("/:id", function (req, res) {
  const entryId = req.params.id;
  res.json(`Entry with ID ${entryId} deleted`);
});

module.exports = router;

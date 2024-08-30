const express = require("express");
const router = express.Router();

// Get Routen

// Route für alle Bilder
router.get("/", function (req, res) {
  res.json("Overview of all Images");
});

// Route für einen bestimmten Bild
router.get("/:id", function (req, res) {
  const imageId = req.params.id;
  res.json({ message: `Details for image with ID ${imageId}` });
});

// Post Route

//  Route zum Erstellen eines neuen Bildes
router.post("/", function (req, res) {
  const newImage = req.body;
  res.json({ message: "Image created", user: newImage });
});

// Put Route

// Route zum Aktualisieren eines Bildes - basierend auf der ID
router.put("/:id", function (req, res) {
  const imageId = req.params.id;
  const updatedImage = req.body;
  res.json({ message: `Image with ID ${imageId} updated`, updatedImage });
});

// Delete Route

// Route zum Löschen eines Bildes - basierend auf der ID
router.delete("/:id", function (req, res) {
  const imageId = req.params.id;
  res.json(`Image with ID ${imageId} deleted`);
});

module.exports = router;

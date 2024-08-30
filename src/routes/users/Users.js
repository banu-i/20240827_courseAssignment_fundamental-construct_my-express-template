const express = require("express");
const app = express.Router();

// Get Routen
app.get("/", function (req, res) {
  res.json("Hello World");
});

app.get("/user", function (req, res) {
  res.json("Hello User");
});

app.get("/users", function (req, res) {
  res.json("All Users - hello");
});

app.get("/entries", function (req, res) {
  res.json("All Entries");
});

app.get("/images", function (req, res) {
  res.json("Overview of all Images");
});

app.get("/friends", function (req, res) {
  res.json("Overview of all friends");
});

// Post Route
app.post("/user", function (req, res) {
  const newUser = req.body;
  res.json({ message: "User created", user: newUser });
});

// Put Route
app.put("/user:id", function (req, res) {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({ message: `User with ID ${userId} updated`, updatedUser });
});

// Delete Route
app.delete("/user:id", function (req, res) {
  const userId = req.params.id;
  res.json(`User with ID ${userId} deleted`);
});

app.listen(3000);

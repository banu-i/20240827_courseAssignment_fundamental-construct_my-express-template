const express = require("express");
const app = express();

app.use(express.json());

// Get Routen
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/user", function (req, res) {
  res.send("Hello User");
});

app.get("/users", function (req, res) {
  res.send("All Users - hello");
});

app.get("/entries", function (req, res) {
  res.send("All Entries");
});

app.get("/images", function (req, res) {
  res.send("Overview of all Images");
});

app.get("/friends", function (req, res) {
  res.send("Overview of all friends");
});

// Post Route
app.post("/user", function (req, res) {
  const newUser = req.body;
  res.send(`User created: ${JSON.stringify(newUser)}`);
});

// Put Route
app.put("/user:id", function (req, res) {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.send(
    `User with ID ${userId} updated with data: ${JSON.stringify(updatedUser)}`
  );
});

// Delete Route
app.delete("/user:id", function (req, res) {
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted`);
});

app.listen(3000);

const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send("Fehler beim Abrufen der Benutzer");
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const userId = await User.createUser(name, email);
    res.status(201).json({ id: userId, name, email });
  } catch (err) {
    res.status(500).send("Fehler beim Erstellen des Benutzers");
  }
};

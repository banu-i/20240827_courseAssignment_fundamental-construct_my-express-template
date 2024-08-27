const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { username, email, password_hash } = req.body;
  try {
    const user = await User.create({ username, email, password_hash });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Fehler beim Erstellen des Benutzers" });
  }
};

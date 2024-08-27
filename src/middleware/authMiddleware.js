function authMiddleware(req, res, next) {
  // Authentifizierungslogik
  console.log("Authentifizierungsmiddleware aktiviert");
  next();
}

module.exports = authMiddleware;

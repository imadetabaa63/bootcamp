// app.js
const express = require('express');
const app = express();
const port = 3000;

// Importer le routeur
const routes = require('./routes/index');

// Monter le routeur
app.use('/', routes);

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

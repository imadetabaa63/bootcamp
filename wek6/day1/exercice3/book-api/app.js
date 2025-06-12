// app.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

// Middleware pour parser le JSON
app.use(express.json());

// Monter le routeur sur /books
app.use('/books', booksRouter);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

// app.js
const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

// Middleware pour parser le JSON
app.use(express.json());

// Monter le routeur
app.use('/todos', todosRouter);

// Lancer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});

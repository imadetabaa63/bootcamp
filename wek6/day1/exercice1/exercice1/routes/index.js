// routes/index.js
const express = require('express');
const router = express.Router();

// Page d'accueil
router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

// Page "À propos"
router.get('/about', (req, res) => {
  res.send('À propos de nous : Ceci est une application Express.js simple.');
});

module.exports = router;

// routes/books.js
const express = require('express');
const router = express.Router();

// Base de données en mémoire
let books = [];
let nextId = 1;

// GET /books – Obtenir tous les livres
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books – Ajouter un nouveau livre
// Corps attendu : { "title": "...", "author": "..." }
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Les champs "title" et "author" sont requis' });
  }

  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id – Mettre à jour un livre par ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }
  if (!title || !author) {
    return res.status(400).json({ error: 'Les champs "title" et "author" sont requis' });
  }

  book.title = title;
  book.author = author;
  res.json(book);
});

// DELETE /books/:id – Supprimer un livre par ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = books.findIndex(b => b.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }

  const deleted = books.splice(idx, 1)[0];
  res.json(deleted);
});

module.exports = router;

// routes/todos.js
const express = require('express');
const router = express.Router();

// Base de données en mémoire
let todos = [];
let nextId = 1;

// Obtenir toutes les tâches
router.get('/', (req, res) => {
  res.json(todos);
});

// Ajouter une nouvelle tâche
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Le champ "title" est requis' });

  const newTodo = { id: nextId++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Mettre à jour une tâche
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Tâche non trouvée' });
  if (!title) return res.status(400).json({ error: 'Le champ "title" est requis' });

  todo.title = title;
  res.json(todo);
});

// Supprimer une tâche
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Tâche non trouvée' });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;

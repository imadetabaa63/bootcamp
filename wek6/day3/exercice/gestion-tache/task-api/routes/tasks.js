// routes/tasks.js
const express = require('express');
const fs = require('fs').promises;
const router = express.Router();
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

// Fonction utilitaire : lire les tâches
async function readTasks() {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

// Fonction utilitaire : écrire les tâches
async function writeTasks(tasks) {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}

// GET /tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la lecture des tâches.' });
  }
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée.' });
    res.json(task);
  } catch {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// POST /tasks
router.post('/', async (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Le titre est requis.' });

  try {
    const tasks = await readTasks();
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      completed: completed || false
    };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch {
    res.status(500).json({ error: 'Erreur lors de la création de la tâche.' });
  }
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
  const { title, completed } = req.body;
  if (title === undefined && completed === undefined) {
    return res.status(400).json({ error: 'Aucune donnée à mettre à jour.' });
  }

  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ error: 'Tâche non trouvée.' });

    if (title !== undefined) tasks[taskIndex].title = title;
    if (completed !== undefined) tasks[taskIndex].completed = completed;

    await writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } catch {
    res.status(500).json({ error: 'Erreur lors de la mise à jour.' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    let tasks = await readTasks();
    const newTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    if (tasks.length === newTasks.length) {
      return res.status(404).json({ error: 'Tâche non trouvée.' });
    }
    await writeTasks(newTasks);
    res.json({ message: 'Tâche supprimée.' });
  } catch {
    res.status(500).json({ error: 'Erreur lors de la suppression.' });
  }
});

module.exports = router;

// server.js
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const PORT = 3000;

app.use(express.json());
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

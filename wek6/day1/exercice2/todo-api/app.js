
const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');


app.use(express.json());


app.use('/todos', todosRouter);


app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});

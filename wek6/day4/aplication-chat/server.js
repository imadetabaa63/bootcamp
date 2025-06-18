const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const users = new Map(); // socket.id => username

io.on('connection', (socket) => {
  console.log('✅ Un utilisateur s’est connecté');

  socket.on('user joined', (username) => {
    users.set(socket.id, username);

    io.emit('notification', `💡 ${username} a rejoint le chat`);
    io.emit('user list', Array.from(users.values()));
  });

  socket.on('chat message', (data) => {
    io.emit('chat message', data);
  });

  socket.on('disconnect', () => {
    const username = users.get(socket.id);
    if (username) {
      users.delete(socket.id);
      io.emit('notification', `🚪 ${username} a quitté le chat`);
      io.emit('user list', Array.from(users.values()));
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
});

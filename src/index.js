import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import initializeDb from './Database';
import config from './config.json';
import Message from './Message';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = process.env.PORT || 3000;


// Start connection with service
io.on('connection', (socket) => {
  /*
   * events
   * subscribe, send, unsubscribe
   */

  socket.on('subscribe', (channel) => {
    socket.join(channel);
  });

  socket.on('send', (data) => {
    io.emit('send', data);
  });

  socket.on('unsubscribe', (channel) => {
    socket.leave(channel);
  });
});

app.get('/', (req, res) => {
  res.sendfile('./public/index.html');
});

app.get('/channels', (req, res) => {
  const mQuery = req.query;
  console.log(mQuery);
  Message.find(mQuery)
    .sort('-createdAt')
    .exec((err, messages) => {
      if (err) return res.json({ err: 'Problem querying messages' }); // handleError() method should go here based upon message
      return res.json(messages);
    });
});

initializeDb(config, () => {
  server.listen(port, () => {
    console.log(`[INFO] Listening on *: + ${port}`);
  });
});

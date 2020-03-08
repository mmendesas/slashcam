/* eslint-disable global-require */
const express = require('express');
const socketIO = require('socket.io');
const { createServer } = require('http');
const path = require('path');

const routes = require('./routes');

const messages = [];

class App {
  constructor() {
    this.init();

    this.middlewares();
    this.engine();
    this.routes();
  }

  init() {
    this.app = express();
    this.server = createServer(this.app);
    this.io = socketIO(this.server);

    this.handleSocketConnection();
  }

  middlewares() {
    this.app.use(express.static(path.join(__dirname, '..', 'public')));
  }

  engine() {
    this.app.set('views', path.join(__dirname, '..', 'public'));
    this.app.engine('html', require('ejs').renderFile);
    this.app.set('view engine', 'html');
  }

  routes() {
    this.app.use(routes);
  }

  handleSocketConnection() {
    this.io.on('connection', socket => {
      console.log(`Socket connected: ${socket.id}`);

      // on connection update own messages
      socket.emit('previous-messages', messages);

      // listener to send-message called from front
      socket.on('send-message', data => {
        messages.push(data);
        socket.broadcast.emit('received-message', data);
      });
    });
  }
}

module.exports = new App().server;

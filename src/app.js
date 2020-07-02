/* eslint-disable no-console */

const express = require('express');
const socketIO = require('socket.io');
const { createServer } = require('http');

const messages = [];
let activeUsers = [];

class App {
  constructor(handler) {
    this.init();
    this.routes(handler);
  }

  init() {
    this.app = express();
    this.server = createServer(this.app);
    this.io = socketIO(this.server);

    this.handleSocketConnection();
  }

  routes(handle) {
    this.app.get('*', (req, res) => {
      return handle(req, res);
    });
  }

  handleSocketConnection() {
    this.io.on('connect', socket => {
      socket.emit('now', { id: socket.id, message: 'teste 123' });
    });

    this.io.on('connection', socket => {
      console.log(`Socket connected: ${socket.id}`);

      const exists = activeUsers.find(user => user === socket.id);
      if (!exists) {
        // add current user
        activeUsers.push(socket.id);

        // broadcast connected user
        socket.broadcast.emit('active-users', {
          users: [socket.id],
        });

        // local emit without current user
        socket.emit('active-users', {
          users: activeUsers.filter(user => user !== socket.id),
        });
      }

      // on connection update own messages
      socket.emit('previous-messages', messages);

      // listener to send-message called from front
      socket.on('send-message', data => {
        messages.push(data);

        console.log('ASDFASDF', data);

        socket.broadcast.emit('received-message', data);
      });

      // handle offer
      socket.on('call-user', data => {
        // emit to front
        socket.to(data.to).emit('call-made', {
          offer: data.offer,
          socket: socket.id,
        });
      });

      // handle make-answer
      socket.on('make-answer', data => {
        socket.to(data.to).emit('answer-made', {
          socket: socket.id,
          answer: data.answer,
        });
      });

      // handle disconnection
      socket.on('disconnect', () => {
        // update current list
        activeUsers = activeUsers.filter(item => item !== socket.id);
        socket.broadcast.emit('delete-user', socket.id);
      });
    });
  }
}

module.exports = App;

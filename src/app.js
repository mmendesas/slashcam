const express = require('express');
const socketIO = require('socket.io')
const { createServer } =  require('http')
const path = require('path')

const routes = require('./routes')

class App {
  constructor(){
    this.init();

    this.middlewares();
    this.routes();
  }

  init(){
    this.app = express();
    this.server = createServer(this.app);
    this.io = socketIO(this.server);
  }

  middlewares(){
    this.app.use(express.static(path.join(__dirname, "..", "public")));
  }

  routes(){
    this.app.use(routes);
  }
  
  handleSocketConnection(){
    this.io.on('connection', socket => {
      console.log(`Socket connected: ${socket.id}`)
    })
  }
}

module.exports = new App().server;
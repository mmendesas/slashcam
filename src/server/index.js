/* eslint-disable no-console */
const next = require('next');
const App = require('./app');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const { server } = new App(handle);

nextApp.prepare().then(() => {
  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});

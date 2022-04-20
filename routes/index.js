const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Nico Garza');
});

module.exports = routes;
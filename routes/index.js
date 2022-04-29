const routes = require('express').Router();
const temple = require('./temple');

routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://jorgito76.github.io/jorge-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;

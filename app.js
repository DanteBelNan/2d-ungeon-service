const express = require('express'); 
const app = express(); 


app.get('/', (req, res) => {
  res.send('¡Hola desde mi aplicación Node.js!');
});


module.exports = app;
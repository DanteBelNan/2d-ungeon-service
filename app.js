const express = require('express'); 
const app = express(); 


//Routers
const usersRouter = require("./routes/users");

app.get('/', (req, res) => {
  res.send('¡Hola desde mi aplicación Node.js!');
});

app.use("/users", usersRouter);

module.exports = app;
const express = require('express'); 
const app = express(); 


//Routers
const usersRouter = require("./routes/users");
const configRouter = require("./routes/config");

app.get('/', (req, res) => {
  res.send('¡Hola desde mi aplicación Node.js!');
});

app.use("/users", usersRouter);
app.use("/config", configRouter);

module.exports = app;
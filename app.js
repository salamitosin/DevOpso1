const express = require('express')
const app = express()


const appRoute = require ('./routes/router')
app.use(express.json());

app.get('/', (req, res) =>{
  res.send("Hello Route")
});
app.use('/api', appRoute);

module.exports =app;
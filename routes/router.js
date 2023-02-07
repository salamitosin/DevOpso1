const express = require ("express");
const route = express.Router();
const data = require("../data/data.json")

route.get('/', (req, res )=>{
    res.send("Hello world")
});

module.exports = route;
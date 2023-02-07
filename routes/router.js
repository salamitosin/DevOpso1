const express = require ("express");
const route = express.Router();
const data = require("../data/data.json")

route.get('/', (req, res )=>{
    res.json(data)
});

module.exports = route;
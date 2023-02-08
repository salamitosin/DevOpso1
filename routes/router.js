const express = require ("express");
const route = express.Router();
const data = require("../data/data.json");
const{check, validator, validationResult} = require('express-validator')

route.get('/', (req, res )=>{
    res.json(data)
});

// 
route.post('/', 
[
    check("name", "app name is required").not().isEmpty(),
    check("author", "app name is required").not().isEmpty()
],
(req, res )=>{
   
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
});

module.exports = route;
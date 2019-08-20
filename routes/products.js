const express = require('express');
const router = express.Router();
const db = require('../models')
// console.log(db);

//path -/products 
//method -GET all products (mongoose method: @find)
router.get('/', (req,res)=>{
    db.PRODUCTS.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.send(err))
})

//path - /products 
//Create a new Product - @create(mongoose method)
router.post('/', (req,res)=>{
    console.log(req.body)
    db.PRODUCTS.create(req.body) //this returns a promise 
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

module.exports = router; 

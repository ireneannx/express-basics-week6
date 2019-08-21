const express = require('express');
const router = express.Router();
const db = require('../models')
// console.log(db);


//path -/products 
//method -GET all products (mongoose method: @find)
router.get('/', (req,res)=>{
    db.PRODUCTS.find() //this is a promise 
    .then((resdata)=>{res.render('products', {data:resdata})}) //we are sending resdata (json format) from db.products.find as the variable 'data' to be accessed in products.ejs 
    //.then((data)=>res.json(data))
    .catch((err)=>res.send(err))
})

router.get('/api', (req,res)=>{
    db.PRODUCTS.find()
    .then((data)=>{res.json(data)})
    .catch((err)=>res.send(err))
})

//path - /products 
//Create a new Product - @create(mongoose method)
router.post('/', (req,res)=>{
    console.log(req.body)
    db.PRODUCTS.create(req.body) //this returns a promise 
    .then(res.redirect('/products'))
    //.then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//path -/products:id
//get a single product
router.get('/:id', (req,res)=>{
    db.PRODUCTS.find({_id:req.params.id})
    .then((data)=>res.json(data))
    .catch((err)=>res.send(err))
})

//update a product 
//path - /product/:id
router.put('/:id',(req,res)=>{
    db.PRODUCTS.findOneAndUpdate({_id:req.params.id},req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//Delete -/products/:id
//delete a product -findOneAndRemove
router.delete('/:id', (req,res)=>{
    db.PRODUCTS.findOneAndRemove({_id:req.params.id})
    .then(()=> res.send("product deleted"))
    .catch((err)=> res.send(err))
})

module.exports = router; 

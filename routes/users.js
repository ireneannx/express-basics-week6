const express = require('express')

const router = express.Router()
const db = require('../models')

//path -/users
//get users
router.get('/',(req,res)=> {
    db.User.find()
    .populate('posts')
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//create user 
router.post('/',(req,res)=>{
    db.User.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})


module.exports = router
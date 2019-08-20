
//models connects you to mongodb

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbname',{useNewUrlParser: true});

//import the collection(model) PRODUCTS from ./products 
//console.log(require('./products'));
module.exports.PRODUCTS = require('./products');
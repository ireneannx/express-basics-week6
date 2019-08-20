const express = require('express');
const router = express.Router();

const products = ["alphaai", "testBeta", "gamma"]; //products had to be moved here tobe accessible 

router.get('/', (req, res) => {
    res.render('index', { products: products }); //render will always look within the views file 
    //second parameter in .render makes products accesible in index.ejs so it can run the script written wihin <% %>
})

router.post('/', (req, res) => {
        products.push(req.body.product);
        res.redirect('/')
    })

module.exports = router;
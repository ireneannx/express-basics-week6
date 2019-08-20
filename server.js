const express = require('express');
//imports the express module and stores it in express
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');


//view engine
//view engine is a template engine. We are setting that to be ejs (embedded javascript in html). There are a lot of view engines, we are setting it to be ejs
app.set('view engine', 'ejs');
console.log(__dirname); //directory name
app.set('views', path.join(__dirname, 'views')); //path jois views folder with server.js

//we want to display these products and connect it to views. This may be used to connect db to views
const products = ["alphaai","testBeta","gamma"]; 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //this to send the data through the form you built
app.use(bodyParser.json()); //this gives you the additional option of sending your data as a json object.

//routes (basic)
app.get('/', (req,res)=>{
    res.render('index',{products:products}); //render will always look within the views file 
    //second parameter in .render makes products accesible in index.ejs so it can run the script written wihin <% %>
})

app.post('/',(req,res)=>{
    products.push(req.body.product);
    res.redirect('/')
})

app.get('/home/:id', (req,res)=>{
    let user = req.params.id;
    res.send(`hello ${user}`)
});

//start server 
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})

//note: use npm run dev to start server with nodemon
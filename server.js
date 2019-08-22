const express = require('express');
//imports the express module and stores it in express
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
var methodOverride = require('method-override')


//view engine
//view engine is a template engine. We are setting that to be ejs (embedded javascript in html). There are a lot of view engines, we are setting it to be ejs
app.set('view engine', 'ejs');
console.log(__dirname); //directory name
app.set('views', path.join(__dirname, 'views')); //path jois views folder with server.js, connecting the views folder

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //this to send the data through the form you built
app.use(bodyParser.json()); //this gives you the additional option of sending your data as a json object.

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//link styles
app.use(express.static(path.join(__dirname, 'public')))

//routers 
const indexRouter = require('./routes/index');
const jobsRouter = require('./routes/jobs');
const productsRouter = require('./routes/products')
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/users')


//routes
app.use('/', indexRouter); 
app.use('/jobs', jobsRouter);
app.use('/products', productsRouter)
app.use('/posts', postsRouter)
app.use('/users', userRouter)


//start server 
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})

//note: use npm run dev to start server with nodemon
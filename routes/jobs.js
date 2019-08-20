const express = require('express');
const router = express.Router();

//path: /jobs
//routes
router.get('/', (req,res)=>{
    res.render('jobs') //searches in views for jobs.ejs
})

module.exports = router;
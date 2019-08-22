const express = require('express')

const router = express.Router()
const db = require('../models')

//path -/posts
//get all posts 
router.get('/', (req, res) => {

    db.Posts.find()
        .populate('author')
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

//create a post
router.post('/:id', (req, res) => { //id is the user id 
    db.Posts.create(req.body) //need to push the post array to users //returns an object: data and this line is a promise 
        .then(async(data) => {
            console.log(data)
            console.log(req.body)
            await db.User.findOneAndUpdate({ _id: req.params.id }, { //await waits for the promise to be resolved 
                $push: { posts: data._id }
            })
            res.json(data)
        })
        .catch((err) => res.send(err))
})



//get particular posts by author _id
router.get('/:id', (req, res) => {
    db.Posts.find({ author: req.params.id })
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})


module.exports = router
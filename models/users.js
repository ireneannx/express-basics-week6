const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { //primary key
        type: String,
        unique: [true, 'username already exists']
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, //id will be the primary key from posts 
        ref: 'Posts'
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); // Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Please enter the name "]
    },
    productImage: String,
    description : String,
    subscribersCount : Number,
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

const PRODUCTS = mongoose.model('PRODUCTS', productSchema); 

module.exports = PRODUCTS; 
/* A model class is required to make a collection */

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId : String,
    Name : String

})

/* The .model() function makes a copy of schema. */

mongoose.model('users', userSchema)

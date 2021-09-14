/* A model class is required to make a collection */

const mongoose = require('mongoose')
const { Schema } = mongoose;

const informationSchema = new Schema({
    category : String,
    description : String,
    linktoquestion : String,
    linktovideosolution : String,
    linktoblogsolution : String,
    notes : String,
    googleUserId : String,
    _user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

/* The .model() function makes a copy of schema. */
mongoose.model('info', informationSchema)

const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Information = mongoose.model('info')

module.exports = (app) => {

    /*
        The POST Section /api/dashboard/:category is responsible to persist data at Mongo, we also
        provide googleUserId here to later on retrieve data for a particular user.
    */

    app.post('/api/dashboard/:category' , requireLogin, async (req, res) => {
        
        const { category, description, linktoquestion, linktovideosolution, linktoblogsolution, notes, googleUserId} = req.body;

        const record = new Information({
            category ,
            description,
            linktoquestion,
            linktovideosolution,
            linktoblogsolution,
            notes,
            googleUserId
        })

        try{
            const rec = await record.save()
            res.send(rec)
        }catch(err){
            res.status(400);
        }
        
    })

    /*
        To check if the category could be extracted successfully. Was done as a part of
        debugging but I wonder, if I should remove this or not.
    */

    app.get('/api/dashboard/:category' , requireLogin, (req, res) => {
        res.send(req.params.category);
    })

    
    app.get('/api/questions/:category', requireLogin, async (req, res) => {

        const category = req.params.category
        const googleId = req.user.googleId
        
        try{
            const questions = await Information.find({ googleUserId : googleId, category : category })
            res.send(questions)
        }catch(err){
            console.log("Error at fetching information from database !!", err)
        }
    })

};
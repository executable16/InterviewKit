/* This is the root of the Project, the execution of the entire Application starts and ends here 
                                        
                                    The Applications BOOTS here !

*/

const express = require('express');
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const { cookieKey } = require('./config/dev');
const passport = require('passport');
const bodyParser = require('body-parser');
/* The Model should be imported before './services/passport' */

require('./models/User')
require('./models/Information')
require('./services/passport')

/* Initiate a Mongo Object */
mongoose.connect(keys.MongoURI, { useNewUrlParser: true , useUnifiedTopology: true })

/* Initiate an Express Object */
const app = express();

app.use(cookieSession({
    maxAge : 30*24*60*60*1000,
    keys : [cookieKey]
}))

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(passport.initialize())
app.use(passport.session())

/* AuthRoute() is a function and we pass the initiated express object as argument */
authRoutes(app);
require('./routes/infoRoutes')(app)
// infoRoutes(app);

const PORT = process.env.PORT || 5000;
/* The Express Server will run at PORT : 5000 */

app.listen(PORT);


const passport = require('passport')

module.exports = (app) => {

    /* App will take control over all the get requests to "/", will give response at every GET request */
    app.get('/', (req, res) => {
        res.send({ Message : 'Hi There !'});
    })

    /*******************************************************************************************************************/
    
    /* NOTE : The callbackURL and O-Auth Route must have relative links otherwise, multiple cookies
              and sessions will be generated; i.e if O-Auth is /auth/google then callbackURL also
              should be relative i.e /auth/google/callback here !
    */

    /* 'google' query string will be used to authenticate with Google Strategy ! */
    app.get('/auth/google', passport.authenticate('google', {
        scope : ['profile', 'email']
    }))

    /* "/auth/google/callback" is the callbackURL, i.e passports takes control and hence provides us the access token and all */
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard')
        }
    
    )

    app.get('/api/current_user', (req,res) => {
        res.send(req.user)
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    })





    /*******************************************************************************************************************/


    
}

const router = require('express').Router();

module.exports = (app) => {
    router.get('/facebook',
        app.passport.authenticate('facebook')
    );

    router.get('/google',
        app.passport.authenticate('google', {scope: ['profile', 'email']})
    );

    router.get('/login',
        //app.actions.user.findOne
        function (req, res) {
            res.send('Failed to authenticate')
        }
    );

    router.get('/facebook/callback',
        app.passport.authenticate('facebook', {failureRedirect: '/'}),
        app.middleware.mailer.send,
        app.actions.auth.RegisterWithFacebook
    );

    router.get('/google/callback',
        app.passport.authenticate('google', {failureRedirect: '/login'}),
        app.middleware.mailer.send,
        app.actions.auth.RegisterWithGoogle)


    //Authenticate local
    router.post('/login',
        app.middleware.bodyParser.json(),
        function (req, res, next) {
            app.passport.authenticate('local', function (err, local, info) {
                if (local) res.status(200).send(local.dataValues)
                else res.status(404).send(err)
            })(req, res, next);
        })

    router.get('/authenticate',
        function (req, res) {
            if (req.isAuthenticated()) {
                res.status(200).send('user is authenticated')
            } else {
                res.status(400).send('user is not authenticated')
            }
        }
    );

    return router;
}

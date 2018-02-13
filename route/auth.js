const router = require('express').Router();
const connect = require('connect-ensure-login')


module.exports = (app) => {
  router.get('/facebook',
    app.passport.authenticate('facebook')
  );

  router.get('/login',
    app.actions.user.findOne
  );

  router.get('/facebook/callback',
    app.passport.authenticate('facebook', {
      failureRedirect: '/'
    }),
    function(req, res) {
      res.send('Logged In');
    }

  );

  router.get('/profile',
    connect.ensureLoggedIn(),
    function(req, res) {
      res.send('profile', {
        user: req.user
      })

    });

  return router;
}
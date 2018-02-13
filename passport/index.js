const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport')
const FacebookTokenStrategy = require('passport-facebook-token');

module.exports = (app) => {

  const User = app.models.User;
  const Picture = app.models.Picture;

  let pass = passport.use(new FacebookStrategy({
      clientID: app.settings.facebook.clientID,
      clientSecret: app.settings.facebook.secretKey,
      callbackURL: "/auth/facebook/callback",
      profileFields: ['id', 'email', 'displayName', 'photos', 'birthday', 'first_name',
        'last_name', 'gender', 'address'
      ],
      scope: ['email', 'public_profile']
    },

    (accessToken, refreshToken, profile, done) => {
      done(null, profile)
    }
  ));

  /*
    passport.use(new FacebookTokenStrategy({
      clientID: app.settings.facebook.clientID,
      clientSecret: app.settings.facebook.secretKey
      //callbackURL: "/auth/facebook/token/callback",
      //profileFields: ['id', 'email', 'displayName', 'photos', 'birthday', 'first_name',
      //'last_name', 'gender', 'address'
      //]
    }, (token, refreskToken, profile, done) => {

      console.log(profile);

      User.findOne({
        where: {
          token: profile.id
        }
      }).then(user => {
        done(null, user);
        //createOrUpdateUSer(user, profile, done);
      }).catch(err => {
        console.log(err);
        done(err)
      });

    }));
  */

  pass.serializeUser(function(user, done) {
    done(null, user);
  });

  pass.deserializeUser(function(user, done) {
    done(null, user);
  });

  app.passport = pass;

};
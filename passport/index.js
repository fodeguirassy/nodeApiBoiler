const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const sha1 = require('sha1')


module.exports = (app) => {

    const Local = app.models.Local
    const User = app.models.User


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

    pass.use(new GoogleStrategy({
            clientID: app.settings.google.clientId,
            clientSecret: app.settings.google.clientSecret,
            callbackURL: app.settings.google.callbackURL
        }, function (accessToken, refreshToken, profile, cb) {

            return cb(null, profile);
        }
    ));

    pass.use(new LocalStrategy({usernameField: 'email'},

        function (username, password, cb) {

            Local.findOne({where: {email: username, password: sha1(password)}})
                .then( (local) => {
                    cb(null, local)
                }).catch((err) => {
            })
        }
    ));

    pass.serializeUser(function (user, done) {
        done(null, user);
    });

    pass.deserializeUser(function (user, done) {

        User.findOne({where: {id: user.id}})
            .then((user) => {
                if (user) done(null, user);
            }).catch((err) => {
            done(err)
        })
    });

    app.passport = pass;

};

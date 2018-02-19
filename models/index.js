module.exports = (app) => {

    console.log('Loading models ...');

    app.models = {
        User: require('./user')(app),
        Profile: require('./profile')(app),
        Facebook: require('./facebook')(app),
        Google: require('./google')(app),
        Local: require('./local')(app)
    };

    app.models.Profile.hasOne(app.models.Facebook)
    app.models.Profile.hasOne(app.models.Google)
    app.models.Profile.hasOne(app.models.Local)

    //TODO google, twitter, insta
    app.models.User.hasOne(app.models.Profile)


};
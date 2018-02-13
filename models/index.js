module.exports = (app) => {

  console.log('Loading models ...');

  app.models = {
    User: require('./user')(app),
    Profile: require('./profile')(app),
    Facebook: require('./facebook')(app)
  };

  const User = app.models.User
  const Profile = app.models.Profile
  const Facebook = app.models.Facebook

  app.models.Profile.hasOne(app.models.Facebook)

  //TODO google, twitter, insta
  app.models.User.hasOne(app.models.Profile)


};
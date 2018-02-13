module.exports = (app) => {

  const User = app.models.User;
  const Profile = app.models.Profile;
  const Facebook = app.models.Facebook

  return function(req, res) {
    User.findAll({
        include: [{
          model: Profile,
          include: [{
            model: Facebook
          }]
        }]
      })
      .then(users => {
        res.send(users)
      });
  }
}
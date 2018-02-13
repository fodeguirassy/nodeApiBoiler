module.exports = (app) => {
  const User = app.models.User;
  const Facebook = app.models.Facebook
  const Profile = app.models.Profile


  app.sequelize.sync({
    force: true
  }).then(() => {
    Facebook.create()
      .then((facebook) => {
        Profile.create()
          .then((profile) => {
            profile.setFacebook(facebook)
            User.create()
              .then((user) => {
                user.setProfile(profile)
              })
          })
      })

  });


}

module.exports = (app) => {

  const Facebook = app.models.Facebook
  const Profile = app.models.Profile
  const User = app.models.User

  return function (req, res) {

      let user = req.user
      let facebookProfile = {
        facebookID : user.id,
        email : user.emails[0].value,
        name : user.name.givenName + ' ' + user.name.familyName,
        gender : user.gender,
        pictureUrl : user.photos[0].value
      }

      User.create({currentProfile: 'facebook',
          currentName: facebookProfile.name,
          currentEmail: facebookProfile.email,
          currentPassword: req.defaultPassword
      })
          .then((user) => {
              Profile.create()
                .then((profile) => {
                  Facebook.create(facebookProfile)
                    .then((facebook) => {
                      profile.setFacebook(facebook)
                      user.setProfile(profile)
                      res.status(201).send(user)
                    })
                })
          }).catch( (error) => {
            res.status(409).send(error)
          })
  }
}

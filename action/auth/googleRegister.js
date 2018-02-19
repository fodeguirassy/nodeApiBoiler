module.exports = (app) => {

    return function (req, res) {

        const Google = app.models.Google
        const Profile = app.models.Profile
        const User = app.models.User

        let raw = req.user

        let googleProfile = {
            googleId: raw.id,
            name: raw.name.givenName + ' ' + raw.name.familyName,
            pictureUrl: raw.photos[0].value,
            email: raw.emails[0].value
        }

        User.create({currentProfile: 'google', currentName: googleProfile.name, currentEmail: googleProfile.email})
            .then((user) => {
                Profile.create()
                    .then((profile) => {
                        Google.create(googleProfile)
                            .then((google) => {
                                profile.setGoogle(google)
                                user.setProfile(profile)
                                res.send(user)
                            })
                    })
            }).catch((err) => {
            res.status(500).send(err)
        })
    }
}
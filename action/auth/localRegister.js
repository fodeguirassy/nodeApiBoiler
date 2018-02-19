
module.exports = (app) => {

    return function (req, res) {

        const Local = app.models.Local
        const Profile = app.models.Profile
        const User = app.models.User

        let rawLocal = req.local

        User.create( { currentProfile: 'local', currentName: rawLocal.name, currentEmail: rawLocal.email } )

            .then( (user) => {

                Profile.create()
                    .then( (profile) => {
                        Local.create(rawLocal)
                            .then( (local) => {
                                profile.setLocal(local)
                                user.setProfile(profile)
                                res.status(200).send(user)
                            })
                    })
            }).catch( (err) => {
                res.status(500).send(err)
        })

    }
}
module.exports = (app) => {
    const User = app.models.User;
    const Facebook = app.models.Facebook
    const Profile = app.models.Profile
    const Google = app.models.Google


    app.sequelize.sync({
        force: true
    }).then(() => {

        Facebook.create()
            .then((facebook) => {

               Google.create()
                   .then( (google) => {

                       Profile.create()
                           .then((profile) => {

                               profile.setFacebook(facebook)
                               profile.setGoogle(google)

                               User.create()
                                   .then((user) => {
                                       user.setProfile(profile)
                                   })
                           })


                   })
            })


    });


}
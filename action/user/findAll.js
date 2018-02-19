module.exports = (app) => {

    const User = app.models.User;
    const Profile = app.models.Profile;
    const Facebook = app.models.Facebook
    const Google = app.models.Google
    const Local = app.models.Local

    return function (req, res) {
        User.findAll({
            include: [{
                model: Profile,
                include: [ { model: Facebook }, {model: Google}, {model: Local} ]
            }]
        })
            .then(users => {
                res.send(users)
            });
    }
}
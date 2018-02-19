module.exports = (app) => {
    const User = app.models.user;

    return function (req, res) {

        User.upsert(req.user)

            .then(function (result) {

                res.status(200).send(result);

            }).catch(error => {

            res.status(500).send(error)

        });
    }

}
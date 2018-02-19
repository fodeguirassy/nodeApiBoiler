module.exports = (app) => {

    const Local = app.models.Local

    return function (req, res) {

        let rawLocal = req.body

        Local.findOne({where: {email: rawLocal.email}})
            .then((local) => {
                res.status(200).send(local)
            }).catch((err) => {
            res.status(404).send(err)
        })
    }

}
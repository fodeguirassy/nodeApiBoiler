const randomGen = require('randomstring')

module.exports = (app) => {

    return function (req, res, next) {

        let defaultPassword = randomGen.generate(8)

        let mail = {
            from: app.settings.mailer.user,
            to: "salim_guirassy@yahoo.fr", //req.profile.facebook || google.email
            subject: "Votre mot de passe",
            html: `Here is your generated password ${defaultPassword}`
        }

        app.mailer.sendMail(mail)
            .then(() => {
                app.mailer.close()
                req.defaultPassword = defaultPassword
                return next()
            }).catch((err) => {
                res.send(err)
        })
    }
}
const mailer = require('nodemailer');

module.exports = (app) => {

    console.log('Loading Mailer')

    app.mailer = mailer.createTransport({
        service: app.settings.mailer.service,
        auth: {
            user: app.settings.mailer.user,
            pass: app.settings.mailer.password
        }
    })
}
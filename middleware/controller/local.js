const sha1 = require('sha1')

module.exports = (app) => {

    return function (req, res, next) {
        let local = req.body
        if (!local.name) {
            res.status(403).send('name property is required')
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(local.email))) {
            res.status(403).send('please enter valid email')
        } else {
            local.password = sha1(local.password)
            req.local = local
            return next()
        }
    }
}
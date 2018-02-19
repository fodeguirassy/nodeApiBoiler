module.exports = (app) => {

    app.middleware = {
        bodyParser: require('body-parser'),
        controller:  require('./controller')(app)
    }

}
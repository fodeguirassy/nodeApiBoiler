module.exports = (app) => {

    app.actions = {
        user: require('./user')(app),
        auth: require('./auth')(app),
        local: require('./local')(app)
    }
}
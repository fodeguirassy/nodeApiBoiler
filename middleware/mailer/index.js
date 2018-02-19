module.exports = (app) => {

    return {
        send : require('./send')(app)
    }
}
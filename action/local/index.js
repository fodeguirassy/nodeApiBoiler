module.exports = (app) => {

    return {

        findOne : require('./findOne')(app)
    }

}
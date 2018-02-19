const Sequelize = require('sequelize')

module.exports = (app) => {
    return app.sequelize.define('google', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : Sequelize.STRING,
        googleId : Sequelize.STRING,
        pictureUrl : Sequelize.STRING,
        email : Sequelize.STRING
    })
}
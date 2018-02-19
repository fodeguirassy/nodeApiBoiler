const Sequelize = require('sequelize')

module.exports = (app) => {
    return app.sequelize.define('local', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : Sequelize.STRING,
        pictureUrl : Sequelize.STRING,
        email : Sequelize.STRING,
        password : Sequelize.STRING
    })
}
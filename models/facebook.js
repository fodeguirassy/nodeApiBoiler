const Sequelize = require('sequelize');

module.exports = (app) => {

    return app.sequelize.define('facebook', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        facebookID: {
            type: Sequelize.STRING,
            unique: true
        },
        birthday: Sequelize.DATE,
        gender: Sequelize.STRING,
        email: Sequelize.STRING,
        city: Sequelize.STRING,
        pictureUrl: Sequelize.STRING
    })
}

const Sequelize = require('sequelize');
module.exports = (app) => {
    return app.sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        currentProfile: Sequelize.STRING,
        currentName: Sequelize.STRING,
        currentCity: Sequelize.STRING,
        currentEmail: Sequelize.STRING
    });

};

const Sequelize = require('sequelize');

module.exports = (app) => {

  return app.sequelize.define('facebook', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    accessToken: Sequelize.STRING,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    facebookID: {
      type: Sequelize.STRING,
      unique: true
    },
    birthday: Sequelize.DATE,
    gender: Sequelize.STRING,
    displayName: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING
  })

}
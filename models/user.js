const Sequelize = require('sequelize');
module.exports = (app) => {
  return app.sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    currentProfile: Sequelize.STRING,
    currentFirstName: Sequelize.STRING,
    currentLastName: Sequelize.STRING,
    currentAddress: Sequelize.STRING
  });

};
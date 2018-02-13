const Sequelize = require('sequelize');
const mysql = require('mysql2');

module.exports = (app, resolve, reject) => {
  const url = `mysql://${app.settings.mysql.user}:${app.settings.mysql.password}@${app.settings.mysql.host}:${app.settings.mysql.port}/${app.settings.mysql.database}`
  app.sequelize = new Sequelize(url, {logging: false})
  app.sequelize.authenticate()
    .then(() => {/*console.log('Connection succeeded'); */ resolve();})
    .catch((error) => { console.log('sequelize initialization failed error is : ', error)})
}

module.exports = (app) => {
  console.log('\nLoading settings ...');
  app.settings =  require('./settings.json');
};

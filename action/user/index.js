module.exports = (app) => {

  return {
    create: require('./create')(app),
    findOne: require('./findOne')(app),
    findAll: require('./findAll')(app)
  }


}
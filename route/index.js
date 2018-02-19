const passport = require('passport');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');


module.exports = (app) => {

  console.log('Loading Routes ... ');


  app.use(helmet());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  /*
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  */


  app.use(session({
    secret: app.settings.session.secret,
    resave: false,
    name: "sessionId",
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());


  app.use('/auth', require('./auth')(app));
  app.use('/user', require('./user')(app));


}
